# Module 拓展

## callback 返回数据格式

```js
result 数据
{
   status:0,   // 状态码，0表示操作成功 -1表示操作失败
   errorMsg: '错误描述信息',
   data: // 数据
}
```

## wb-router

> 页面路由

**引用方式**

```js
const router = weex.requireModule('wb-router')
```

**API**

- 打开页面

router.open(options)

```js
// 示例
router.open({
    // 页面名称。内置"weex"、"web"，其他路由需要原生先注册
    name: 'weex'
    // 下一个weex/web的路径
    url: 'login.js',

    // 页面出现方式,push或者present。默认是 push
    type: 'push',

    // 是否隐藏导航栏, 默认false
    navBarHidden: false,

    // 需要传到下一个页面的数据
    params: {})
```

- 获取 router 的 params 参数

router.getParams()

```js
// 示例
const params = router.getParams()
```

- 关闭页面

router.close(levels)

```js
// 示例
router.close(2) // 关闭两级页面，默认1级
```

- 刷新 weex 页面

router.refresh()

```js
// 示例
router.refresh()
```

## wb-network

> 网络请求

**引用方式**

```js
const network = weex.requireModule('wb-network')
```

**API**

- 请求接口

network.request(options, callback)

```js
// 示例
network.request({
     // `url` 是用于请求的服务器 URL
     url: 'https://some-domain.com/api/user',

     // `method` 是创建请求时使用的方法
     method: 'get', // 默认是 get

     // `headers` 是即将被发送的自定义请求头
     headers: {'X-Requested-With': 'XMLHttpRequest'},

     // `params` 是即将与请求一起发送的 URL/Body 参数
     params: {
     ID: 12345
     }, (result) => {
       // 回调结果
     })
```

## wb-auth（iOS）

> 指纹验证(iPhone 带指纹识别设备)

**引用方式**

```js
const auth = weex.requireModule('wb-auth')
```

**API**

- 是否支持指纹认证 `canUseTouchId()`

```js
// 示例
const resData = auth.canUseTouchId()
```

- 调用指纹认证 `touchId()`

```js
// 示例
auth.touchId(
  {
    title: '登录认证' // 指纹认证弹窗标题
  },
  function(resData) {}
)
```

## wb-communication

> 调用原生通讯相关方法 打电话、发短信，打开通讯录获取联系人信息；

<br>

**引用方式**

```js
const communication = weex.requireModule('wb-communication')
```

<br>

**API**

- 打电话 `call(info)`
  > 参数说明： <br>
  > to：电话号码 <br>
  > tip：是否显示弹窗 （Android 有效，iOS 上默认有弹窗提示）

```js
// 示例
communication.call({ to: '110', tip: true })
```

<br>

- 发短信 `sms(recipients,content,callback)`

> recipients：收件人数组 <br>
> content: 短信内容 <br>
> callback: 回调方法

```js
// 示例
communication.sms(['18601949015', '10086'], '短信内容', data => {
  console.log(data)
})
```

<br>

- 打开通讯录获取联系人信息 `contacts(callback)`

```js
// 示例
communication.contacts(data => {
  console.log(data)
  // {"status":0,"data":{"name":"啊","phone":"10086"},"errorMsg":""}
})
```

## wb-event

