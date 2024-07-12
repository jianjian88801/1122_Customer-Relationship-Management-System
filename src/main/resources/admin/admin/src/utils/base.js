const base = {
    get() {
        return {
            url : "http://localhost:8080/kehuguanxiguanli/",
            name: "kehuguanxiguanli",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/kehuguanxiguanli/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "客户关系管理系统"
        } 
    }
}
export default base
