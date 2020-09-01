<template>
  <div class="visitor">
    <cell-groups>
      <div v-for="(item,index) in formdata" :key="index">
        <!-- input输入框 -->
        <van-field
          v-if="item.type=='text'"
          :label="item.title"
          v-model="value[item.prop]"
          :placeholder="item.placeholder"
          :left-icon="item.contact"
          :disabled="item.disabled"
          v-show="item.show ?item.show:true"
          :required="item.required"
          :error-message="errorMessage[prop]"
        ></van-field>
        <!-- 下拉选择 -->
        <div v-else-if="item.type=='select'">
          <van-field
            :label="item.title"
            v-model="value[item.prop]"
            :placeholder="item.placeholder"
            :left-icon="item.contact"
            :disabled="item.disabled"
            v-show="item.show ?item.show:true"
            :required="item.required"
            :error-message="errorMessage.userInput"
            @click="item.secetevent(index)"
          ></van-field>
          <van-action-sheet
            :show="item.showsecect"
            :title="item.titlename"
            @close="item.Close(index)"
            @cancel="item.cancel(index)"
            @select="item.onSelect(index)"
          >
            <van-search :value="item.searchvalue" placeholder="请输入搜索关键词" v-if="item.show" />
            <div
              v-for="(list,ind) in item.actions"
              :key="ind"
              class="actiondata"
              :class="item.activeaction==ind?'activeaction':''"
              @click="item.onSearch(index,ind)"
            >
              <span class="actionsvalue">{{list.name}}</span>
            </div>
          </van-action-sheet>
        </div>
        <!-- 上传文件 -->
        <div v-else-if="item.type=='upload' && item.show==true ">
          <van-field
            title-class="van-cell__title"
            value-class="cell-value"
            :label="item.title"
            :accept="item.accept"
            :required="item.required"
            :disabled="item.disabled"
          ></van-field>
          <van-uploader style="padding: 0 30rpx"
            :file-list="item.fileList"
            :max-count="item.maxCount"
            @afterRead="item.afterRead($event,index)"
            @delete="item.del_img($event,index)"
          ></van-uploader>
        </div>
        <!-- 多行文本 -->
        <div v-else-if="item.type=='textarea'">
          <van-field
            :label="item.title"
            value-class="van-cell__value"
            :required="item.required"
            :disabled="item.disabled"
            :error-message="errorMessage[prop]"
          ></van-field>
          <van-cell-group>
            <van-field input-class="textbord" v-model="value[item.prop]" :type="item.type" />
          </van-cell-group>
        </div>
        <div v-else>
          <!--时间 -->
          <van-field
            :label="item.title"
            class="van-hairline--bottom"
            v-model="value[item.prop]"
            :placeholder="item.placeholder"
            :left-icon="item.contact"
            :disabled="item.disabled"
            v-show="item.show ?item.show:true"
            :required="item.required"
            :error-message="errorMessage[prop]"
            @click="item.secetevent(index)"
          ></van-field>
          <van-popup :show="item.showsecect" position="bottom">
            <van-datetime-picker
              v-model="item.currentDate"
              :type="item.type"
              :min-date="item.minDate"
              :lazy-render="false"
              :max-date="item.maxDate"
              :formatter="formatter"
              @cancel="item.showsecect=false"
              @confirm="item.confirm($event,index)"
            />
          </van-popup>
        </div>
      </div>
      <div class="pd15">
        <van-button type="primary" size="large" @click="onClickButtonSubmit">提交信息</van-button>
      </div>
    </cell-groups>
  </div>
