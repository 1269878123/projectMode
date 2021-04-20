export default {
  defaulteApi: {
    host: process.env.VUE_APP_API_defaulteApi,
    withCredentials: false,
    token: true,
    path: {
      loginout: '/auth/loginout', // 退出登录
      login: '/auth/login',
      getUserInfo: '/api/user/getuserinfo', // 获取用户信息
      sendVerifyCode: '/api/sms/sendverifycode', // 验证码
      checkverifycode: '/api/sms/checkverifycode', // 检查验证码
      register: '/api/user/register', // 注册
      resetPassword: '/api/user/resetpassword', // 修改密码
      initPassword: '/api/user/initpassword', // 修改密码
      fixpassword: '/api/user/fixpassword', //修改密码
      getallfamily: '/api/parentinfo/getallfamily', //查看孩子/我的孩子
      createfamily: '/api/parentinfo/createfamily', //绑定孩子
      deletefamily: '/api/parentinfo/deletefamily', //解除绑定孩子
      getusercenterinfo: '/api/user/getusercenterinfo', //获取用户信息
      updateuserinfo: '/api/user/updateuserinfo', //修改用户信息
      getexteruserinfo: '/auth/getexteruserinfo' // 外部登陆中转页
    }
  },
  xyapibase: {
    host: process.env.VUE_APP_API_xyapibase,
    withCredentials: false,
    token: true,
    path: {
      getallgrade: '/api/schoolgrade/getallgrade', //获取全部年级
      getschoolstrategyPage: '/api/schoolStrategy/getschoolstrategyPage', // 获取年级策略列表
      getAllStrategyTypes: '/api/schoolStrategy/getAllStrategyTypes', // 获取年级策略类型
      createSchoolStrategy: '/api/schoolStrategy/createSchoolStrategy', //创建年级策略
      editSchoolStrategy: '/api/schoolStrategy/editSchoolStrategy', // 编辑年级策略
      deleteSchoolStrategy: '/api/schoolStrategy/deleteSchoolStrategy', // 删除年级策略
      copySchoolStrategy: '/api/schoolStrategy/copySchoolStrategy', // 复制年级策略
      gethomepageinfo: '/api/home/gethomepageinfo', // 首页详情数据
      getgradelist: '/api/schoolgrade/getgradelist', // 教学数据-年纪管理获取所有年级
      initializegrade: '/api/schoolgrade/initializegrade', // 教学数据-初始化年级
      upgradeschoolgrade: '/api/schoolgrade/upgradeschoolgrade', // 教学数据-升级年级
      PaperDetailById: '/api/SchoolExam/GetPaperDetailById', //组卷详情
      Getschoolyearlist: '/api/schoolyear/getschoolyearwithsemester', //学年列表
      Addschoolyear: '/api/schoolyear/addschoolyear', //添加学年
      Updateschoolyear: '/api/schoolyear/updateschoolyear', //编辑学年
      deleteschoolyear: '/api/schoolyear/deleteschoolyear', // 删除学年
      Addsemester: '/api/semester/addsemester', //添加学期
      Updatesemester: '/api/semester/updatesemester', //编辑学期
      deletesemester: '/api/semester/deletesemester', // 删除学期
      getTeacherList: '/api/teacher/page', //获取教师列表分页
      importTeacher: '/api/teacher/import', //导入教师
      creatTeacher: '/api/teacher/create', //创建教师
      editTeacher: '/api/teacher/edit', //编辑教师
      deleteTeacher: '/api/teacher/delete', //删除教师
      resetPassTeacher: '/api/teacher/updatepassword', //教师重置密码
      creatStudent: '/api/student/newstudent', //学生创建
      deleteStudent: '/api/student/delete', //学生删除
      deleteStudents: '/api/student/deletebystudents', //学生批量删除
      editStudent: '/api/student/updatestudent', //学生编辑
      getStudentList: '/api/student/page', //学生分页列表
      importStudent: '/api/student/import', //导入学生名单
      getorganleadermodule: '/api/schoolorganleader/getorganleadermodule', //权限列表
      saveorganleadermodule: '/api/schoolorganleader/saveorganleadermodule', //设置权限
      getsetupteacherlist: '/api/schoolorganleader/getsetupteacherlist', //查询教师
      getdutylist: '/api/schoolorganleader/getdutylist', // 职务列表
      createorganleader: '/api/schoolorganleader/createorganleader', //添加职务，设置班主任
      deleteorganleader: '/api/schoolorganleader/deleteorganleader', // 删除职务，删除班主任
      getheadmasterlist: '/api/schoolorganleader/getheadmasterlist', //获取校长列表
      getdeputyheadlist: '/api/schoolorganleader/getdeputyheadlist', // 获取副校长
      getgradedirectorlist: '/api/schoolorganleader/getgradedirectorlist', // 获取年级主任
      getdisciplineleaderlist: '/api/schoolorganleader/getdisciplineleaderlist', // 获取学科组长
      getpreparationteamleaderlist:
        '/api/schoolorganleader/getpreparationteamleaderlist', // 获取备课组长
      getexaminationadminList: '/api/schoolorganleader/getexaminationadminList', // 获取考试管理员
      getachoolyearandsemester: '/api/schoolyear/getschoolyearandsemester', // 获取学年学期组合
      getGradeList: '/api/schoolgrade/getallgradebyschoolId', //获取年级
      downloadtemplate: '/api/schoolclassleader/downloadtemplate', // 课程安排导入模板下载
      importCourse: '/api/schoolclassleader/import', //导入课程设置
      getallclassleaderlist: '/api/schoolclassleader/getallclassleaderlist', // 获取课程设置
      getsubjectteacherlist: '/api/schoolclassleader/getsetupteacherlist', // 获取添加教师列表
      createclassleader: '/api/schoolclassleader/createclassleader', // 课程设置添加教师
      deleteclassleader: '/api/schoolclassleader/deleteclassleader', //删除教师
      getGradeTreeList: '/api/schoolgrade/getallgradewithclass', //获取年级和班级
      creatClass: '/api/class/createmulti', //创建班级多个
      editClass: '/api/class/updatename', //修改班级名称
      deleteClass: '/api/class/delete', //删除班级
      getChargeTeacherList:
        '/api/schoolorganleader/getheadteacherundertheclass', //获取班级下的班主任
      getallgradewithstudents: '/api/schoolgrade/getallgradewithstudents' //获取年级下的学生
    }
  },
  webUrl: {
    admin: process.env.VUE_APP_admin, // 数据统一中心
    importGrades: process.env.VUE_APP_importGrades, //成绩导入
    xyexam: process.env.VUE_APP_xyexam, // 题库组卷
    teacher: process.env.VUE_APP_teacher, // 在线阅卷阅卷
    data: process.env.VUE_APP_data, // 学生画像 报表中心 学情中心
    test: process.env.VUE_APP_test, // 考试安排
    answersheet: process.env.VUE_APP_answersheet // 答题卡
  }
}
