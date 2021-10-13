const App = getApp();

Component({
  properties: {
    list: {
      type: Array,
      value: [],
    },
  },
  data: {
    showLoading: false,
  },
  attached() {
    // 事件监听
    this._eventListener();
  },
  detached() {
    // 事件解绑
    this._eventUnListener();
  },
  methods: {
    bindScrollToLower() {
      if (this.data.showLoading) return;
      console.log("加载中");
      this._showLoading();
      this.triggerEvent("loadMore");
    },
    _showLoading() {
      this.setData({
        showLoading: true,
      });
    },
    _hideLoading() {
      this.setData({
        showLoading: false,
      });
    },
    _eventListener() {
      App.rss.on("hideScrollLoading", () => {
        this._hideLoading();
      });
    },
    _eventUnListener() {
      App.rss.off("hideScrollLoading");
    },
  },
});
