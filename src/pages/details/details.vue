<template>
  <view class="details">
    <view class="box">
      <view v-for="(item,index) in formdata" :key="index">
        <!-- input输入框 -->
        <view class="weui-cell__bd" v-if="item.type=='text' && item.show==true">
          <van-icon :name="item.contact" :color="item.color" />
          <text>{{item.title}}</text>
          <input
            class="weui-input"
            :value="value[item.prop]"
            :disabled="item.disabled"
            v-show="item.show ?item.show:true"
          />
        </view>
        <!-- 上传文件 -->
        <view v-else-if="item.type=='upload' && item.fileList.length>0">
          <view class="weui-cell__up">
            <van-icon :name="item.contact" :color="item.color" />
            <text>{{item.title}}</text>
          </view>
          <van-uploader
            class="weui-cell__bd"
            :file-list="item.fileList "
            :deletable="item.deletable"
            :maxCount="item.maxCount"
          />
        </view>
        <!-- 多行文本 -->
        <view v-else-if="item.type=='textarea'" class="rich">
          <view class="txts">
            <van-icon :name="item.contact" :color="item.color" />
            <text>{{item.title}}</text>
          </view>
          <textarea
            :required="item.required"
            :disabled="item.disabled"
            :placeholder="item.placeholder"
            placeholder-class="phcolor"
            @blur="item.change($event,index)"
          ></textarea>
        </view>
      </view>
      <van-toast id="van-toast" />
    </view>
  </view>
</template>
<script>
export default { 
    name:"details",
    data() {
       let that=this
        return {
        value:{
          leixing:'访客临时通行卡'
        },
      formdata:[{
          title:"访问单位:",
          color:'#1989fa',
          type:"text",
          disabled:true,
          prop:"fwdeptName",
          contact:"wap-home-o",
          show:true,
        },
        {
          title:"临时卡类型:",
          color:'#1989fa',
          type:"text",
          disabled:true,
          show:true,
          prop:"leixing",
          contact:"credit-pay",
        },
        {
          title:"预约来访时间:",
          color:'#07c160',
          type:"text",
          prop:"begTime",
          disabled:true,
          show:true,
          contact:"underway-o",
        },
        {
          title:"预约离开时间:",
           color:'#07c160',
          type:"text",
          prop:"endTime",
          disabled:true,
          contact:"underway-o",
          show:true,
        },
        {
          title:"所属企业:",
          show:true,
          type:"text",
          prop:"fromDeptName",
          disabled:true,
          contact:"wap-home-o",
          color:'#1989fa'
        },
        {
          title:"访客姓名:",
          prop:"peopleName",
          show:true,
          type:"text",
          disabled:true,
          contact:"user-circle-o",
           color:'#1989fa'
        },
        {
          title:"访客身份证号:",
          show:true,
          type:"text",
          prop:"idCard",
          disabled:true,
          contact:"idcard",
           color:'#1989fa'
        },
        {
          title:"访客手机号:",
          show:true,
          type:"text",
          prop:"peopleTel",
          disabled:true,
          contact:"phone-circle-o",
          color:'#1989fa'
        },
          {
          title:"入园方式:",
          type:"text",
          disabled:true,
          prop:"isOrnot",
          contact:"logistics",
          color:'#ee0a24',
        },
        {
          title:"访客车牌号:",
          type:"text",
          prop:"load",
          disabled:true,
          show:false,
          contact:"logistics",
          color:'#ff976a',
        },
        {
          title:"载重量:",
          show:false,
          type:"text",
          prop:"carNum",
          disabled:false,
          contact:"logistics",
          color:'#07c160',
        },
        {
          title:"载客人数:",
          type:"text",
          prop:"carrays",
          show:false,
          disabled:true,
          contact:"friends-o",
           color:'#07c160',
        },
         {
          title:"限载人数:",
          type:"text",
          prop:"posting",
          show:true,
          disabled:false,
          contact:"friends-o",
          color:'#ee0a24'
        },
        {
          title:"司机驾驶证:",
          deletable:false,
          type:"upload",
          show:true,
          contact:"idcard",
          color:'#07c160',
          maxCount:1,
            fileList: [
             { url: 'https://img.yzcdn.cn/vant/leaf.jpg', name: '图片1' },
              // Uploader 根据文件后缀来判断是否为图片文件
              // 如果图片 URL 中不包含类型信息，可以添加 isImage 标记来声明
            ],
        },{
          title:"车辆行驶证:",
          contact:"idcard",
          deletable:false,
          type:"upload",
          maxCount:1,
          fileList: [],
          show:true,
           color:'#07c160',
        },{
          title:"审批文件:",
           type:"upload",
             maxCount:1,
           show:true,
           color:'#ff976a',
           fileList: [],
        },{
          title:"其他审批文件1:",
           color:'#ff976a',
           deletable:false,
           contact:"idcard",
          maxCount:1,
          type:"upload",
          show:true,
          fileList: [],
        },{
          title:"其他审批文件2:",
           color:'#ff976a',
           deletable:false,
           contact:"idcard",
            maxCount:1,
          type:"upload",
          show:true,
          fileList: [],
        },{
          title:"其他审批文件3:",
           deletable:false,
           contact:"idcard",
            maxCount:1,
           type:"upload",
           color:'#1989fa',
           show:true,
          fileList: [],
        },{
          title:"其他审批文件4:",
             color:'#1989fa',
           deletable:false,
           contact:"idcard",
            maxCount:1,
           type:"upload",
           show:true,
          fileList: [],
        },{
          title:"其他审批文件5:",
           deletable:false,
           contact:"idcard",
              color:'#1989fa',
            maxCount:1,
          type:"upload",
          show:true,
          fileList: [],
        },
        {
          type:"textarea",
          title:"随行人员姓名(逗号分隔):",
          prop:"followMan",
          color:'#ff976a',
          disabled:true,
          contact:"user-circle-o",
        },
        {
          type:"textarea",
          title:"申请说明",
          prop:"remark",
          color:'#ee0a24',
          disabled:true,
          contact:"edit",
        },
        ], 
        };
    },
    mounted(){},
    methods: {}

}
</script>
<style>
._van-icon {
  display: flex;
  align-items: center;
  margin-right: 5px;
}
.weui-cell__bd {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
  border-bottom: 1px solid #f1eded;
}
.weui-cell__up {
  display: flex;
  padding: 10px 15px;
  align-items: center;
}
.weui-cell__td {
  display: flex;
  justify-content: space-between;
  padding: 10px 15px;
}
.weui-cell__bd ._text {
  width: 32%;
}
.weui-input {
  text-align: right;
  width: 68%;
  font-size: 15px;
  color: rgb(94, 92, 92);
}
.txts {
  display: flex;
  align-items: center;
}
.rich {
  margin: 10px 15px;
}
.rich ._textarea {
  width: calc(100% - 10px);
  margin-top: 10px;
  border: 1px solid #f1eded;
  border-radius: 5px;
  padding: 5px;
}
.actiondata {
  padding: 10px;
  display: block;
}
.actiondata:not(:last-child) {
  border: 1px solid #f1eded;
}
.phcolor {
  font-size: 14px;
  color: #aab2bd;
  text-align: right;
}
</style>