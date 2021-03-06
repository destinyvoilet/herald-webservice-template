define({ "api": [
  {
    "type": "DELETE",
    "url": "/param",
    "title": "获取 Delete 请求参数",
    "group": "参数获取",
    "description": "<p>获取 Delete 请求参数的例子</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "param1",
            "description": "<p>参数1</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "param2",
            "description": "<p>参数2</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "param1",
            "description": "<p>参数1</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "param2",
            "description": "<p>参数2</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/param.js",
    "groupTitle": "参数获取",
    "name": "DeleteParam"
  },
  {
    "type": "GET",
    "url": "/param",
    "title": "获取 Get 请求参数",
    "group": "参数获取",
    "description": "<p>获取 Get 请求参数的例子</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "param1",
            "description": "<p>参数1</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "param2",
            "description": "<p>参数2</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "param1",
            "description": "<p>参数1</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "param2",
            "description": "<p>参数2</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/param.js",
    "groupTitle": "参数获取",
    "name": "GetParam"
  },
  {
    "type": "POST",
    "url": "/param",
    "title": "获取 Post 请求参数",
    "group": "参数获取",
    "description": "<p>获取 Post 请求参数的例子</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Any",
            "optional": false,
            "field": "param1",
            "description": "<p>参数1</p>"
          },
          {
            "group": "Parameter",
            "type": "Any",
            "optional": false,
            "field": "param2",
            "description": "<p>参数2</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Any",
            "optional": false,
            "field": "param1",
            "description": "<p>参数1</p>"
          },
          {
            "group": "Success 200",
            "type": "Any",
            "optional": false,
            "field": "param2",
            "description": "<p>参数2</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/param.js",
    "groupTitle": "参数获取",
    "name": "PostParam"
  },
  {
    "type": "PUT",
    "url": "/param",
    "title": "获取 Put 请求参数",
    "group": "参数获取",
    "description": "<p>获取 Put 请求参数的例子</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Any",
            "optional": false,
            "field": "param1",
            "description": "<p>参数1</p>"
          },
          {
            "group": "Parameter",
            "type": "Any",
            "optional": false,
            "field": "param2",
            "description": "<p>参数2</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Any",
            "optional": false,
            "field": "param1",
            "description": "<p>参数1</p>"
          },
          {
            "group": "Success 200",
            "type": "Any",
            "optional": false,
            "field": "param2",
            "description": "<p>参数2</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/param.js",
    "groupTitle": "参数获取",
    "name": "PutParam"
  },
  {
    "type": "DELETE",
    "url": "/error",
    "title": "一不小心搞砸了",
    "group": "抛出错误",
    "description": "<p>正常情况下不应该抛出类型为 Error 的异常 如果抛出 Error，会被响应为 500 服务器内部错误 显然这样的错误提示对于用户来说不是很友好</p>",
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK（只要服务器正常运行，永远返回 200 OK）\n{\n  success:false,\n  code:500,\n  reason:\"服务器内部错误（TypeError: zzj.fuck is not a function）\"\n  error:\"INTERNAL_SERVER_ERROR\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/error.js",
    "groupTitle": "抛出错误",
    "name": "DeleteError"
  },
  {
    "type": "GET",
    "url": "/error",
    "title": "抛出标准错误",
    "group": "抛出错误",
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK（只要服务器正常运行，永远返回 200 OK）\n{\n  success:false,\n  code:400,\n  reason:\"这里的提示语应该适合直接展示给用户\"\n  error:\"EXAMPLE_ERROR\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/error.js",
    "groupTitle": "抛出错误",
    "name": "GetError"
  },
  {
    "type": "POST",
    "url": "/error",
    "title": "直接抛出错误码",
    "group": "抛出错误",
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK （只要服务器正常运行，永远返回 200 OK）\n{\n  success:false,\n  code:403,\n  reason:\"权限不允许\"\n  error:\"FORBIDDEN\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/error.js",
    "groupTitle": "抛出错误",
    "name": "PostError"
  },
  {
    "type": "PUT",
    "url": "/error",
    "title": "便捷的抛出 400 错误",
    "group": "抛出错误",
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK（只要服务器正常运行，永远返回 200 OK）\n{\n  success:false,\n  code:400,\n  reason:\"直接展示给用户友好的提示语\"\n  error:\"BAD_REQUEST\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/error.js",
    "groupTitle": "抛出错误",
    "name": "PutError"
  },
  {
    "type": "GET",
    "url": "/user",
    "title": "获取用户信息示例",
    "group": "用户信息",
    "description": "<p>获取用户信息的例子</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>用户姓名</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "cardnum",
            "description": "<p>用户一卡通号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "schoolnum",
            "description": "<p>用户学号</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "isWeixin",
            "description": "<p>用户是否从微信网页授权认证登录</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/user.js",
    "groupTitle": "用户信息",
    "name": "GetUser",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UNAUTHORIZED",
            "description": "<p>需要登录-接口需要登录才能调用</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "TOKEN_EXPIRED",
            "description": "<p>身份凭证失效-请求携带了 Token 但是 Token 无效</p>"
          }
        ]
      }
    }
  },
  {
    "type": "POST",
    "url": "/auth",
    "title": "认证登录",
    "group": "认证登录",
    "name": "Auth",
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
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "-",
            "description": "<p>result 为 token 字符串</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "CAS_ERROR",
            "description": "<p>统一身份认证过程出错</p>"
          },
          {
            "group": "Error 500",
            "optional": false,
            "field": "IDENTITY_INVALID",
            "description": "<p>身份完整性校验失败</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "middleware/auth.js",
    "groupTitle": "认证登录"
  }
] });
