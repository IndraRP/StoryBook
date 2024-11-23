"use strict";(self.webpackChunkapp_story=self.webpackChunkapp_story||[]).push([[119],{"./src/components/Modal/modal.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Dark:()=>Dark,Form:()=>Form,Light:()=>Light,__namedExportsOrder:()=>__namedExportsOrder,default:()=>modal_stories});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),bs=__webpack_require__("__barrel_optimize__?names=BsCheck,BsExclamationCircle,BsExclamationTriangle,BsQuestion!=!./node_modules/react-icons/bs/index.mjs"),Button_button=__webpack_require__("./src/components/Button/button.tsx");const Modal=param=>{let{variant="Terang",title,accept,reject,description,children,onClick}=param;const[isOpen,setIsOpen]=react.useState(!1),toggleModal=()=>{setIsOpen(!isOpen)};return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(Button_button.$,{label:"Toggle Modal",onClick:toggleModal,variant:"primary"}),isOpen&&(0,jsx_runtime.jsx)("div",{id:"static-modal",role:"dialog","aria-modal":"true","aria-labelledby":"modal-title",className:"absolute inset-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50",children:(0,jsx_runtime.jsxs)("div",{className:"relative p-4 w-full max-w-2xl max-h-full ".concat("Gelap"===variant?"bg-gray-700 text-white":"bg-white text-gray-900"," rounded-lg shadow"),children:[(0,jsx_runtime.jsxs)("header",{className:"flex items-center justify-between p-4 border-b rounded-t ".concat("Gelap"===variant?"border-gray-600":"border-gray-200"),children:[(0,jsx_runtime.jsx)("h2",{id:"modal-title",className:"text-xl font-semibold",children:title}),(0,jsx_runtime.jsxs)("button",{type:"button",onClick:toggleModal,className:"text-gray-400 bg-transparent ".concat("Gelap"===variant?"hover:bg-gray-600 hover:text-white":"hover:bg-gray-200 hover:text-gray-900"," rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"),children:[(0,jsx_runtime.jsx)(bs.IeJ,{className:"font-semibold text-xl"}),(0,jsx_runtime.jsx)("span",{className:"sr-only",children:"Close modal"})]})]}),null!=children?children:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("section",{className:"p-4 space-y-4",children:(0,jsx_runtime.jsx)("p",{className:"text-base leading-relaxed ".concat("Gelap"===variant?"text-gray-400":"text-gray-500"),children:description})}),(0,jsx_runtime.jsxs)("footer",{className:"flex items-center p-4 border-t rounded-b ".concat("Gelap"===variant?"border-gray-600":"border-gray-200"),children:[(0,jsx_runtime.jsx)("button",{onClick,className:"text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",children:accept}),reject&&(0,jsx_runtime.jsx)("button",{onClick:toggleModal,className:"py-2.5 px-5 ms-3 text-sm font-medium ".concat("Gelap"===variant?"text-gray-400 bg-gray-800 border-gray-600 hover:bg-gray-700 hover:text-white":"text-gray-900 bg-white border-gray-200 hover:bg-gray-100 hover:text-blue-700"," focus:z-10 focus:ring-4 ").concat("Gelap"===variant?"focus:ring-gray-700":"focus:ring-gray-100"," rounded-lg"),children:reject})]})]})]})})]})};var _Light_parameters,_Light_parameters_docs,_Light_parameters1,_Dark_parameters,_Dark_parameters_docs,_Dark_parameters1,_Form_parameters,_Form_parameters_docs,_Form_parameters1;Modal.__docgenInfo={description:"",methods:[],displayName:"Modal",props:{variant:{required:!1,tsType:{name:"union",raw:'"Terang" | "Gelap"',elements:[{name:"literal",value:'"Terang"'},{name:"literal",value:'"Gelap"'}]},description:"",defaultValue:{value:'"Terang"',computed:!1}},title:{required:!0,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""},accept:{required:!0,tsType:{name:"string"},description:""},reject:{required:!1,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const modal_stories={title:"Molecule/Modal",component:Modal,parameters:{layout:"centered"},argTypes:{variant:{control:{type:"select",options:["Gelap","Terang"]},description:"contoh variant"},onClick:{action:"clicked"}},args:{variant:"Terang",accept:"Accept",onClick:(0,__webpack_require__("./node_modules/@storybook/test/dist/index.mjs").fn)()}},Light={args:{variant:"Terang",title:"Terang Theme",reject:"Decline",description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum aliquam magnam eum."}},Dark={args:{variant:"Gelap",title:"Dark Theme",reject:"Decline",description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum aliquam magnam eum."}},Form={args:{variant:"Gelap",title:"Login Form",children:(0,jsx_runtime.jsx)("div",{className:"p-4 md:p-5",children:(0,jsx_runtime.jsxs)("form",{className:"space-y-4",action:"#",children:[(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)("label",{htmlFor:"email",className:"block mb-2 text-sm font-medium text-gray-900 Gelap:text-white",children:"Your email"}),(0,jsx_runtime.jsx)("input",{type:"email",name:"email",id:"email",className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white",placeholder:"name@company.com",required:!0})]}),(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)("label",{htmlFor:"password",className:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",children:"Your password"}),(0,jsx_runtime.jsx)("input",{type:"password",name:"password",id:"password",placeholder:"••••••••",className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white",required:!0})]}),(0,jsx_runtime.jsxs)("div",{className:"flex justify-between",children:[(0,jsx_runtime.jsxs)("div",{className:"flex items-start",children:[(0,jsx_runtime.jsx)("div",{className:"flex items-center h-5",children:(0,jsx_runtime.jsx)("input",{id:"remember",type:"checkbox",value:"",className:"w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800",required:!0})}),(0,jsx_runtime.jsx)("label",{htmlFor:"remember",className:"ms-2 text-sm font-medium text-gray-900 dark:text-gray-300",children:"Remember me"})]}),(0,jsx_runtime.jsx)("a",{href:"#",className:"text-sm text-blue-700 hover:underline dark:text-blue-500",children:"Lost Password?"})]}),(0,jsx_runtime.jsx)(Button_button.$,{label:"Submit",variant:"primary"}),(0,jsx_runtime.jsxs)("div",{className:"text-sm font-medium text-gray-500 dark:text-gray-300",children:["Not registered? ",(0,jsx_runtime.jsx)("a",{href:"#",className:"text-blue-700 hover:underline dark:text-blue-500",children:"Create account"})]})]})})}};Light.parameters={...Light.parameters,docs:{...null===(_Light_parameters=Light.parameters)||void 0===_Light_parameters?void 0:_Light_parameters.docs,source:{originalSource:'{\n  args: {\n    variant: "Terang",\n    title: "Terang Theme",\n    reject: "Decline",\n    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum aliquam magnam eum."\n  }\n}',...null===(_Light_parameters1=Light.parameters)||void 0===_Light_parameters1||null===(_Light_parameters_docs=_Light_parameters1.docs)||void 0===_Light_parameters_docs?void 0:_Light_parameters_docs.source}}},Dark.parameters={...Dark.parameters,docs:{...null===(_Dark_parameters=Dark.parameters)||void 0===_Dark_parameters?void 0:_Dark_parameters.docs,source:{originalSource:'{\n  args: {\n    variant: "Gelap",\n    title: "Dark Theme",\n    reject: "Decline",\n    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum aliquam magnam eum."\n  }\n}',...null===(_Dark_parameters1=Dark.parameters)||void 0===_Dark_parameters1||null===(_Dark_parameters_docs=_Dark_parameters1.docs)||void 0===_Dark_parameters_docs?void 0:_Dark_parameters_docs.source}}},Form.parameters={...Form.parameters,docs:{...null===(_Form_parameters=Form.parameters)||void 0===_Form_parameters?void 0:_Form_parameters.docs,source:{originalSource:'{\n  args: {\n    variant: "Gelap",\n    title: "Login Form",\n    children: <div className="p-4 md:p-5">\r\n                <form className="space-y-4" action="#">\r\n                    <div>\r\n                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 Gelap:text-white">Your email</label>\r\n                        <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />\r\n                    </div>\r\n\r\n                    <div>\r\n                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>\r\n                        <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />\r\n                    </div>\r\n\r\n                    <div className="flex justify-between">\r\n                        <div className="flex items-start">\r\n                            <div className="flex items-center h-5">\r\n                                <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />\r\n                            </div>\r\n\r\n                            <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>\r\n                        </div>\r\n                        <a href="#" className="text-sm text-blue-700 hover:underline dark:text-blue-500">Lost Password?</a>\r\n                    </div>\r\n                    \r\n\r\n                    <Button label="Submit" variant="primary" />\r\n                    <div className="text-sm font-medium text-gray-500 dark:text-gray-300">\r\n                        Not registered? <a href="#" className="text-blue-700 hover:underline dark:text-blue-500">Create account</a>\r\n                    </div>\r\n                </form>\r\n            </div>\n  }\n}',...null===(_Form_parameters1=Form.parameters)||void 0===_Form_parameters1||null===(_Form_parameters_docs=_Form_parameters1.docs)||void 0===_Form_parameters_docs?void 0:_Form_parameters_docs.source}}};const __namedExportsOrder=["Light","Dark","Form"]}}]);