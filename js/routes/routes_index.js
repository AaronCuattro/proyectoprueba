var ROUTES_INDEX = {"name":"<root>","kind":"module","className":"AppModule","children":[{"name":"routes","filename":"src/app/app-routing.module.ts","module":"AppRoutingModule","children":[{"path":"","redirectTo":"folder/Inbox","pathMatch":"full"},{"path":"folder/:id","loadChildren":"./folder/folder.module#FolderPageModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/folder/folder-routing.module.ts","module":"FolderPageRoutingModule","children":[{"path":"","component":"FolderPage"}],"kind":"module"}],"module":"FolderPageModule"}]}],"kind":"module"}]}