<template>
   <view class="visitor">
    <form catchsubmit="formSubmit" catchreset="formReset" bindsubmit="formSubmit">
      <view v-for="(item,index) in formdata" :key="index">
        <!-- input输入框 -->
        <view
          class="weui-cell__bd"
          v-if="item.type=='text' && item.show==true"
        >
          <text>{{item.title}}</text>
          <input
            class="weui-input"
            placeholder-class="phcolor"
            :value="value[item.prop]"
            :name="item.prop"
            @blur="item.change($event,index)"
            :placeholder="item.placeholder"
            :left-icon="item.contact"
            :disabled="item.disabled"
            v-show="item.show ?item.show:true"
            :required="item.required"
          />
        </view>
        <!-- 下拉选择 -->
        <view v-else-if="item.type=='select'" class="weui-cell__bd">
          <text>{{item.title}}</text>
          <input class="weui-input weui-choose"
            :value="value[item.prop]"
            placeholder-class="phcolor"
            :name="item.prop"
            :placeholder="item.placeholder"
            :left-icon="item.contact"
            :disabled="item.disabled"
            v-show="item.show ?item.show:true"
            :required="item.required"
            @click="item.secetevent(index)"
          />
          <van-action-sheet
            :show="item.showsecect"
            :title="item.titlename"
            @close="item.Close(index)"
            @select="item.onSelect(index)"
          >
            <van-search :value="item.searchvalue" placeholder="请输入搜索关键词" v-if="item.show" />
            <view
              v-for="(list,ind) in item.actions"
              :key="ind"
              class="actiondata"
              :class="item.activeaction==ind?'activeaction':''"
              @click="item.onSearch(index,ind)"
            >
              <span class="actionsvalue">{{list.name}}</span>
            </view>
          </van-action-sheet>
        </view>
        <!-- 上传文件 -->
        <view v-else-if="item.type=='upload' && item.show==true ">
          <view  class="weui-cell__td">{{item.title}}</view>
          <van-uploader
              class="weui-cell__bd"
              :file-list="item.fileList "
              :maxCount="item.maxCount"
              accept="image"
              @afterRead="item.afterRead($event,index)"
              @delete="item.del_img($event,index)"
            />
        </view>
        <!-- 多行文本 -->
        <view v-else-if="item.type=='textarea'" class="rich">
          <text>{{item.title}}</text>
          <textarea
            :required="item.required"
            :disabled="item.disabled"
            :placeholder="item.placeholder"
            placeholder-class="phcolor"
            @blur="item.change($event,index)"
          ></textarea>
        </view>
        <view v-else-if="item.type=='datetime'" class="weui-cell__bd">
          <!--时间 -->
          <text>{{item.title}}</text>
          <input class="weui-input weui-sele"
            :value="value[item.prop]"
            placeholder-class="phcolor"
            :name="item.prop"
            :placeholder="item.placeholder"
            :disabled="item.disabled"
            :required="item.required"
            @click="item.secetevent(index)"
          />
          <van-popup :show="item.showsecect" position="bottom">
            <van-datetime-picker
              :value="item.currentDate"
              :type="item.type"
              :min-date="item.minDate"
              :lazy-render="false"
              :max-date="item.maxDate"
              :formatter="formatter"
              @cancel="item.cancel($event,index)"
              @confirm="item.confirm($event,index)"
            />
          </van-popup>
        </view>
      </view>
      <view class="btn-area">
        <button style="margin: 30rpx" type="primary"  formType="formSubmit">提交信息</button>
      </view>
    </form>
    <van-toast id="van-toast" />
  </view>
</template>
<script>
export default {
  props: ['formatter',"value","formdata"],
  data:{},
  methods:{
    formSubmit(){
      this.$emit('formSubmit')
    }
  },
}
</script>

<style>
.card {
  padding: 10px;
}
</style>