> 应用级别事件通知。相比于实例级别的事件[globalEvent](https://weex.apache.org/cn/references/modules/globalevent.html), wb-event 能够跨页面、跨 weex/原生传递事件。

**引用方式**

```js
const event = weex.requireModule('wb-event')
```

**示例**

```js
// 注册事件
event.register('name', result => {
  // result 为触发该事件所传的参数
})

// 发送事件
event.emit({
  name: 'eventName', // 事件名称
  params: {} // 可为空
})

// 注销事件
event.unregister('eventName')

// 注销所有事件
event.unregisterAll()
```

## globalEvent

扩展了全局事件，新增

- viewappear  页面显示的时候触发
- viewdisappear 页面隐藏的时候触发

## wb-geolocation

> 获取定位（坐标系：gcj02）

**引用方式**

```js
const location = weex.requireModule('wb-location')
```

**API**

- 接口：`getLocation(callback)`

```js
location.getLocation(result => {
  // resDate
  // {
  //    status: 0,
  //    errorMsg: '',
  //    data : {
  //      locationLat: '纬度',
  //      locationLng: '经度'
  //    }
  // }
})
```

# wb-image

> 图片相关，拍照/系统相册选图并上传图片、预览图片

**引用方式**

```js
const image = weex.requireModule('wb-image')
```

**API**

- 拍照/相册选图并上传服务器\(支持多选\)：`uploadImage(info,callback)`
  > 注：调用此方法在选择完图片后会直接上传到图片服务器，最后将图片的 url 返回

```js
image.uploadImage({
    url: https:xxx.com/img	 // 图片上传地址(可以不传，默认使用native.js中配置的imageUrl)
    maxCount: 9,                 // 一次最多可选择图片数量 最大支持9张
    imageWidth: 1000,            // 图片宽度（根据宽度按比例裁剪）可以不传默认为 800px
    allowCrop,                   // 是否允许编辑（只有当 maxCount == 1时 此参数才会生效）
    params: {}		         // 上传图片附加参数可为空
    header: {}		         // 上传图片附加请求头可为空
},function(resData){
    //  图片由客户端上传至图片服务器,上传完毕后通过回调方法将url传给js
    //  resData
    //     {
    //      status: 0,
    //      errorMsg: '',
    //      data: ['url1','url2']  //远程图片地址集合
    //   }
})
```

- 打开照相机拍照并返回图片路径：`camera(info,callback)`
  > 注：拍完照片后返回的是本地的图片路径

```js
image.camera(
  {
    imageWidth: 1000, // 图片宽度（根据宽度按比例裁剪）可以不传默认为 800px
    allowCrop // 是否允许编辑（只有当 maxCount == 1时 此参数才会生效）
  },
  function(resData) {
    //  图片由客户端上传至图片服务器,上传完毕后通过回调方法将url传给js
    //  resData
    //     {
    //      status: 0,
    //      errorMsg: '',
    //      data: ['path']     //本地图片地址 注意，为了统一格式这里回传的也是个数组
    //   }
  }
)
```

- 图片选择器 ：`pick(info,callback)`
  > 注：选完照片后返回的是本地的图片路径

```js
image.pick(
  {
    maxCount: 9, // 一次最多可选择图片数量 最大支持9张
    imageWidth: 1000, // 图片宽度（根据宽度按比例裁剪）可以不传默认为 800px
    allowCrop // 是否允许编辑（只有当 maxCount == 1时 此参数才会生效）
  },
  function(resData) {
    // 返回图片路径集合
  }
)
```

- 调起图片浏览器 `preview(info,callback)`

```js
// 示例
image.preview(
  {
    index: 2, // 所点击图片下标(下标从 0 开始)
    images: ['1', '2', '3'] // 图片地址支持 网络图片，及本地图片 和 bmlocal（jsbundle中的图片）
  },
  function(resDate) {
    // resDate 为空
  }
)
```

- 识别图片二维码 `scanImage(info,callback)`

```js
// 示例
image.scanImage(
  {
    path: pathImg //pick返回的本地图片
  },
  result => {
    console.log('result === ' + result.data)
  }
)
```

## wb-modal

> 弹窗相关： alert、toast 等

**引用方式**

```js
const modal = weex.requireModule('wb-modal')
```

**API**

- 警告弹窗：`alert(options, callback)`

```js
modal.alert(
  {
    title: '标题', // 标题
    message: '我是一个弹窗', // 弹窗内容
    okTitle: '确定' // 确定按钮文字
  },
  function(result) {
    // 点击按钮的回调
  }
)
```

- 确定弹窗：`confirm(options, callback)`

```js
modal.confirm(
  {
    title: '标题', // 标题
    message: '我是一个弹窗', // 弹窗内容
    cancelTitle: '取消', // 取消按钮文字
    okTitle: '确定' // 确定按钮文字
  },
  function(result) {
    // 点击按钮回调
  }
)
```

- 输入弹窗：`prompt(options, callback)`

```js
modal.prompt(
  {
    title: '标题', // 标题
    message: '我是一个弹窗', // 弹窗内容
    placeholder: '请输入密码', // 占位符
    isSecure: true, // 是否不显示输入，默认否
    cancelTitle: '取消', // 取消按钮文字
    okTitle: '确定' // 确定按钮文字
  },
  function(result) {
    // 点击按钮回调
  }
)
```

- 操作表弹窗：`actionSheet(options, callback)`

```js
modal.actionSheet({
    title: '标题',   // 标题
    message: '我是一个弹窗',       // 弹窗内容
    actions: [{  // action列表
        type: 'danger' // 按钮类型：'danger', 'cancel', 'normal'。默认normal
        title: '删除' // 按钮的标题
    }]
}, function(result) {
    // 点击按钮回调
})
```

- 吐司：`showToast(text)`

```js
modal.showToast('提示信息') // 提示信息
```

- 显示菊花：`showLoading(options)`

```js
// 调用方式
modal.showLoading('加载中...') // loading 文字，可为空
```

- 设置菊花：`setLoading(options)`

```js
// 调用方式
modal.setLoading({
  text: '加载中...', // loading 文字，可为空
  progress: 0.1 // 进度，可为空
})
```

- 关闭菊花：`hideLoading()`

```js
modal.hideLoading()
```

# wb-navigator

> 设置原生导航栏按钮，支持文字，或图片

**引用方式**

```js
const navigator = weex.requireModule('wb-navigator')
```

**API**

- 设置导航栏左边按钮：`setLeftItem(info,callback)`

```js
//示例
navigator.setLeftItems(
  [
    {
      text: '', // 展示的文字 (和图片 二选一)
      textColor: '', // 文字颜色 (默认为白色)
      fontSize: '32', // 字号（默认32px）
      fontWeight: 'normal', // 是否加粗（默认不加粗）
      image: '' // 展示的图片 (和文字 二选一，文字优先级更高)
    }
  ],
  function() {
    // 按钮点击回调的方法 callback
  }
)
```

- 设置导航栏右边按钮：`setRightItems(info,callback)` 调用方式与上面 👆 的一致；

- 设置导航栏中间的按钮：`setCenterItem(info,callback)` 调用方式与上面一致

- 是否隐藏状态栏：statusBarHidden:(Bool)

```js
// 隐藏状态栏
navigator.statusBarHidden(true)
```

- 是否禁用返回手势

```js
// 禁用返回手势
navigator.disableGestureBack(true)
```

- 是否隐藏导航栏：barHidden:(Bool)

```js
// 隐藏导航栏
navigator.barHidden(true)
```

# wb-router

> 主要用来处理页面的跳转，传值等操作

**引用方式**

```js
const router = weex.requireModule('wb-router')
```

**API**

- 打开新的页面`open(info, callback)`

```js
router.open(
  {
    url: 'sonme-module/index.js', // 页面对应的 js 地址(注意路径从 /src/ 开始)
    type: '', // push或present，默认为push
    navBarHidden: false, // 是否隐藏导航栏，默认不隐藏
    params: {} // 传到下一个页面的参数，params 通过 router.getParams(callback) 获取
  },
  function() {
    // callback
  }
)
```

- 获取上个页面传的参数 `getParams(callback)`

```js
// 示例
router.getParams(function(params) {
  // 获取参数信息
  console.log(params) // 当前页面的参数
})
```

- 返回页面（可以返回多级页面）`router.back(info, callback)`

```js
// 示例
router.back(
  {
    length: 1 // 返回多少级页面（animateType == push 时起作用)默认为1，如果数值超过页面最大层级，将返回第一个页面
  },
  function() {
    console.log('返回页面成功')
  }
)
```

- 打开 WebView(App 内打开) 页面 `toWebView(info)`

```js
// 示例
router.toWebView({
  url: url, // 页面 url
  title: title, // title
  navShow: true, // 是否显示原生导航栏
  shareInfo: {
    // webView 添加了分享功能，如需使用分享请传入一下信息（目前就支持分享到微信朋友圈，微信好友其他如有需要后续添加）
    title: params.shareTitle, // 分享的 title
    content: params.content || '', // 分享的简介
    image: params.image || '', // 分享的小图片
    url: params.url || '' // 分享跳转 url
  }
})
```

- 使用系统浏览器打开 url `openBrowser(url)`

```js
// 示例
router.openBrowser('https://baidu.com')
```

- 重新加载当前 Weex 页面 `refresh()`

```js
// 示例
router.refresh()
```

## wb-storage

> 数据存储

**引用方式**

```js
const storage = weex.requireModule('wb-storage')
```

**API**

- 存数据：<br>
  注意：只支持存： 字符串 或者 json 对象

```js
// 异步方法：setData(key,data,callback)
storage.setData('key','内容'，function(resData){
    // resData
})

// 同步方法：setDataSync(key,data)
const resData = storage.setDataSync('key','内容')
```

- 取数据：

```js
// 异步方法：getData(key,callback)
storage.getData('key', function(resData) {
  // resData
})

// 同步方法：getDataSync(key)
const resData = storage.getDataSync('key')
```

- 删除一条数据：

```js
// 异步方法：deleteData(key,callback)
storage.deleteData('key', function(resData) {
  //
})

// 同步方法: deleteDataSync(key)
const resData = storage.deleteData('key')
```

- 删除所有数据:

```js
// 异步方法：removeData(callback)
storage.removeData(function(resData) {
  //
})

// 同步方法：removeDataSync()
const resData = storage.removeData()
```

## wb-external

> 打开外部功能

**引用方式**

```js
const external = weex.requireModule('wb-external')
```

**API**

- 打开浏览器:

```js
external.openBrowser('https://baidu.com')
```

- 打电话:

```js
external.callPhone('110')
```

- 拍照:

```js
external.openCamera('110', result => {})
```

- 打开相册:

```js
external.openPhoto('110', result => {})
```