</template>
<script>
import {formatWithSeperator}  from  "../../utils/datetime"
export default { 
  name:"visitor",
  data() {
    let that=this
    return {
      errorMessage: { userInput:"", pwdInput:"", zipCode:"" },
      identity:'',
      message:'',
      value:{},
      formatter (type, value) {
        if (type === 'year') {
          return `${value}年`
        } else if (type === 'month') {
          return `${value}月`
        } else if (type === 'day') {
          return `${value}日`
        } else if (type === 'hour') {
          return `${value}时`
        } else if (type === 'minute') {
          return `${value}分`
        } else if (type === 'second') {
          return `${value}秒`
        }
        return value
      },
      formdata:[{
        title:"访问单位:",
        type:"select",
        titlename:"==访问单位==",
        disabled:true,
        prop:"fwdeptName",
        placeholder:"请选择访问单位",
        required:true,
        contact:"wap-home-o",
        showsecect:false,
        activeaction:'',
        show:true,
        searchvalue:'',
        actions: [],
        secetevent:(index)=>{
          that.formdata[index].showsecect=true;
          console.log("弹出")
        },
        Close(index){
          this.showsecect=false
          console.log("关闭按钮")
        },
        onSearch(index,ind){
          this.activeaction=ind;
          that.value.fwdeptName=this.actions[ind].name
          this.showsecect=false
          //  console.log("选中")
        },
      },{
        title:"临时卡类型:",
        type:"text",
        disabled:true,
        prop:"leixing",
        placeholder:"",
        required:false,
        contact:"credit-pay",
      },{
        title:"预约来访时间:",
        type:"datetime",
        prop:"begTime",
        disabled:true,
        placeholder:"请输入预约来访时间",
        required:true,
        contact:"underway-o",
        showsecect:false,
        activeaction:'',
        show:true,
        searchvalue:'',
        secetevent:(index)=>{
          console.log(that.formdata[index])
          that.formdata[index].showsecect=true;
          console.log("弹出")
        },
        minDate: new Date().getTime(),
        maxDate: new Date(2060, 10, 1).getTime(),
        currentDate: new Date().getTime(),
        //确定
        confirm:(e,index)=>{
          let time= formatWithSeperator(e.mp.detail,"-",":") 
          that.value.begTime = time
          that.formdata[index].showsecect=false;
        },
      },{
        title:"预约离开时间:",
        type:"datetime",
        prop:"endTime",
        disabled:true,
        placeholder:"请输入预约离开时间",
        required:true,
        contact:"underway-o",
        showsecect:false,
        activeaction:'',
        searchvalue:'',
        secetevent:(index)=>{
          that.formdata[index].showsecect=true;
          console.log()
          console.log("弹出")
        },
        minDate: new Date().getTime(),
        maxDate: new Date(2060, 10, 1).getTime(),
        currentDate: new Date().getTime(),
        //确定
        confirm:(e,index)=>{
          let time= formatWithSeperator(e.mp.detail,"-",":") 
          that.value.endTime = time
          that.formdata[index].showsecect=false;
          console.log(time)
        }
      },{
        title:"所属企业:",
        type:"text",
        prop:"fromDeptName",
        disabled:false,
        placeholder:"请输入所属企业",
        required:false,
        contact:"wap-home-o",
      },{
        title:"访客姓名:",
        prop:"peopleName",
        type:"text",
        disabled:false,
        placeholder:"请输入访客姓名",
        required:true,
        contact:"user-circle-o",
      },{
        title:"访客身份证号:",
        type:"text",
        prop:"idCard",
        disabled:false,
        placeholder:"请输入访客身份证号",
        required:true,
        contact:"comment-o",
      },{
        title:"访客手机号:",
        type:"text",
        prop:"peopleTel",
        disabled:false,
        placeholder:"请输入访客手机号",
        required:true,
        contact:"phone-circle-o",
      },{
        title:"入园方式:",
        titlename:"==入园方式==",
        type:"select",
        disabled:false,
        prop:"isOrnot",
        placeholder:"请选择入园方式",
        required:true,
        contact:"logistics",
        showsecect:false,
        activeaction:'',
        show:false,
        searchvalue:'',
        actions:[
          {
            name: '步行',
            openType: 'share',
          },
          {
            name: '电动车',
            openType: 'share',
          },
          {
            name: '自驾车',
            openType: 'share',
          },
          {
            name: '货车',
            openType: 'share',
          },
          {
            name: '客车',
            openType: 'share',
          },
          {
            name: '特种车辆',
            openType: 'share',
          },
          {
            name: '农用车',
            openType: 'share',
          },
          {
            name: '其他',
            openType: 'share',
          },
        ],
        secetevent:(index)=>{
          that.formdata[index].showsecect=true;
        },
        Close(index){
          this.showsecect=false
        },
        onSearch(index,ind){
          this.activeaction=ind;
          that.value.isOrnot=this.actions[ind].name;
          this.showsecect=false
        }
      },{
        title:"访客车牌号:",
        type:"text",
        prop:"load",
        disabled:false,
        placeholder:"请输入访客车牌号",
        required:true,
        contact:"logistics",
      },{
        title:"载重量:",
        type:"text",
        prop:"carNum",
        disabled:false,
        placeholder:"请输入载重量",
        required:true,
        contact:"logistics",
      },{
        title:"载客人数:",
        type:"text",
        prop:"carrays",
        disabled:false,
        placeholder:"请输入载客人数",
        required:true,
        contact:"friends-o",
      },{
        title:"限载人数:",
        type:"text",
        prop:"posting",
        disabled:false,
        placeholder:"请输入限载人数",
        required:true,
        contact:"friends-o",
      },{
        title:"司机驾驶证:",
        show:true,
        type:"upload",
        maxCount:1,
        accept:'image',
        disabled:true,
        required:true,
        fileList: [],
        afterRead(event,index){
          const { file } = event.mp.detail;
          this.fileList.push({
            url:file.path,
            name: file.name,
            isImage: true,
            deletable: true,
          })
        },
        del_img(event){
          this.fileList.splice(event.mp.detail.index,1); 
        }
      },{
        title:"车辆行驶证:",
        disabled:true,
        maxCount:1,
        type:"upload",
        required:true,
        show:true,
        fileList: [],
        afterRead(event,index){
          const { file } = event.mp.detail;
          this.fileList.push({
            url:file.path,
            name: file.name,
            isImage: true,
            deletable: true,
          })
        },
        del_img(event){
          this.fileList.splice(event.mp.detail.index,1); 
        }
      },{
        title:"审批文件:",
        type:"upload",
        maxCount:1,
        disabled:true,
        required:false,
        show:true,
        fileList: [],
        afterRead(event,index){
          const { file } = event.mp.detail;
          this.fileList.push({
            url:file.path,
            name: file.name,
            isImage: true,
            deletable: true,
          })
        },
        del_img(event){
          this.fileList.splice(event.mp.detail.index,1); 
        }
      },{
        title:"其他审批文件1:",
        maxCount:1,
        type:"upload",
        disabled:true,
        required:false,
        show:true,
        required:false,
        fileList: [],
        afterRead(event,index){
          const { file } = event.mp.detail;
          this.fileList.push({
            url:file.path,
            name: file.name,
            isImage: true,
            deletable: true,
          })
        },
        del_img(event){
          this.fileList.splice(event.mp.detail.index,1); 
        }
      },{
        title:"其他审批文件2:",
        maxCount:1,
        type:"upload",
        disabled:true,
        show:true,
        required:false,
        fileList: [],
        afterRead(event,index){
          const { file } = event.mp.detail;
          this.fileList.push({
            url:file.path,
            name: file.name,
            isImage: true,
            deletable: true,
          })
        },
        del_img(event){
          this.fileList.splice(event.mp.detail.index,1); 
        }
      },{
        title:"其他审批文件3:",
        maxCount:1,
        type:"upload",
        disabled:true,
        show:true,
        required:false,
        fileList: [],
        afterRead(event,index){
          const { file } = event.mp.detail;
          this.fileList.push({
            url:file.path,
            name: file.name,
            isImage: true,
            deletable: true,
          })
        },
        del_img(event){
          this.fileList.splice(event.mp.detail.index,1); 
        }
      },{
        title:"其他审批文件4:",
        maxCount:1,
        type:"upload",
        disabled:true,
        show:true,
        required:false,
        fileList: [],
        afterRead(event,index){
          const { file } = event.mp.detail;
          this.fileList.push({
            url:file.path,
            name: file.name,
            isImage: true,
            deletable: true,
          })
        },
        del_img(event){
          this.fileList.splice(event.mp.detail.index,1); 
        }
      },{
        title:"其他审批文件5:",
        maxCount:1,
        type:"upload",
        disabled:true,
        required:false,
        show:true,
        fileList: [],
        afterRead(event,index){
          const { file } = event.mp.detail;
          this.fileList.push({
            url:file.path,
            name: file.name,
            isImage: true,
            deletable: true,
          })
        },
        del_img(event){
          this.fileList.splice(event.mp.detail.index,1); 
        }
      },{
        type:"textarea",
        title:"随行人员姓名(逗号分隔):",
        prop:"followMan",
        disabled:false,
        placeholder:"请输入随行人员姓名",
        required:false,
        contact:"user-circle-o",
      },{
        type:"textarea",
        title:"申请说明",
        prop:"remark",
        disabled:false,
        placeholder:"请输入申请说明",
        required:true,
        contact:"edit",
      }]
    }
  },
  created(){
    //访问单位
    this.$http.post({
      url: 'system/department!ajaxAppDepts',
      data : {},
    }).then(res => {
      if(res.result=="success"){
        res.data.map(item=>{
          item.name =item.deptName
        })
        this.formdata[0].actions= res.data
      }
    })
  },
  methods: {
    //提交
    onClickButtonSubmit(values) {
      this.$http.post({
        url: 'app!ajaxCommitTemp',
        data : {},
      }).then(res => {
        if(res.result=="success"){
          res.data.map(item=>{
            item.name =item.deptName
          })
          this.formdata[0].actions= res.data
        }
      })
    },
  },
}
</script>
<style>
.van-cell:after{
  border-bottom: 0 !important;
}
.actiondata {
  line-height: 2;
  text-align: center;
  font-size: 18px;
  cursor: pointer;
}
.activeaction {
  background: #1989fa;
  color: #fff;
  line-height: 2;
  text-align: center;
  font-size: 18px;
  cursor: pointer;
}
.actiondata:not(:last-child) {
  border-bottom: 1px solid #f2f2f2;
}

/* .van-cell {
  padding: 15px !important;
} */
.field-index--van-field > .van-cell__title {
  max-width: 160px !important;
  min-width: 160px !important;
}
.van-field__input--textarea {
  height: 120px !important;
  min-height: 120px !important;
  border: 1px solid #666 !important;
  /* padding: 5px !important; */
}
.van-cell__value {
  overflow: auto !important;
}
.van-field__body--textarea.van-field__body--ios{
  margin-top: 0 !important;
}
.van-field__body--text .van-field__input{
  text-align: right !important;
}
</style>