"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[716],{5716:function(e,l,i){i.r(l),i.d(l,{default:function(){return d}});var n=i(9434),r=i(6323),a=i(824),s=i(4389),t=i(184),o=function(){var e=(0,n.I0)();return(0,t.jsxs)(a.xu,{maxW:"500px",mx:"auto",mt:20,bgGradient:["linear(to-tr, gray.400, gray.200)","linear(to-t, gray.200, gray.100)","linear(to-b, gray.100, gray.300)"],height:450,borderRadius:"5px",boxShadow:"dark-lg",p:"6",rounded:"md",children:[(0,t.jsx)("h1",{children:"Register"}),(0,t.jsxs)("form",{onSubmit:function(l){l.preventDefault();var i=l.currentTarget;e((0,r.z2)({name:i.elements.name.value,email:i.elements.email.value,password:i.elements.password.value})),i.reset()},style:{display:"flex",flexDirection:"column",padding:15},children:[(0,t.jsxs)("label",{style:{display:"flex",flexDirection:"column",marginTop:10},children:["First name ",(0,t.jsx)("i",{style:{fontSize:12},children:"(5 - 12 chars)"}),(0,t.jsx)(s.I,{type:"text",name:"name",placeholder:"name",pattern:"\\w{5,12}",outline:"1px solid purple"})]}),(0,t.jsxs)("label",{style:{display:"flex",flexDirection:"column",marginTop:10},children:["Email",(0,t.jsx)(s.I,{type:"email",name:"email",placeholder:"email",outline:"1px solid purple"})]}),(0,t.jsxs)("label",{style:{display:"flex",flexDirection:"column",marginTop:10},children:["Password ",(0,t.jsx)("i",{style:{fontSize:12},children:"(5 - 12 chars)"}),(0,t.jsx)(s.I,{type:"password",name:"password",placeholder:"password",outline:"1px solid purple"})]}),(0,t.jsx)("div",{type:"submit",style:{marginTop:20,display:"flex",justifyContent:"center"},children:(0,t.jsx)(a.xu,{as:"button",color:"white",fontWeight:"bold",borderRadius:"md",bgGradient:"linear(to-r, purple.500, red.500)",w:"300px",h:"50px",_hover:{bgGradient:"linear(to-r, blue.500, pink.500)"},children:"Send"})})]})]})},d=function(){return(0,t.jsx)(o,{})}},4389:function(e,l,i){i.d(l,{I:function(){return q}});var n=i(1413),r=i(5987),a=i(9439),s=i(9886),t=i(4591),o=i(5597),d=i(6516),u=i(2996),c=i(1665),p=i(6992),m=i(2791),h=i(184),v=["id","isRequired","isInvalid","isDisabled","isReadOnly"],x=["getRootProps","htmlProps"],f=(0,s.k)({name:"FormControlStylesContext",errorMessage:"useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormControl />\" "}),b=(0,a.Z)(f,2),y=b[0],g=b[1],Z=(0,s.k)({strict:!1,name:"FormControlContext"}),I=(0,a.Z)(Z,2),R=I[0],k=I[1];var j=(0,o.G)((function(e,l){var i=(0,d.jC)("Form",e),s=function(e){var l=e.id,i=e.isRequired,s=e.isInvalid,o=e.isDisabled,d=e.isReadOnly,u=(0,r.Z)(e,v),c=(0,m.useId)(),h=l||"field-".concat(c),x="".concat(h,"-label"),f="".concat(h,"-feedback"),b="".concat(h,"-helptext"),y=(0,m.useState)(!1),g=(0,a.Z)(y,2),Z=g[0],I=g[1],R=(0,m.useState)(!1),k=(0,a.Z)(R,2),j=k[0],F=k[1],C=(0,m.useState)(!1),T=(0,a.Z)(C,2),_=T[0],q=T[1],P=(0,m.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,n.Z)((0,n.Z)({id:b},e),{},{ref:(0,t.lq)(l,(function(e){e&&F(!0)}))})}),[b]),w=(0,m.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,n.Z)((0,n.Z)({},e),{},{ref:l,"data-focus":(0,p.PB)(_),"data-disabled":(0,p.PB)(o),"data-invalid":(0,p.PB)(s),"data-readonly":(0,p.PB)(d),id:void 0!==e.id?e.id:x,htmlFor:void 0!==e.htmlFor?e.htmlFor:h})}),[h,o,_,s,d,x]),D=(0,m.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,n.Z)((0,n.Z)({id:f},e),{},{ref:(0,t.lq)(l,(function(e){e&&I(!0)})),"aria-live":"polite"})}),[f]),S=(0,m.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,n.Z)((0,n.Z)((0,n.Z)({},e),u),{},{ref:l,role:"group"})}),[u]),O=(0,m.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,n.Z)((0,n.Z)({},e),{},{ref:l,role:"presentation","aria-hidden":!0,children:e.children||"*"})}),[]);return{isRequired:!!i,isInvalid:!!s,isReadOnly:!!d,isDisabled:!!o,isFocused:!!_,onFocus:function(){return q(!0)},onBlur:function(){return q(!1)},hasFeedbackText:Z,setHasFeedbackText:I,hasHelpText:j,setHasHelpText:F,id:h,labelId:x,feedbackId:f,helpTextId:b,htmlProps:u,getHelpTextProps:P,getErrorMessageProps:D,getRootProps:S,getLabelProps:w,getRequiredIndicatorProps:O}}((0,u.Lr)(e)),o=s.getRootProps,f=(s.htmlProps,(0,r.Z)(s,x)),b=(0,p.cx)("chakra-form-control",e.className);return(0,h.jsx)(R,{value:f,children:(0,h.jsx)(y,{value:i,children:(0,h.jsx)(c.m.div,(0,n.Z)((0,n.Z)({},o({},l)),{},{className:b,__css:i.container}))})})}));j.displayName="FormControl",(0,o.G)((function(e,l){var i=k(),r=g(),a=(0,p.cx)("chakra-form__helper-text",e.className);return(0,h.jsx)(c.m.div,(0,n.Z)((0,n.Z)({},null==i?void 0:i.getHelpTextProps(e,l)),{},{__css:r.helperText,className:a}))})).displayName="FormHelperText";var F=["isDisabled","isInvalid","isReadOnly","isRequired"],C=["id","disabled","readOnly","required","isRequired","isInvalid","isReadOnly","isDisabled","onFocus","onBlur"];function T(e){var l=function(e){var l,i,a,s=k(),t=e.id,o=e.disabled,d=e.readOnly,u=e.required,c=e.isRequired,m=e.isInvalid,h=e.isReadOnly,v=e.isDisabled,x=e.onFocus,f=e.onBlur,b=(0,r.Z)(e,C),y=e["aria-describedby"]?[e["aria-describedby"]]:[];(null==s?void 0:s.hasFeedbackText)&&(null==s?void 0:s.isInvalid)&&y.push(s.feedbackId);(null==s?void 0:s.hasHelpText)&&y.push(s.helpTextId);return(0,n.Z)((0,n.Z)({},b),{},{"aria-describedby":y.join(" ")||void 0,id:null!=t?t:null==s?void 0:s.id,isDisabled:null!=(l=null!=o?o:v)?l:null==s?void 0:s.isDisabled,isReadOnly:null!=(i=null!=d?d:h)?i:null==s?void 0:s.isReadOnly,isRequired:null!=(a=null!=u?u:c)?a:null==s?void 0:s.isRequired,isInvalid:null!=m?m:null==s?void 0:s.isInvalid,onFocus:(0,p.v0)(null==s?void 0:s.onFocus,x),onBlur:(0,p.v0)(null==s?void 0:s.onBlur,f)})}(e),i=l.isDisabled,a=l.isInvalid,s=l.isReadOnly,t=l.isRequired,o=(0,r.Z)(l,F);return(0,n.Z)((0,n.Z)({},o),{},{disabled:i,readOnly:s,required:t,"aria-invalid":(0,p.Qm)(a),"aria-required":(0,p.Qm)(t),"aria-readonly":(0,p.Qm)(s)})}var _=["htmlSize"],q=(0,o.G)((function(e,l){var i=e.htmlSize,a=(0,r.Z)(e,_),s=(0,d.jC)("Input",a),t=T((0,u.Lr)(a)),o=(0,p.cx)("chakra-input",e.className);return(0,h.jsx)(c.m.input,(0,n.Z)((0,n.Z)({size:i},t),{},{__css:s.field,ref:l,className:o}))}));q.displayName="Input",q.id="Input"}}]);
//# sourceMappingURL=716.5feab331.chunk.js.map