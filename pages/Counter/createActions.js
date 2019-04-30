
module.exports = function (update) {
  return {
    increment: function () {
      update(function (state) {
        state.count += 1
        return state
      })
    },
    decrement: function () {
      update(function (state) {
        state.count -= 1
        return state
      })
    }
  }
}
