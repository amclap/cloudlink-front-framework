const HomeMenu = [
  {
    path: 'cloudlink',
    children: [
      {
        path: 'dashboard',
        data: {
          menu: {
            title: '仪表盘',
            icon: 'fa fa-home',
            selected: true,
            expanded: false,
            order: 0
          }
        }
      }, {
        path: 'personalCenter',
        data: {
          menu: {
            title: '个人中心',
            icon: 'ion-person',
            selected: false,
            expanded: false,
            order: 0
          }
        },
        children: [{
          path: 'basicInfo',
          data: {
            menu: {
              title: '基本信息',
              icon: 'fa fa-list-alt',
              selected: true,
              expanded: false,
              order: 0
            }
          }
        }, {
          path: 'password',
          data: {
            menu: {
              title: '修改密码',
              icon: 'fa fa-user-secret',
              selected: true,
              expanded: false,
              order: 1
            }
          }
        }]
      }, {
        path: 'productCenter',
        data: {
          menu: {
            title: '产品中心',
            icon: 'fa fa-clone',
            selected: false,
            expanded: false,
            order: 0
          }
        },
        children: [{
          path: 'productAdmin',
          data: {
            menu: {
              title: '产品管理',
              icon: 'fa fa-braille',
              selected: true,
              expanded: false,
              order: 0
            }
          }
        }, {
          path: 'productService',
          data: {
            menu: {
              title: '产品服务',
              icon: 'fa fa-qrcode',
              selected: false,
              expanded: false,
              order: 1
            }
          }
        }]
      }, {
        path: 'adminCenter',
        data: {
          menu: {
            title: '管理中心',
            icon: 'fa fa-desktop',
            selected: false,
            expanded: false,
            order: 100,
          }
        },
        children: [
          {
            path: 'platformAdmin',
            data: {
              menu: {
                title: '平台管理',
                icon: 'fa fa-windows'
              }
            },
            children: [{
              path: 'systemAdmin',
              data: {
                menu: {
                  title: '系统管理',
                  icon: 'fa fa-server'
                }
              }
            }, {
              path: 'menuAdmin',
              data: {
                menu: {
                  title: '菜单管理',
                  icon: 'fa fa-tasks'
                }
              }
            }, {
              path: 'dictionary',
              data: {
                menu: {
                  title: '数据字典',
                  icon: 'fa fa-tasks'
                }
              }
            }, {
              path: 'functionOperation',
              data: {
                menu: {
                  title: '功能操作',
                  icon: 'fa fa-cogs'
                }
              }
            }]
          }, {
            path: 'privilegeAdmin',
            data: {
              menu: {
                title: '权限管理',
                icon: 'fa fa-diamond'
              }
            }, children: [
              {

                path: 'tenantAdmin',
                data: {
                  menu: {
                    title: '租户管理',
                    icon: 'fa fa-american-sign-language-interpreting'
                  }
                }
              }, {
                path: 'enterpriseAdmin',
                data: {
                  menu: {
                    title: '企业管理',
                    icon: 'fa fa-university'
                  }
                }
              }, {
                path: 'orgAdmin',
                data: {
                  menu: {
                    title: '组织机构',
                    icon: 'fa fa-sitemap'
                  }
                }
              }, {
                path: 'userAdmin',
                data: {
                  menu: {
                    title: '用户管理',
                    icon: 'fa fa-user-plus'
                  }
                }
              }, {
                path: 'roleAdmin',
                data: {
                  menu: {
                    title: '角色管理',
                    icon: 'fa fa-id-card'
                  }
                }
              }, {
                path: 'functionPrivilege',
                data: {
                  menu: {
                    title: '功能权限',
                    icon: 'fa fa-low-vision'
                  }
                }
              }
            ]
          }
        ]
      },
      {
        path: 'operationCenter',
        data: {
          menu: {
            title: '运营中心',
            icon: 'fa fa-ravelry',
            selected: false,
            expanded: false,
            order: 100,
          }
        },
        children: [
          {
            path: 'costageAdmin',
            data: {
              menu: {
                title: '计费管理',
                icon: 'ion-edit'
              }
            }, children: [
              {
                path: 'monthReport',
                data: {
                  menu: {
                    title: '运营月报',
                    icon: 'ion-edit'
                  }
                }
              }, {
                path: 'otherAdmin',
                data: {
                  menu: {
                    title: '其他管理',
                    icon: 'ion-edit'
                  }
                }
              }
            ]
          }, {
            path: 'optReport',
            data: {
              menu: {
                title: '运营报表',
                icon: 'fa fa-windows'
              }
            }
          }
        ]
      }, {
        path: 'docCenter',
        data: {
          menu: {
            title: '文档中心',
            icon: 'fa fa-folder-open-o',
            selected: false,
            expanded: false,
            order: 100,
          }
        },
        children: [
          {
            path: 'handbook',
            data: {
              menu: {
                title: '用户手册',
                icon: 'fa fa-microchip'
              }
            }
          }, {
            path: 'otherDoc',
            data: {
              menu: {
                title: '其他文档',
                icon: 'fa fa-newspaper-o'
              }
            }
          }
        ]
      }, {
        path: 'mornitorCenter',
        data: {
          menu: {
            title: '监控中心',
            icon: 'fa fa-line-chart',
            selected: false,
            expanded: false,
            order: 200,
          }
        },
        children: [
          {
            path: 'cluster',
            data: {
              menu: {
                title: '集群监控',
              }
            }
          }
        ]
      },
      {
        path: 'devCenter',
        data: {
          menu: {
            title: '开发中心',
            icon: 'fa fa-file-code-o',
            selected: false,
            expanded: false,
            order: 300,
          }
        },
        children: [
          {
            path: 'demo',
            data: {
              menu: {
                title: '示例',
              }
            }
          },
          {
            path: 'api',
            data: {
              menu: {
                title: '服务接口',
              }
            }
          },
        ]
      },
      {
        path: 'jasCommunity',
        data: {
          menu: {
            title: '中盈社区',
            icon: 'fa fa-meh-o',
            selected: false,
            expanded: false,
            order: 400,
          }
        },
        children: [
          {
            path: 'jasBbs',
            data: {
              menu: {
                title: '论坛',
                icon: ' fa fa-street-view',

              }
            }
          },
        ]
      },
      {
        path: 'customerCenter',
        data: {
          menu: {
            title: '客服中心',
            icon: 'fa fa-volume-control-phone',
            selected: false,
            expanded: false,
            order: 400,
          }
        },
        children: [
          {
            path: 'contact-list',
            data: {
              menu: {
                title: '联系列表',
              }
            }
          },
        ]
      }
    ]
  }
];
export const MENU = [
  ...HomeMenu
];
