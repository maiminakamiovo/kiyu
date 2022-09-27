<view class="loginbox">
    <view class="logincenter">
        <view class="loginbgfirst">
            <view class="loginbgsecond">
                <view class="loginbgthird">
                    <button open-type="chooseAvatar" bind:chooseavatar="onChooseAvatar" class="loginpcicon">
                        <image class="loginheader" mode="widthFix" src="{{avatarUrl?avatarUrl:'https://bh-marcom-php.oss-cn-shanghai.aliyuncs.com/mini-fhc/files/iconheader.png'}}"></image>
                    </button>
                </view>
            </view>
        </view>
        <view class="logincentertitle">点击上方更换头像</view>
        <view class="logincenterauthorize">
            <view class="imgbg">
                <image mode="widthFix" class="authorizeimg" src="https://bh-marcom-php.oss-cn-shanghai.aliyuncs.com/mini-fhc/files/lujing.png"></image>
            </view>
            <input type="nickname" bindblur="get_nickname" class="authorizeinput" value="{{nickname}}" placeholder="请输入昵称" placeholder-class="placeholderStyle" />
        </view>
    </view>
    <block wx:if="{{author_name}}">
        <view class="background-box">
            <view class="background-title-box">
                <view class="button-login" bindtap="getUserProfile">
                    授权个人信息
                </view>
                <view class="button-text">
                    <text>同意注册成为小程序用户</text>
                </view>
            </view>
        </view>
    </block>
    <block wx:if="{{author_phone}}">
        <view class="background-box">
            <view class="background-title-box">
                <button class="button-login" style="width: 600rpx;" open-type='getPhoneNumber' bindgetphonenumber="getPhoneNumber">
                    授权手机号
                </button>
                <view class="button-text">
                    <text>同意注册成为小程序用户</text>
                </view>
            </view>
        </view>
    </block>

</view>










<!-- <view class="container" style="background: url(https://bh-marcom-php.oss-cn-shanghai.aliyuncs.com/mini-fhc/files/login.png) no-repeat;background-size: 100%">
    <block wx:if="{{author_name}}">
        <view class="background-box">
      <view class="background-title-box">
        <view class="button-login" bindtap="getUserProfile">
          授权昵称
        </view>
        <view class="button-text">
          <text>同意注册成为小程序用户</text>
        </view>
      </view>
    </view>
       
    </block>
    <block wx:if="{{author_phone}}">
        <view class="background-box">
            <view class="background-title-box">
                <button class="button-login" style="width: 600rpx;" open-type='getPhoneNumber' bindgetphonenumber="getPhoneNumber">
                    授权手机号
                </button>
                <view class="button-text">
                    <text>同意注册成为小程序用户</text>
                </view>
            </view>
        </view>
    </block>
</view> -->









let big = getApp();
big.createPage({
    data: {
        source_id: 0,
        // country_array: [],
        author_name: true,
        author_phone: false,
        avatarUrl: '', //头像
        nickname: '',  //昵称
    },

    onLoad: function (options) {
        let that = this
        var source_id = wx.getStorageSync('source_id')
        if (source_id) {
            that.setData({
                source_id: source_id
            })
        } else {
            that.get_jump()
        }
    },
    // 获取source
    get_jump: function () {
        let that = this;
        big.request('api/get_source_info', {}).then(res => {
            if (res.success == 1) {
                that.setData({
                    source_id: res.data.id
                })
            }
        });
    },
    // 授权头像
    onChooseAvatar(e) {
        const { avatarUrl } = e.detail
        console.log(e.detail)
        this.setData({
            avatarUrl,
        })
    },
    // 获取昵称
    get_nickname: function (e) {
        console.log(e.detail.value)
        let that = this
        if (e.detail.value) {
            that.setData({
                nickname: e.detail.value
            })
        } else {

        }
    },

    // 个人信息
    getUserProfile(e) {
        let that = this
        let avatarUrl = that.data.avatarUrl
        let nickName = that.data.nickname
        let userinfo = {
            avatarUrl,
            nickName
        }
        console.log(userinfo)
        if (avatarUrl == '') {
            wx.showToast({
                title: '您还未设置头像',
                icon: 'none',
                duration: 2000
            })
        }
        if (nickName == undefined) {
            wx.showToast({
                title: '请输入昵称',
                icon: 'none',
                duration: 2000
            })
        }
        big.request('api/update_wx_info', {
            nickName: nickName,
            avatarUrl: avatarUrl,
            source_id: that.data.source_id,
        }, 'post').then(res => {
            if (res.success) {
                wx.setStorageSync('userinfo', userinfo);
                that.setData({
                    author_name: false,
                    author_phone: true
                })
            } else {
                wx.showToast({
                    title: '授权失败,请清除缓存后再次尝试',
                    icon: 'none',
                    duration: 2000
                })
            }
        });
    },
    // 用户授权手机号
    getPhoneNumber(e) {
        console.log('e是什么', e)
        if (e.detail.errMsg == 'getPhoneNumber:ok') {
            big.request('api/save_mobile', {
                endata: e.detail.encryptedData,
                iv: e.detail.iv,
            }, 'post').then(res => {
                if (res.success) {
                    wx.setStorageSync('mobile', res.data.mobile);
                    wx.setStorageSync('is_ticket', res.data.is_ticket)
                    if (res.data.is_coupon_user == 1) {
                        wx.setStorageSync('scanning', true);
                        wx.reLaunch({
                            url: '/pages/scanning/scanning',
                        })
                    } else {
                        wx.setStorageSync('scanning', false);
                        wx.navigateBack({
                            delta: 1,
                            success: (res) => {
                                console.log('navigateBack success', res)
                            },
                            fail: (res) => {
                                console.log('navigateBack fail', res)
                                wx.reLaunch({
                                    url: '/pages/index/index'
                                })
                            }
                        })
                    }
                } else {
                    console.log('授权手机号失败')
                }
            });
        } else {
            console.log('拒绝哦')
        }
    },

    // 转发朋友圈
    onShareTimeline: function (res) {
        return {
            title: 'FHC上海环球食品展',
            query: '',
            imageUrl: ''
        }
    },
    onReady: function () { },
    onShow: function () { },
    onHide: function () { },
    onUnload: function () { },
})