// componcents/like/index.js
Component({
  /**
   * 组件的属性列表
   * 数据共有属性，其他组件可以更改或获取相应的值
   */
  properties: {
    likeBol:{
      type:Boolean,
      value:true
    },
    follow:{
      type:Number,
      value:1
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
      like:'img/like.png',
      liked:'img/liked.png',
      likeBol:true,
      follow:1,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    followBtn(){
      var likeBol = this.properties.likeBol;
      var followinit = this.properties.follow;
      
      if (likeBol){
        this.setData({
          follow: followinit-1,
          likeBol:false
        })
      }else{
        this.setData({
          follow: followinit + 1,
          likeBol:true
        })
      }
    }
  }
})
