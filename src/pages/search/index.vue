<template>
  <view class="search">
    <view>
      <view class="add">
        <van-button type="primary" @click="add">新增</van-button>
      </view>
      <view class="header">
        <view v-for="(item,index) in search" :key="index" style="flex-shrink: 1;">
          <van-search :value="item.value" :placeholder="item.placeholder" />
        </view>
        <van-button type="primary" @click="search" style="flex-shrink:0;margin-right:5px;">搜索</van-button>
      </view>
    </view>
    <view type="primary" v-if="appList.length>0">
      <view v-for="(item,index) in appList" :key="index">
          <view>
            <text></text>
          </view>
      </view>
    </view>
    <view class="empty" v-else>暂无记录!</view>
  </view>
</template>
<script>
export default {
  data () {
    return {
      appList: [], // 列表数据
      page: 1,      // 当前页数
      total_page: 0,// 总页数
      search:[
        {
           dept:"",
          placeholder:'请输入到访单位',
        },
        {
          car:'',
          placeholder:'请输入姓名',
        },
       
      ],
    }
  },
  // 实例创建完成后调用数据
  mounted() {
    this.getList()
  },
  // 上拉触底事件
  onReachBottom () {
    if (this.page > this.total_page) {
      console.log('数据加载完了')
    } else {
      // 下一页
      this.page = this.page + 1
      this.getList()
    }
  },
  // 下拉刷新事件
  onPullDownRefresh () {
    // 初始化页码
    this.page = 1
    this.getList()
  },
  methods: {
    // 获取数据方法
    getList () {
      const that = this
           //访问单位
      that.$http.post({
      url: 'app!ajaxGetTempListCount',
      data : {
            page: that.page,// 传递页码
            toDeptId:"",
						driverCode:"",
						userId:"",
						count:15,
						audit: that.page,
						jcName: that.search[0].dept,
						carNo: that.search[1].car,
        },
      }).then(res => {
          if(res.result=="success"){
                  console.log(res)
                   wx.stopPullDownRefresh()
                // 返回的数据
                const data = res.data
                // 数据追加  data.list为返回的数据列表
                if (that.page > 1) {
                  // 数据追加
                  that.appList.push(...data)

                } else {
                  // 数据
                  that.appList = data
                }
                // 总页数
                that.total_page = data.total_page
          }
      })
    },
    search(){
      that.page=1;
      this.getList();
      console.log("搜素")
    },
    add(){
      wx.navigateTo({
        url:'../visitor/main'
      })
    }
  }
}
</script>
<style scoped>
.header {
  display: flex;
}
.empty {
  font-size: 18px;
  text-align: center;
  color: rgb(141, 140, 140);
  margin-top:10px;
}
.add {
  text-align: right;
  padding: 5px;
}
</style>
<style lang="scss">
.search {
  .van-button--normal {
    padding: 0 8px !important;
    flex-shrink: 0 !important;
  }
  .van-button {
    height: 30px !important;
    line-height: 30px !important;
  }
  .van-search{
    padding:0 5px;
    align-items: center;
  }
}
</style>