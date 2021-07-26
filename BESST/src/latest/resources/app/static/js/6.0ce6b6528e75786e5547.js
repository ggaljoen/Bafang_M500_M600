webpackJsonp([6],{2151:function(e,t,a){var s=a(2)(a(2617),a(2618),function(e){a(2615)},null,null);e.exports=s.exports},2303:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s,n=a(3),i=(s=n)&&s.__esModule?s:{default:s};var r={getDeliveryById:function(e){return i.default.HttpHelp.request({method:"get",url:"/nl/sales/delivery/"+e})},filterDeliveryDetails:function(e,t,a){return i.default.HttpHelp.request({method:"POST",url:"/nl/sales/delivery/detail/filter",data:{delivery_order_id:a},params:{page:e,size:10}})}};t.default=r},2312:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s,n=a(3),i=(s=n)&&s.__esModule?s:{default:s};var r={filterOrderSchedule:function(e){return i.default.HttpHelp.request({method:"POST",url:"/nl/nlPublic/orderSchedule/filter",data:{delivery_id:e},params:{page:1,size:999}})},filterAfterSalesStatus:function(e){return i.default.HttpHelp.request({method:"POST",url:"/nl/nlPublic/AfterSalesStatus/filter",data:{service_id:e},params:{page:1,size:999}})},filterPurchaseStatus:function(e){return i.default.HttpHelp.request({method:"POST",url:"/nl/nlPublic/orderSchedule/filter",data:{purchase_id:e},params:{page:1,size:999}})}};t.default=r},2313:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s,n=a(3),i=(s=n)&&s.__esModule?s:{default:s};var r={getShipment:function(e){return i.default.HttpHelp.request({method:"get",url:"/nl/order/shipment/"+e})}};t.default=r},2314:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s,n=a(3),i=(s=n)&&s.__esModule?s:{default:s};var r={getInvoice:function(e){return i.default.HttpHelp.request({method:"get",url:"/nl/finance/invoice/"+e})}};t.default=r},2315:function(e,t,a){var s=a(2)(a(2318),a(2319),function(e){a(2316)},"data-v-28f2ae4a",null);e.exports=s.exports},2316:function(e,t,a){var s=a(2317);"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);a(2089)("4969dfc0",s,!0,{})},2317:function(e,t,a){(e.exports=a(2088)(!0)).push([e.i,".deliver-tab .table-wrap .no-data-content[data-v-28f2ae4a]{width:100%;height:100%;padding:25px;font-size:14px;text-align:center;color:#a1a5b1;background:none}","",{version:3,sources:["C:/Users/dd/Desktop/besst-build/clientBESST/src/components/step-table-temp/deliver-tab.vue"],names:[],mappings:"AACA,2DACE,WAAY,AACZ,YAAa,AACb,aAAc,AACd,eAAgB,AAChB,kBAAmB,AACnB,cAAe,AACf,eAAiB,CAClB",file:"deliver-tab.vue",sourcesContent:["\n.deliver-tab .table-wrap .no-data-content[data-v-28f2ae4a] {\n  width: 100%;\n  height: 100%;\n  padding: 25px;\n  font-size: 14px;\n  text-align: center;\n  color: #a1a5b1;\n  background: none;\n}\n"],sourceRoot:""}])},2318:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s,n=a(3);(s=n)&&s.__esModule;t.default={name:"deliver-tab",props:["tableList"],data:function(){return{headData:["Delivery Date","Delivery Order No.","Customer No.","Reviewer","Reviewer Date","Operator"]}},mounted:function(){},methods:{onView:function(e){this.$router.push({name:"deliveryListDetails",query:{orderId:event.id}})}}}},2319:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"deliver-tab"},[a("div",{staticClass:"table-wrap"},[a("div",{staticClass:"table-content-holder"},[0===e.tableList.length?a("div",{staticClass:"no-data-content"},[e._v("noResult")]):a("table",{staticClass:"table-content",attrs:{border:"0",cellspacing:"0",cellpadding:"0"}},[a("thead",e._l(e.headData,function(t,s){return a("td",{key:s},[e._v(e._s(t))])})),e._v(" "),e.tableList.length>0?a("tbody",e._l(e.tableList,function(t){return a("tr",{key:t.id},[a("td",[e._v(e._s(e._f("dateFormat")(t.delivery_date)))]),e._v(" "),a("td",[e._v(e._s(t.delivery_order_no))]),e._v(" "),a("td",[e._v(e._s(t.customer_no))]),e._v(" "),a("td",[e._v(e._s(t.reviewer))]),e._v(" "),a("td",[e._v(e._s(e._f("dateFormat")(t.reviewer_date)))]),e._v(" "),a("td",[a("button",{staticClass:"btn-underline",on:{click:function(a){a.stopPropagation(),e.onView(t)}}},[e._v("Detail")])])])})):e._e()])])])])},staticRenderFns:[]}},2320:function(e,t,a){var s=a(2)(a(2323),a(2324),function(e){a(2321)},"data-v-57c7df66",null);e.exports=s.exports},2321:function(e,t,a){var s=a(2322);"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);a(2089)("812aa316",s,!0,{})},2322:function(e,t,a){(e.exports=a(2088)(!0)).push([e.i,".stock-out-tab .table-wrap .no-data-content[data-v-57c7df66]{width:100%;height:100%;padding:25px;font-size:14px;text-align:center;color:#a1a5b1;background:none}","",{version:3,sources:["C:/Users/dd/Desktop/besst-build/clientBESST/src/components/step-table-temp/stock-out-tab.vue"],names:[],mappings:"AACA,6DACE,WAAY,AACZ,YAAa,AACb,aAAc,AACd,eAAgB,AAChB,kBAAmB,AACnB,cAAe,AACf,eAAiB,CAClB",file:"stock-out-tab.vue",sourcesContent:["\n.stock-out-tab .table-wrap .no-data-content[data-v-57c7df66] {\n  width: 100%;\n  height: 100%;\n  padding: 25px;\n  font-size: 14px;\n  text-align: center;\n  color: #a1a5b1;\n  background: none;\n}\n"],sourceRoot:""}])},2323:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s,n=a(3),i=(s=n)&&s.__esModule?s:{default:s};t.default={name:"stock-out-tab",props:["tableList"],data:function(){return{headData:["Operation User","Expected Date","Delivery Order No.","Warehouse","Operator"],warehouseList:[]}},mounted:function(){var e=this;this.loading=!0,this.getAllWarehouse().then(function(t){e.loading=!1,e.warehouseList=t}).catch(function(t){e.$message({message:t,type:"error"}),e.loading=!1})},methods:{onView:function(e){this.$router.push({name:"shipmentOrderDetails",query:{id:e.id}})},pipeWarehouse:function(e){var t=this.warehouseList.filter(function(t){return t.id===e});return t.length>0?t[0].name:"/"},getAllWarehouse:function(){return i.default.Api.request({method:"GET",url:"/nl/warehouse/all"})}}}},2324:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"stock-out-tab"},[a("div",{staticClass:"table-wrap"},[a("div",{staticClass:"table-content-holder"},[0===e.tableList.length?a("div",{staticClass:"no-data-content"},[e._v("noResult")]):a("table",{staticClass:"table-content",attrs:{border:"0",cellspacing:"0",cellpadding:"0"}},[a("thead",e._l(e.headData,function(t,s){return a("td",{key:s},[e._v(e._s(t))])})),e._v(" "),e.tableList.length>0?a("tbody",e._l(e.tableList,function(t){return a("tr",{key:t.id},[a("td",[e._v(e._s(t.createUser))]),e._v(" "),a("td",[e._v(e._s(e._f("dateFormat")(t.expected_date)))]),e._v(" "),a("td",[e._v(e._s(t.order_no))]),e._v(" "),a("td",[e._v(e._s(e.pipeWarehouse(t.warehouse_id)))]),e._v(" "),a("td",[a("button",{staticClass:"btn-underline",on:{click:function(a){a.stopPropagation(),e.onView(t)}}},[e._v("Detail")])])])})):e._e()])])])])},staticRenderFns:[]}},2325:function(e,t,a){var s=a(2)(a(2328),a(2329),function(e){a(2326)},"data-v-1d3a5ae3",null);e.exports=s.exports},2326:function(e,t,a){var s=a(2327);"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);a(2089)("1d834478",s,!0,{})},2327:function(e,t,a){(e.exports=a(2088)(!0)).push([e.i,".invoice-tab .table-wrap .no-data-content[data-v-1d3a5ae3]{width:100%;height:100%;padding:25px;font-size:14px;text-align:center;color:#a1a5b1;background:none}","",{version:3,sources:["C:/Users/dd/Desktop/besst-build/clientBESST/src/components/step-table-temp/invoice-tab.vue"],names:[],mappings:"AACA,2DACE,WAAY,AACZ,YAAa,AACb,aAAc,AACd,eAAgB,AAChB,kBAAmB,AACnB,cAAe,AACf,eAAiB,CAClB",file:"invoice-tab.vue",sourcesContent:["\n.invoice-tab .table-wrap .no-data-content[data-v-1d3a5ae3] {\n  width: 100%;\n  height: 100%;\n  padding: 25px;\n  font-size: 14px;\n  text-align: center;\n  color: #a1a5b1;\n  background: none;\n}\n"],sourceRoot:""}])},2328:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s,n=a(3);(s=n)&&s.__esModule;t.default={name:"invoice-tab",props:["tableList"],data:function(){return{headData:["Invoice No","Time","Delivery order no","Operator"]}},mounted:function(){},methods:{onView:function(e){this.$router.push({name:"invoiceListDetails",query:{orderId:e.id}})}}}},2329:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"invoice-tab"},[a("div",{staticClass:"table-wrap"},[a("div",{staticClass:"table-content-holder"},[0===e.tableList.length?a("div",{staticClass:"no-data-content"},[e._v("noResult")]):a("table",{staticClass:"table-content",attrs:{border:"0",cellspacing:"0",cellpadding:"0"}},[a("thead",e._l(e.headData,function(t,s){return a("td",{key:s},[e._v(e._s(t))])})),e._v(" "),e.tableList.length>0?a("tbody",e._l(e.tableList,function(t){return a("tr",{key:t.id},[a("td",[e._v(e._s(t.invoice_no))]),e._v(" "),a("td",[e._v(e._s(e._f("dateFormat")(t.create_time)))]),e._v(" "),a("td",[e._v(e._s(t.deliver_order_no))]),e._v(" "),a("td",[a("button",{staticClass:"btn-underline",on:{click:function(a){a.stopPropagation(),e.onView(t)}}},[e._v("Detail")])])])})):e._e()])])])])},staticRenderFns:[]}},2615:function(e,t,a){var s=a(2616);"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);a(2089)("dbe02c86",s,!0,{})},2616:function(e,t,a){(e.exports=a(2088)(!0)).push([e.i,".after-sales-schedule .content{border:1px solid #2b2f3b;margin:20px auto 0}.after-sales-schedule .step-warp{border-bottom:1px solid #333;padding:5px 0}.after-sales-schedule .el-step:hover{cursor:pointer}.after-sales-schedule .content-record h3{margin:10px 0}","",{version:3,sources:["C:/Users/dd/Desktop/besst-build/clientBESST/src/views/nl/after-sales/service-center/after-sales-schedule.vue"],names:[],mappings:"AACA,+BACE,yBAA0B,AAC1B,kBAAyB,CAC1B,AACD,iCACE,6BAA8B,AAC9B,aAAe,CAChB,AACD,qCACE,cAAgB,CACjB,AACD,yCACE,aAAe,CAChB",file:"after-sales-schedule.vue",sourcesContent:["\n.after-sales-schedule .content {\n  border: 1px solid #2b2f3b;\n  margin: 20px auto 0 auto;\n}\n.after-sales-schedule .step-warp {\n  border-bottom: 1px solid #333;\n  padding: 5px 0;\n}\n.after-sales-schedule .el-step:hover {\n  cursor: pointer;\n}\n.after-sales-schedule .content-record h3 {\n  margin: 10px 0;\n}\n"],sourceRoot:""}])},2617:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=u(a(44)),n=u(a(3)),i=(u(a(2312)),u(a(2303))),r=u(a(2313)),o=u(a(2314)),c=u(a(2315)),l=u(a(2320)),d=u(a(2325));function u(e){return e&&e.__esModule?e:{default:e}}t.default={components:{deliverTab:c.default,stockOutTab:l.default,invoiceTab:d.default},data:function(){return{loading:!1,active:1,stepDatas:[],currentSetp:1,dialogItemListVisible:!1,deliverList:[],stockOutList:[],invoiceList:[]}},created:function(){this.orderId=this.$route.query.orderId,this.orderId&&this.formatSetpData({service_id:0,service_status:0,service_time:0,delivery_id:0,delivery_status:0,delivery_time:0,service_record_id:0,service_record_status:0,service_record_time:0,shipment_id:0,shipment_status:0,shipment_time:0,invoice_id:0,invoice_status:0,invoice_time:0,parcel_id:0,parcel_status:0,parcel_time:0,progress:1})},mounted:function(){},methods:{formatSetpData:function(e){var t=this,a={service:{index:1,title:"Service Center"},parcel:{index:2,title:"Input Parcel info"},service_record:{index:3,title:"Service Record"},delivery:{index:4,title:"Delivery"},shipment:{index:5,title:"Stock out"},invoice:{index:6,title:"Invoice"}},i=[];t.active=e.progress,(0,s.default)(e).forEach(function(t){var s=t.replace(/([_][^_]+)$/,"");if(a[s]){var n=t.match(/([^_]+)$/)[1];a[s][n]=e[t],a[s].type=s}}),(0,s.default)(a).forEach(function(e){i.push(a[e])}),t.stepDatas=i.map(function(e){return e.time=e.time&&n.default.Util.changeDateForm(1e3*e.time)||"",e.status=t.checkType(e),e}),t.stepChange(t.stepDatas[0])},checkType:function(e){switch(e.type){case"service":case"parcel":case"service_record":case"delivery":return this.deliveryType(e.status);case"shipment":return this.shipmentType(e.status);case"invoice":return this.invoiceType(e.status)}},deliveryType:function(e){switch(e){case 0:case 2:case 5:return"wait";case 1:return"process";case 3:return"success";case 4:return"error";default:return"wait"}},shipmentType:function(e){switch(e){case 0:return"wait";case 1:return"process";case 2:return"error";case 3:return"success";default:return"wait"}},invoiceType:function(e){switch(e){case 0:return"wait";case 1:case 2:case 3:return"process";case 4:return"success";default:return"wait"}},stepChange:function(e){var t=this;if(e.id)switch(this.currentSetp=e.index,e.type){case"service":case"parcel":case"service_record":break;case"delivery":i.default.getDeliveryById(e.id).then(function(e){t.deliverList=[e.data]});break;case"shipment":r.default.getShipment(e.id).then(function(e){t.stockOutList=[e.data]});break;case"invoice":o.default.getInvoice(e.id).then(function(e){t.invoiceList=[e.data]})}},goAfterSalesList:function(){this.$router.push({name:"serviceCenter"})}},computed:{}}},2618:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"after-sales-schedule"},[a("div",{staticClass:"header"},[a("div",{staticClass:"btn-group-inline"},[a("div",{staticClass:"icons"},[a("div",{staticClass:"icon-item back",attrs:{title:"back"},on:{click:e.goAfterSalesList}})])]),e._v(" "),a("label",{staticClass:"title"},[e._v("After Sales Schedule")])]),e._v(" "),a("div",{staticClass:"content-wrap"},[a("div",{staticClass:"content"},[a("div",{staticClass:"step-warp"},[a("el-steps",{attrs:{active:e.active,"align-center":""}},e._l(e.stepDatas,function(t,s){return a("el-step",{key:s,attrs:{title:t.title,description:t.time,status:t.status},nativeOn:{click:function(a){e.stepChange(t)}}})}))],1),e._v(" "),a("div",{directives:[{name:"loading",rawName:"v-loading.body",value:e.loading,expression:"loading",modifiers:{body:!0}}],staticClass:"content-record"},[a("div",{directives:[{name:"show",rawName:"v-show",value:1==e.currentSetp,expression:"currentSetp ==1"}]}),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:2==e.currentSetp,expression:"currentSetp ==2"}]}),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:3==e.currentSetp,expression:"currentSetp ==3"}]}),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:4==e.currentSetp,expression:"currentSetp ==4"}]},[a("deliver-tab",{attrs:{tableList:e.deliverList}})],1),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:5==e.currentSetp,expression:"currentSetp == 5"}]},[a("stock-out-tab",{attrs:{tableList:e.stockOutList}})],1),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:6==e.currentSetp,expression:"currentSetp == 6"}]},[a("invoice-tab",{attrs:{tableList:e.invoiceList}})],1)])])]),e._v(" "),a("el-dialog",{attrs:{visible:e.dialogItemListVisible,title:"title",size:"large"},on:{"update:visible":function(t){e.dialogItemListVisible=t}}},[a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.dialogItemListVisible=!1}}},[e._v("Close")])],1)])],1)},staticRenderFns:[]}}});
//# sourceMappingURL=6.0ce6b6528e75786e5547.js.map