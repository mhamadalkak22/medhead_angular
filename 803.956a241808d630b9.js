"use strict";(self.webpackChunkmedhead=self.webpackChunkmedhead||[]).push([[803],{4803:(G,h,o)=>{o.r(h),o.d(h,{UrgencesModule:()=>B});var d=o(6895),s=o(433),Z=o(2687),R=o(217),t=o(1571),b=o(1481),O=o(4440),S=o(6626),T=o(881),M=o(529);let A=(()=>{class n{constructor(e){this.httpClient=e}getRecommandation(e,i,r){return this.httpClient.post(T.F+"getRecommandations",{specID:r,latitude:e,longitude:i})}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(M.eN))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var F=o(8761),v=o(2216),p=o(9549),U=o(3238),x=o(4859),C=o(1572),u=o(3805),y=o(4144);function I(n,a){1&n&&(t.TgZ(0,"div",3),t._UZ(1,"mat-spinner",4),t.qZA())}function N(n,a){if(1&n&&(t.TgZ(0,"div",17),t._UZ(1,"fa-icon",18),t._uU(2),t.qZA()),2&n){const e=t.oxw(2);t.xp6(1),t.Q6J("icon",e.faLocation),t.xp6(1),t.hij(" Votre position: ",e.currentPosition," ")}}function J(n,a){if(1&n&&(t.TgZ(0,"mat-option",19),t._uU(1),t.qZA()),2&n){const e=a.$implicit;t.Q6J("value",e.name),t.xp6(1),t.hij(" ",e.name," ")}}function L(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"button",24),t.NdJ("click",function(){t.CHM(e);const r=t.oxw(3);return t.KtG(r.addReservation())}),t._uU(1,"R\xe9server"),t.qZA()}}function _(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"button",25),t.NdJ("click",function(){t.CHM(e);const r=t.oxw(3);return t.KtG(r.goToMap())}),t._uU(1,"Ouvrir la carte"),t.qZA()}}function P(n,a){if(1&n&&(t.TgZ(0,"div",20)(1,"h1"),t._uU(2),t.qZA(),t._UZ(3,"iframe",21),t.YNc(4,L,2,0,"button",22),t.YNc(5,_,2,0,"button",23),t.qZA()),2&n){const e=t.oxw(2);t.xp6(2),t.hij("Le centre le plus proche est ",e.recommandations[0].hopital.name,""),t.xp6(1),t.Q6J("src",e.mapLink,t.uOi),t.xp6(1),t.Q6J("ngIf",!e.reservationEffectuee),t.xp6(1),t.Q6J("ngIf",e.reservationEffectuee)}}function E(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"div",5)(1,"div",6),t.YNc(2,N,3,2,"div",7),t.TgZ(3,"div",8)(4,"form",9)(5,"mat-form-field",10)(6,"mat-label"),t._uU(7,"Nom du patient"),t.qZA(),t._UZ(8,"input",11),t.qZA(),t.TgZ(9,"mat-form-field",10)(10,"mat-label"),t._uU(11,"Sp\xe9cialit\xe9"),t.qZA(),t._UZ(12,"input",12),t.TgZ(13,"mat-autocomplete",null,13),t.YNc(15,J,2,2,"mat-option",14),t.qZA()(),t.TgZ(16,"button",15),t.NdJ("click",function(){t.CHM(e);const r=t.oxw();return t.KtG(r.getRecommandations())}),t._uU(17,"Rechercher"),t.qZA()()()(),t.YNc(18,P,6,4,"div",16),t.qZA()}if(2&n){const e=t.MAs(14),i=t.oxw();t.xp6(2),t.Q6J("ngIf",i.currentPosition),t.xp6(2),t.Q6J("formGroup",i.emergencyForm),t.xp6(8),t.Q6J("matAutocomplete",e),t.xp6(3),t.Q6J("ngForOf",i.specOptions),t.xp6(3),t.Q6J("ngIf",i.recommandations.length>0)}}let Y=(()=>{class n{constructor(e,i,r,l,c,g){this.sanitizer=e,this.addresseService=i,this.formBuilder=r,this.specService=l,this.recommandationService=c,this.reservationService=g,this.mapLink=null,this.faLocation=Z.iUi,this.reservationEffectuee=!1,this.allSpecs=[],this.specOptions=[],this.recommandations=[],this.emergencyForm=this.formBuilder.group({patient:["",s.kI.required],specialite:["",s.kI.required]}),this.getAllSpecs(),this.emergencyForm.get("specialite").valueChanges.subscribe(m=>{this.specOptions=this.allSpecs.filter(f=>f.name.includes(m))}),navigator.geolocation.getCurrentPosition(m=>{this.latitude=m.coords.latitude,this.longitude=m.coords.longitude,this.isLocationLoading=!0,this.addresseService.getAddressByCoordinates(this.latitude,this.longitude).subscribe(f=>{this.currentPosition=f.display_name,this.isLocationLoading=!1})})}ngOnInit(){}getAllSpecs(){this.specService.getSpecialites().subscribe(e=>{this.allSpecs=e.specialites,this.specOptions=this.allSpecs})}getRecommandations(){let e=this.latitude.toString(),i=this.longitude.toString(),r=this.emergencyForm.get("specialite").value,l=this.specOptions.find(c=>c.name==r).id;this.recommandationService.getRecommandation(e,i,l).subscribe(c=>{this.recommandations=c.recommandations,console.log(this.recommandations),this.mapLink=this.sanitizer.bypassSecurityTrustResourceUrl(`https://maps.google.com/maps?q=${this.recommandations[0].hopital.addresse.lat},${this.recommandations[0].hopital.addresse.lon}&hl=fr&z=14&amp&output=embed`),this.reservationEffectuee=!1})}addReservation(){let e=this.recommandations[0].hopital.id,i=this.emergencyForm.get("specialite").value,r=this.specOptions.find(c=>c.name===i).id,l=this.emergencyForm.get("patient").value;this.reservationService.addReservation(e,l,r).subscribe(c=>{null==c.exceptionMessage&&(R.H.successMessage("L'hopital est notifi\xe9 de votre arriv\xe9e"),this.reservationEffectuee=!0),console.log({response:c})})}goToMap(){window.location.href=`https://maps.google.com/maps?q=${this.recommandations[0].hopital.addresse.lat},${this.recommandations[0].hopital.addresse.lon}&hl=fr&z=14&amp`}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(b.H7),t.Y36(O.O),t.Y36(s.qu),t.Y36(S.R),t.Y36(A),t.Y36(F.D))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-recommandation"]],decls:7,vars:2,consts:[[1,"container"],["class","loading",4,"ngIf"],["class","body",4,"ngIf"],[1,"loading"],["diameter","50"],[1,"body"],[1,"left"],["class","location",4,"ngIf"],[1,"emergencyFormContainer"],[1,"emergencyForm",3,"formGroup"],["appearance","fill"],["type","text","placeholder","nom","matInput","","formControlName","patient"],["type","text","matInput","","formControlName","specialite",3,"matAutocomplete"],["specAuto","matAutocomplete"],[3,"value",4,"ngFor","ngForOf"],["mat-button","",1,"rechercher",3,"click"],["class","right",4,"ngIf"],[1,"location"],[1,"icon",3,"icon"],[3,"value"],[1,"right"],[1,"carte",3,"src"],["mat-button","","class","reserver",3,"click",4,"ngIf"],["mat-button","","class","itineraire",3,"click",4,"ngIf"],["mat-button","",1,"reserver",3,"click"],["mat-button","",1,"itineraire",3,"click"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0)(1,"h1"),t._uU(2,"URGENCES"),t.qZA(),t.TgZ(3,"h3"),t._uU(4,"S\xe9lectionnez le cas d'urgence dans la liste ci dessous et vous serew dirig\xe9 vers l'h\xf4pital le plus proche en capacit\xe9 d'accueil "),t.qZA(),t.YNc(5,I,2,0,"div",1),t.YNc(6,E,19,5,"div",2),t.qZA()),2&e&&(t.xp6(5),t.Q6J("ngIf",i.isLocationLoading),t.xp6(1),t.Q6J("ngIf",!i.isLocationLoading))},dependencies:[d.sg,d.O5,v.BN,s._Y,s.Fj,s.JJ,s.JL,s.sg,s.u,p.KE,p.hX,U.ey,x.lW,C.Ou,u.XC,u.ZL,y.Nt],styles:[".container[_ngcontent-%COMP%]{margin:1em;display:flex;flex-direction:column;justify-content:center;align-items:center}h1[_ngcontent-%COMP%]{color:red}.body[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 2fr;grid-column-gap:1em!important;justify-content:center;align-items:center}.left[_ngcontent-%COMP%]{border-radius:.3em;padding:1em}.location[_ngcontent-%COMP%]{background-color:#f9d5da;padding:1em;border-radius:.3em;border:1px solid red;color:red;display:flex;flex-direction:row;justify-content:center;align-items:center}.emergencyFormContainer[_ngcontent-%COMP%]{border:1px solid red;border-radius:.3em;padding:1em;display:flex;flex-direction:column;margin:1em 0}.emergencyForm[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:stretch;align-items:stretch}.rechercher[_ngcontent-%COMP%]{color:#fff;background-color:red;transition:all .2s}.rechercher[_ngcontent-%COMP%]:hover{transform:scale(1.05);color:#fff}.right[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;border:1px solid red;padding:1em;border-radius:.3em}.carte[_ngcontent-%COMP%]{width:100%;height:50vh}.reserver[_ngcontent-%COMP%]{width:100%;margin-top:1em;background-color:red;color:#fff;transition:all .2s}.itineraire[_ngcontent-%COMP%]{width:100%;margin-top:1em;background-color:green;color:#fff;transition:all .2s}.reserver[_ngcontent-%COMP%]:hover{transform:scale(1.02)}"]}),n})();var Q=o(9347),j=o(5113);const z=[{path:"",component:Y}];let B=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[d.ez,v.uH,s.UX,j.LD,p.lN,x.ot,C.Cq,u.Bb,y.c,Q.Bz.forChild(z)]}),n})()}}]);