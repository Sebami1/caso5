"use strict";(self.webpackChunkfastura=self.webpackChunkfastura||[]).push([[5378],{3905:(e,a,n)=>{n.d(a,{Zo:()=>d,kt:()=>h});var t=n(67294);function o(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function r(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){o(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function i(e,a){if(null==e)return{};var n,t,o=function(e,a){if(null==e)return{};var n,t,o={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||(o[n]=e[n]);return o}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=t.createContext({}),p=function(e){var a=t.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):l(l({},a),e)),n},d=function(e){var a=p(e.components);return t.createElement(s.Provider,{value:a},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},m=t.forwardRef((function(e,a){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=p(n),m=o,h=c["".concat(s,".").concat(m)]||c[m]||u[m]||r;return n?t.createElement(h,l(l({ref:a},d),{},{components:n})):t.createElement(h,l({ref:a},d))}));function h(e,a){var n=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=m;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i[c]="string"==typeof e?e:o,l[1]=i;for(var p=2;p<r;p++)l[p]=n[p];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85969:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var t=n(87462),o=(n(67294),n(3905));const r={},l="WhatsApp API ejemplo",i={unversionedId:"herramientas-adicionales/Whatsapp-API-ejemplo",id:"herramientas-adicionales/Whatsapp-API-ejemplo",title:"WhatsApp API ejemplo",description:"C\xf3digo ejemplo de Env\xedo de Mensaje de WhatsApp a trav\xe9s de la API de Facebook.",source:"@site/docs/herramientas-adicionales/Whatsapp-API-ejemplo.md",sourceDirName:"herramientas-adicionales",slug:"/herramientas-adicionales/Whatsapp-API-ejemplo",permalink:"/herramientas-adicionales/Whatsapp-API-ejemplo",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"WhatsApp Qr",permalink:"/herramientas-adicionales/Qr-Whatsapp"}},s={},p=[{value:"1. Configuraci\xf3n de los datos de la plantilla",id:"1-configuraci\xf3n-de-los-datos-de-la-plantilla",level:3},{value:"2. Configuraci\xf3n de los datos del mensaje",id:"2-configuraci\xf3n-de-los-datos-del-mensaje",level:3},{value:"3. Configuraci\xf3n de los datos del API de WhatsApp",id:"3-configuraci\xf3n-de-los-datos-del-api-de-whatsapp",level:3}],d={toc:p},c="wrapper";function u(e){let{components:a,...n}=e;return(0,o.kt)(c,(0,t.Z)({},d,n,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"whatsapp-api-ejemplo"},"WhatsApp API ejemplo"),(0,o.kt)("p",null,"C\xf3digo ejemplo de Env\xedo de Mensaje de WhatsApp a trav\xe9s de la API de Facebook."),(0,o.kt)("p",null,"Este c\xf3digo en PHP est\xe1 dise\xf1ado para enviar un mensaje de WhatsApp a trav\xe9s de la API de Facebook. Permite configurar los datos del mensaje y los detalles de autenticaci\xf3n de la API para su uso en un entorno de producci\xf3n."),(0,o.kt)("p",null,"Las variables necesarias estan agrupadas en 3 secciones:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Datos de la plantilla"),(0,o.kt)("li",{parentName:"ol"},"Datos del mensaje"),(0,o.kt)("li",{parentName:"ol"},"Datos del API de WhatsApp")),(0,o.kt)("h3",{id:"1-configuraci\xf3n-de-los-datos-de-la-plantilla"},"1. Configuraci\xf3n de los datos de la plantilla"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"$template_name"),": Nombre del plantilla de WhatsApp que se utilizar\xe1."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"$template_language_code"),': C\xf3digo del idioma para la plantilla (por ejemplo, "es" para espa\xf1ol).')),(0,o.kt)("p",null,"Para m\xe1s detalles puede revisar nuestro art\xedculo de como crear plantillas para WhatsApp API:\n",(0,o.kt)("a",{parentName:"p",href:"https://chatbuho.github.io/documentacion/mas-articulos/Plantillas-para-mensajes-masivos#5-crear-plantilla"},"https://chatbuho.github.io/documentacion/mas-articulos/Plantillas-para-mensajes-masivos#5-crear-plantilla")),(0,o.kt)("h3",{id:"2-configuraci\xf3n-de-los-datos-del-mensaje"},"2. Configuraci\xf3n de los datos del mensaje"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"$whatsapp_to")," N\xfamero de tel\xe9fono del destinatario del mensaje de WhatsApp."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"$whatsapp_text")," Contenido del mensaje de WhatsApp.")),(0,o.kt)("h3",{id:"3-configuraci\xf3n-de-los-datos-del-api-de-whatsapp"},"3. Configuraci\xf3n de los datos del API de WhatsApp"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"$ID_NUMBER")," Identificador de n\xfamero de tel\xe9fono."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"$ID_WABA")," Identificador de la cuenta de WhatsApp Business."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"$TOKEN_API")," Token de autenticaci\xf3n de la API de Facebook, que debe mantenerse en secreto.")),(0,o.kt)("p",null,"Para m\xe1s detalles puede revisar nuestro art\xedculo de como obtener los datos del API WhatsApp:\n",(0,o.kt)("a",{parentName:"p",href:"https://chatbuho.github.io/documentacion/herramientas-adicionales/Mensajes-masivos"},"https://chatbuho.github.io/documentacion/herramientas-adicionales/Mensajes-masivos")),(0,o.kt)("p",null,"C\xf3digo de ejemplo:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},'# Ejemplo en PHP\n\n#1 Datos de la plantilla WhatsApp\n$template_name = "bienvenida_hola";\n$template_language_code = "es";\n\n#2 Datos del mensaje\n$whatsapp_to = 51999332222;\n$whatsapp_text = "Mensaje de prueba";\n\n#3 Datos del API de WhatsApp\n$ID_NUMBER = XXXXXXXXXXXXX;\n$ID_WABA = XXXXXXXXXXXXXX;\n$TOKEN_API = \'TOKEN_API_XXXXXXXXXXXXXXXXXXXXXXXXXX\';\n\n$datos = [\n    "messaging_product" => "whatsapp",\n    "preview_url" => false,\n    "recipient_type" => "individual",\n    "to" => $whatsapp_to,\n    "type" => "template",\n            "template" => [\n                "name" => $template_name,\n                "language" => [\n                    "code" => $template_language_code,\n                    "policy" => "deterministic"\n                ],\n                "components" => [\n                    [\n                        "type" => "body",\n                        "parameters" => [\n                            [\n                                "type" => "text",\n                                "text" => $whatsapp_text\n                            ]\n                        ]\n                    ]\n                ]\n            ]\n];\n\n$curl = curl_init();\n\ncurl_setopt_array($curl, array(\n    CURLOPT_URL => \'https://graph.facebook.com/v16.0/\'.$ID_NUMBER.\'/messages\',\n    CURLOPT_RETURNTRANSFER => true,\n    CURLOPT_ENCODING => \'\',\n    CURLOPT_MAXREDIRS => 10,\n    CURLOPT_TIMEOUT => 0,\n    CURLOPT_FOLLOWLOCATION => true,\n    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,\n    CURLOPT_CUSTOMREQUEST => \'POST\',\n    CURLOPT_POSTFIELDS => json_encode($datos),\n    CURLOPT_HTTPHEADER => array(\n        \'Authorization: Bearer \'.$TOKEN_API,\n        \'WABA-ID: \'.$ID_WABA,\n        \'Content-Type: application/json\'\n    ),\n));\n\n$response = curl_exec($curl);\n\ncurl_close($curl);\n\necho $response;\n')),(0,o.kt)("p",null,"Si todo se configur\xf3 corectamente usted obtendr\xe1 una respuesta JSON similar al siguiente c\xf3digo:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n messaging_product: "whatsapp",\n contacts: [\n  {\n   input: "51999332222",\n   wa_id: "51999332222"\n  }\n ],\n messages: [\n  {\n   id: "wamid.HBgLNTE5NjIzMzI4MjIVAgARGBI0NkQzRDY0N0FGNTUyNTVEQzMA",\n   message_status: "accepted"\n  }\n ]\n}\n')),(0,o.kt)("admonition",{title:"NOTA",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Actualmente el ejemplo es solo para plantillas de texto, sin embargo puede seguir los mismos lineamientos para cualquier tipo de plantilla que contengan imagen, documentos, botones. etc. "),(0,o.kt)("p",{parentName:"admonition"},"Para integraciones completas puede solicitar una reuni\xf3n con nuestro equipo de soporte para evaluar su requerimiento.")))}u.isMDXComponent=!0}}]);