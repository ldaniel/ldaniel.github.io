---
id: 121
title: 'Dica de framework de IA e Computer Vision'
date: '2010-04-23T21:58:00-03:00'
author: 'Leandro Daniel'

guid: /post/Dica-de-framework-de-IA-e-Computer-Vision.aspx
permalink: /dica-de-framework-de-ia-e-computer-vision/
categories:
    - IT
tags:
    - pt-br
    - Dicas
    - Vídeos
---

Comentei outro dia no [Twitter](http://twitter.com/leandronet) que estava “brincando” com um framework de captura de movimentos para vídeo e algumas pessoas sugeriram que eu postasse algo a respeito. Dentre os que estudei, encontrei um bastante simples de utilizar chamado [AForge.NET](http://code.google.com/p/aforge/). Mais do que um framework para trabalharmos com captura de movimentos o AForge.NET traz inúmeras bibliotecas que auxiliam no desenvolvimento de aplicações que utilizam *Artificial Intelligence* e *Computer Vision* (a tradução livre seria Visão por Computador), sendo:

- **AForge.Imaging** – library with image processing routines and filters;
- **AForge.Vision** – computer vision library;
- **AForge.Neuro** – neural networks computation library;
- **AForge.Genetic** – evolution programming library;
- **AForge.Fuzzy** – fuzzy computations library;
- **AForge.MachineLearning** – machine learning library;
- **AForge.Robotics** – library providing support of some robotics kits;
- **AForge.Video** – set of libraries for video processing

A seguir demonstro um exemplo de utilização da biblioteca **AForge.Vision**. Utilizei um projeto WinForms do Visual Studio 2010, com os controles demonstrados na figura abaixo (clique na imagem para ampliar).

[![detectorMovimento](http://leandrodaniel.com/pics/detectorMovimento_thumb.jpg "detectorMovimento")](http://leandrodaniel.com/pics/detectorMovimento.jpg)

O painel cinza é um controle do tipo **VideoSourcePlayer**, disponível com a instalação do AForge.NET. Para carregar os dispositivos de vídeo presentes na máquina (webcams) basta utilizar o código a seguir:

```
<pre class="brush: csharp;">private void CarregarDispositivos()
{
    dispositivos = new FilterInfoCollection(FilterCategory.VideoInputDevice);

    if (dispositivos.Count > 0)
    {
        foreach (FilterInfo dispositivo in dispositivos)
        {
            cbxDispositivos.Items.Add(dispositivo.Name);
        }
    }
}
```

   
Usei a classe **FilterInfoCollection** que é inicializada com a enumeração **FilterCategory.VideoInputDevice** que retorna uma *collection* de dispositivos de vídeo encontrados na máquina.

Para ligar a webcam utilizei o seguinte código:

```
<pre class="brush: csharp;">private void AbrirDispositivoVideo(IVideoSource source)
{
    this.Cursor = Cursors.WaitCursor;            
    FecharDispositivosVideo();<br></br>
    videoSourcePlayer.VideoSource = source;
    videoSourcePlayer.Start();
    videoSource = source;
    this.Cursor = Cursors.Default;
}
```

Reparem que antes de ligar a webcam existe um método chamado **FecharDispositivosVideo** que finaliza qualquer dispositivo previamente aberto. Esse método é descrito a seguir.

```
<pre class="brush: csharp;">private void FecharDispositivosVideo()
{
    this.Cursor = Cursors.WaitCursor;
    videoSourcePlayer.SignalToStop();

    for (int i = 0; (i < 50) && (videoSourcePlayer.IsRunning); i++)
    {
        Thread.Sleep(100);
    }

    if (videoSourcePlayer.IsRunning)
        videoSourcePlayer.Stop();

    if (detector != null)
        detector.Reset();

    videoSourcePlayer.BorderColor = Color.Black;
    this.Cursor = Cursors.Default;
}
```

Basicamente, o que é necessário fazer é checar se o controle **videoSourcePlayer** está rodando. Em seguida o controle é parado e o objeto **detector** (do tipo **MotionDetector**) é resetado. O objeto **detector** será responsável por implementar os algoritmos de detecção e processamento da imagem para destaque dos movimentos.

Para o botão “Detectar Movimento” codifiquei o código a seguir:

```
<pre class="brush: csharp;">private void btnDetectarMovimento_Click(object sender, EventArgs e)
{
    IMotionDetector detectionAlgorithm;            
    IMotionProcessing detectionProcessing;

    if (rbtSimples.Checked)
        detectionAlgorithm = new SimpleBackgroundModelingDetector(true, true);
    else
        detectionAlgorithm = new TwoFramesDifferenceDetector();

    if (rbtContorno.Checked)
        detectionProcessing = new MotionBorderHighlighting();
    else                
        detectionProcessing = new MotionAreaHighlighting();
    
    detector.MotionDetectionAlgorthm = detectionAlgorithm;
    detector.MotionProcessingAlgorithm = detectionProcessing;

    // Outros códigos menos relavantes aqui...
}
```

A detecção e o processamento das imagens são realizadas, respectivamente, pelas interfaces **IMotionDetector** e **IMotionProcessing**. Passamos qual a implementação que desejamos utilizar e todo o trabalho será realizado pela biblioteca do AForge.NET. Realmente é bastante simples.

O último passo necessário é codificar qual a taxa de diferença entre frames do vídeo iremos utilizar, fazendo através do evento **NewFrame** do controle **videoSourcePlayer** o seguinte:

```
<pre class="brush: csharp;">private void videoSourcePlayer_NewFrame(object sender, ref Bitmap image)
{
    lock (this)
    {
        if (detector != null)
        {
            float motionLevel = detector.ProcessFrame(image);

            if (motionLevel > motionAlarmLevel)
                flash = (int)(2 * (1000 / 200));
        }
    }
}
```

Você pode fazer o download do código-fonte completo da solução usando o link abaixo:

<iframe frameborder="0" marginheight="0" marginwidth="0" scrolling="no" src="http://cid-682bb4abc622d264.skydrive.live.com/embedicon.aspx/.Public/DetectorMovimento.zip" style="padding-bottom: 0px; background-color: #fcfcfc; padding-left: 0px; width: 98px; padding-right: 0px; height: 115px; padding-top: 0px" title="Preview"></iframe>

   
Abaixo coloquei um vídeo demonstrando a aplicação em ação. Repare que o algoritmo é capaz de detectar as mais sutis variações de luminosidade no ambiente.

<object height="300" width="400"><param name="allowfullscreen" value="true"></param><param name="allowscriptaccess" value="always"></param><param name="movie" value="http://vimeo.com/moogaloop.swf?clip_id=11173153&server=vimeo.com&show_title=1&show_byline=1&show_portrait=0&color=&fullscreen=1"></param><embed allowfullscreen="true" allowscriptaccess="always" height="300" src="http://vimeo.com/moogaloop.swf?clip_id=11173153&server=vimeo.com&show_title=1&show_byline=1&show_portrait=0&color=&fullscreen=1" type="application/x-shockwave-flash" width="400"></embed></object>

Como vimos o AForge.NET implementa toda a base necessária para utilizarmos a tecnologia de detecção de movimentos de maneira rápida e simplificada.

Várias ideias me ocorrem quando vejo frameworks como esse, pois as possibilidades são muitas. Estou trabalhando em algumas um pouco malucas e experimentais, se sair alguma coisa interessante eu postarei aqui.

🙂
