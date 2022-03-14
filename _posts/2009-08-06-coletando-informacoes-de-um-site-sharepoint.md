---
id: 205
title: 'Coletando informações de um site SharePoint'
date: '2009-08-06T17:32:09-03:00'
author: 'Leandro Daniel'

guid: /post/Coletando-informacoes-de-um-site-SharePoint.aspx
permalink: /coletando-informacoes-de-um-site-sharepoint/
categories:
    - IT
tags:
    - pt-br
    - SharePoint
---

Pra quem está iniciando os estudos com SharePoint 3.0, segue um código útil que permite coletar as informações de um site:

```csharp
using Microsoft.SharePoint;
using Microsoft.SharePoint.WebControls;
using Microsoft.SharePoint.WebPartPages;
using Microsoft.SharePoint.Utilities;

...

List<string> listResult = new List<string>();

using (SPSite siteColl = new SPSite(URL))
{
    using (SPWeb site = siteColl.RootWeb)
    {
        listResult.Add("Title: " + site.Title);
        listResult.Add("Url: " + site.Url);
        listResult.Add("IsRootWeb: " + site.IsRootWeb.ToString());
        listResult.Add("Name: " + site.Name);
        listResult.Add("PortalName: " + site.PortalName);
        listResult.Add("CurrentUser: " + site.CurrentUser.LoginName);
        listResult.Add("Description: " + site.Description);

        listResult.Add("Lists: ");
        foreach (SPList list in site.Lists)
        {
            listResult.Add("  List: " + list.Title + " - " + list.BaseType.ToString() + " - count: " + list.Items.Count);
        }

        listResult.Add("ContentTypes: ");
        foreach (SPContentType ct in site.ContentTypes)
        {
            listResult.Add("  ContentType: " + ct.Name);
        }

        listResult.Add("Features: ");
        foreach (SPFeature feat in site.Features)
        {
            listResult.Add("  Feature: " + feat.Definition.DisplayName);
        }

        listResult.Add("Modules: ");
        foreach (SPModule mod in site.Modules)
        {
            listResult.Add("  Module: " + mod.Name + " - url: " + mod.Url);
        }

        listResult.Add("Fields: "); //Long list
        foreach (SPField field in site.Fields)
        {
            listResult.Add("  Field: " + field.Title);
        }

        listResult.Add("Users: ");
        foreach (SPUser usr in site.Users)
        {
            listResult.Add("  LoginName: " + usr.LoginName);
        }

        listResult.Add("Groups: ");
        foreach (SPGroup role in site.Groups)
        {
            listResult.Add("  Group/Role: " + role.Name);
        }

        listResult.Add("AllProperties: ");
        foreach (System.Collections.DictionaryEntry prop in site.AllProperties)
        {
            listResult.Add("  key: " + prop.Key.ToString() + " - val: " + prop.Value.ToString());
        }

        listResult.Add("Properties: ");
        foreach (System.Collections.DictionaryEntry prop in site.Properties)
        {
            listResult.Add("  key: " + prop.Key.ToString() + " - val: " + prop.Value.ToString());
        }

        listResult.Add("Webs: ");
        foreach (SPWeb childsite in site.Webs)
        {
            listResult.Add("  Title: " + childsite.Title);
            listResult.Add("  Url: " + childsite.Url);
            listResult.Add("  IsRootWeb: " + childsite.IsRootWeb.ToString());
        }
    }
}</string></string>
```

Com o código também é possível aprender alguns conceitos importantes do produto. Atentem-se para a recomendação de boas prática no desenvolvimento de SharePoint na utilização do ***using***.
