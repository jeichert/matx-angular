(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{tt8O:function(t,e,c){"use strict";c.r(e),c.d(e,"SearchViewModule",(function(){return O}));var a=c("ofXK"),n=c("tyNb"),r=c("Fj/B"),i=c("fXoL"),o=c("tk/3");let s=(()=>{class t{constructor(t){this.http=t}getCountries(t){return this.http.get("https://restcountries.eu/rest/v2/name/"+t)}}return t.\u0275fac=function(e){return new(e||t)(i.fc(o.c))},t.\u0275prov=i.Rb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var l=c("lDzL");function u(t,e){1&t&&i.Qc(0," Flag ")}function m(t,e){1&t&&i.Wb(0,"img",11),2&t&&i.tc("src",e.value,i.Jc)}function h(t,e){1&t&&i.Qc(0," Name ")}function b(t,e){1&t&&i.Qc(0),2&t&&i.Sc(" ",e.value," ")}function p(t,e){1&t&&i.Qc(0," Region ")}function d(t,e){1&t&&i.Qc(0),2&t&&i.Sc(" ",e.value," ")}function g(t,e){1&t&&i.Qc(0," Capital ")}function f(t,e){1&t&&i.Qc(0),2&t&&i.Sc(" ",e.value," ")}function x(t,e){1&t&&i.Qc(0," Population ")}function v(t,e){1&t&&i.Qc(0),2&t&&i.Sc(" ",e.value," ")}const w=[{path:"",component:(()=>{class t{constructor(t,e){this.searchService=t,this.countryService=e}ngOnInit(){this.searchTermSub=this.searchService.searchTerm$.subscribe(t=>{this.countries$=this.countryService.getCountries(t)})}ngOnDestroy(){this.searchTermSub&&this.searchTermSub.unsubscribe()}}return t.\u0275fac=function(e){return new(e||t)(i.Vb(r.a),i.Vb(s))},t.\u0275cmp=i.Pb({type:t,selectors:[["app-result-page"]],decls:22,vars:17,consts:[[1,"m-033"],[1,"mt-0"],[1,"mat-box-shadow","m-033"],[1,"material","bg-white",3,"columnMode","headerHeight","footerHeight","rowHeight","limit","rows","scrollbarH"],["name","flag",3,"maxWidth"],["ngx-datatable-header-template",""],["ngx-datatable-cell-template",""],["name","name",3,"maxWidth"],["name","region",3,"maxWidth"],["name","capital",3,"maxWidth"],["name","population",3,"maxWidth"],["height","32px","width","auto","alt","",2,"border-radius","4px",3,"src"]],template:function(t,e){1&t&&(i.bc(0,"div",0),i.bc(1,"h6",1),i.Qc(2),i.oc(3,"async"),i.ac(),i.ac(),i.bc(4,"div",2),i.bc(5,"ngx-datatable",3),i.oc(6,"async"),i.bc(7,"ngx-datatable-column",4),i.Oc(8,u,1,0,"ng-template",5),i.Oc(9,m,1,1,"ng-template",6),i.ac(),i.bc(10,"ngx-datatable-column",7),i.Oc(11,h,1,0,"ng-template",5),i.Oc(12,b,1,1,"ng-template",6),i.ac(),i.bc(13,"ngx-datatable-column",8),i.Oc(14,p,1,0,"ng-template",5),i.Oc(15,d,1,1,"ng-template",6),i.ac(),i.bc(16,"ngx-datatable-column",9),i.Oc(17,g,1,0,"ng-template",5),i.Oc(18,f,1,1,"ng-template",6),i.ac(),i.bc(19,"ngx-datatable-column",10),i.Oc(20,x,1,0,"ng-template",5),i.Oc(21,v,1,1,"ng-template",6),i.ac(),i.ac(),i.ac()),2&t&&(i.Gb(2),i.Sc(' Search result for "',i.pc(3,13,e.searchService.searchTerm$),'" '),i.Gb(3),i.tc("columnMode","force")("headerHeight",50)("footerHeight",50)("rowHeight",50)("limit",8)("rows",i.pc(6,15,e.countries$))("scrollbarH",!0),i.Gb(2),i.tc("maxWidth",160),i.Gb(3),i.tc("maxWidth",250),i.Gb(3),i.tc("maxWidth",250),i.Gb(3),i.tc("maxWidth",250),i.Gb(3),i.tc("maxWidth",250))},directives:[l.d,l.b,l.c,l.a],pipes:[a.b],styles:[""]}),t})()}];let S=(()=>{class t{}return t.\u0275mod=i.Tb({type:t}),t.\u0275inj=i.Sb({factory:function(e){return new(e||t)},imports:[[n.k.forChild(w)],n.k]}),t})();var y=c("Wp6s");let O=(()=>{class t{}return t.\u0275mod=i.Tb({type:t}),t.\u0275inj=i.Sb({factory:function(e){return new(e||t)},imports:[[y.c,a.c,l.e,S]]}),t})()}}]);