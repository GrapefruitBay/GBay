app.factory('notifier', function(toastr) {
    return {
        success: function(msg) {
            toastr.success(msg);
        },
        error: function(msg) {
            toastr.error(msg);
        },
        warning: function(msg){
            toastr.warning(msg);
        },
        info: function(msg){
            toastr.info(msg);
        }
    }
});