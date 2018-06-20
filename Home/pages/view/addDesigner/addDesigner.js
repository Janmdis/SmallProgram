Page({
  data: {
    countries: [],
    countryIndex: 0,
  },
  bindCountryChange: function (e) {
    this.setData({
      countryIndex: e.detail.value
    })
  },

});