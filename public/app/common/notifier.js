app.factory('notifier', function(toastr) {
    toastr.opt
    return {
        success: function(msg) {
            toastr.success(msg);
        },
        error: function(msg) {
            toastr.error(msg);
        }
    }
})