define({ "api": [
  {
    "type": "POST",
    "url": "/auth",
    "title": "",
    "group": "Auth",
    "name": "认证登录接口",
    "description": "<p>普遍情况下对接统一身份认证登录接口 如果是自维护用户登录需要修改逻辑</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ticket",
            "description": "<p>CAS 认证 ST-Ticket</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "service",
            "description": "<p>前端发起 CAS 认证的 Service</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "platform",
            "description": "<p>当前登录平台的标识符</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AUTH_PARAMS",
            "description": "<p>“缺少统一身份认证参数”-认证过程中传递参数不同</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CAS_ERROR",
            "description": "<p>统一身份认证过程出错-在从 CAS 系统获取用户信息的过程中出错</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "IDENTITY_CHECKED_FAILED",
            "description": "<p>身份完整性校验失败-从数据库不能找到用户信息</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "middleware/auth.js",
    "groupTitle": "Auth"
  }
] });
