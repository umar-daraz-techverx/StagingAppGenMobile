var utility = (function() {
    return {
     base_url: "http://appqubz-001-site1.etempurl.com/",
     base_url_api: "http://appqubz-001-site2.etempurl.com/api/vi/",
     base_url_api2: "http://appqubz-001-site2.etempurl.com/api/v1/",
     get_application_setting: "GetApplicationSetting/PakegName?pakgeName=",
     get_feature_App: "GetFeatureApp/PakegName?pakgeName=",
     get_app_slider: "GetAppSlider/PakegName?pakgeName=",
     get_all_post_intervel: function(packageName , startIndex=0 , lastIndex=10) {
        return "GetVideo/getPosts?pakgeName="+packageName+"&startIndex="+startIndex+"&lastIndex="+lastIndex;
     },
     get_all_post: "GetVideo/getAllPost?pakgeName=",
     get_post_description: "GetPostDiscraption/postId?postId=",
     get_wallpaper: "GetWallPaper/PakegName?pakgeName=",
     get_post_by_sub_category: "GetPostBySubCategory?subCateId=",
    }
   
   }());