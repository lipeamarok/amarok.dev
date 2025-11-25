"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaPython, FaGithub, FaArrowLeft, FaGlobeAmericas, FaFolderOpen, FaFolder, FaFileCode, FaLock
} from "react-icons/fa";
import { SiFastapi, SiNextdotjs, SiPostgresql, SiOpenai, SiDocker, SiPytest, SiGnubash } from "react-icons/si";

// --- Configuration & Data ---

const MEDIA_ASSETS = {
  fastapi: { type: 'video', src: '/projects/aisyad/placeholders/fastapi-swagger.mp4', alt: 'FastAPI Swagger UI' },
  alembic: { type: 'image', src: '/projects/aisyad/placeholders/alembic-graph.png', alt: 'Alembic Migrations' },
  oauth: { type: 'image', src: '/projects/aisyad/placeholders/oauth-flow.png', alt: 'OAuth2 Flow' },
  middleware: { type: 'video', src: '/projects/aisyad/placeholders/middleware-code.mp4', alt: 'Rate Limit Middleware' },
  decorator: { type: 'image', src: '/projects/aisyad/placeholders/decorator-code.png', alt: 'API Decorator Pattern' },
  iaclient: { type: 'image', src: '/projects/aisyad/placeholders/ia-client-code.png', alt: 'AI Client Abstraction' },
  pytest: { type: 'image', src: '/projects/aisyad/placeholders/pytest-cov.png', alt: 'Test Coverage Report' },
  i18n: { type: 'video', src: '/projects/aisyad/placeholders/i18n-structure.mp4', alt: 'Backend Internationalization' },
};

const PROJECT_STRUCTURE_DATA = [
  {
    "name": "backend",
    "type": "folder",
    "isOpen": true,
    "children": [
      {
        "name": "app",
        "type": "folder",
        "isOpen": false,
        "children": [
          {
            "name": "config",
            "type": "folder",
            "children": [
              {
                "name": "__init__.py",
                "type": "file"
              },
              {
                "name": "logger.py",
                "type": "file",
                "comment": "Structured Logging"
              },
              {
                "name": "settings.py",
                "type": "file",
                "comment": "Env & Context"
              }
            ]
          },
          {
            "name": "crud",
            "type": "folder",
            "children": [
              {
                "name": "__init__.py",
                "type": "file"
              },
              {
                "name": "agendamento.py",
                "type": "file"
              },
              {
                "name": "benchmark_concorrente.py",
                "type": "file"
              },
              {
                "name": "campanha.py",
                "type": "file",
                "comment": "Campaign CRUD"
              },
              {
                "name": "contexto_usuario.py",
                "type": "file"
              },
              {
                "name": "criativo.py",
                "type": "file"
              },
              {
                "name": "feedback_etapa.py",
                "type": "file"
              },
              {
                "name": "usuario.py",
                "type": "file"
              }
            ]
          },
          {
            "name": "database",
            "type": "folder",
            "children": [
              {
                "name": "__init__.py",
                "type": "file"
              },
              {
                "name": "db.py",
                "type": "file",
                "comment": "SQLAlchemy Session"
              }
            ]
          },
          {
            "name": "dependencies",
            "type": "folder",
            "children": [
              {
                "name": "__init__.py",
                "type": "file"
              },
              {
                "name": "auth.py",
                "type": "file",
                "comment": "JWT Helpers"
              },
              {
                "name": "permissions.py",
                "type": "file"
              }
            ]
          },
          {
            "name": "i18n",
            "type": "folder",
            "children": [
              {
                "name": "__init__.py",
                "type": "file"
              },
              {
                "name": "messages_en.py",
                "type": "file",
                "comment": "English Strings"
              },
              {
                "name": "messages_pt.py",
                "type": "file",
                "comment": "Portuguese Strings"
              }
            ]
          },
          {
            "name": "jobs",
            "type": "folder",
            "children": [
              {
                "name": "__init__.py",
                "type": "file"
              },
              {
                "name": "tarefas.py",
                "type": "file",
                "comment": "Background Jobs"
              }
            ]
          },
          {
            "name": "middlewares",
            "type": "folder",
            "children": [
              {
                "name": "__init__.py",
                "type": "file"
              },
              {
                "name": "meta_rate_limit_middleware.py",
                "type": "file",
                "comment": "Rate Limiter Logic"
              }
            ]
          },
          {
            "name": "models",
            "type": "folder",
            "children": [
              {
                "name": "__init__.py",
                "type": "file"
              },
              {
                "name": "ad.py",
                "type": "file"
              },
              {
                "name": "adset.py",
                "type": "file"
              },
              {
                "name": "agendamento.py",
                "type": "file"
              },
              {
                "name": "campanha.py",
                "type": "file"
              },
              {
                "name": "campanha_historico.py",
                "type": "file"
              },
              {
                "name": "campanha_sugerida.py",
                "type": "file"
              },
              {
                "name": "contexto_usuario.py",
                "type": "file"
              },
              {
                "name": "criativo.py",
                "type": "file"
              },
              {
                "name": "desempenho.py",
                "type": "file"
              },
              {
                "name": "feedback_etapa.py",
                "type": "file"
              },
              {
                "name": "helpers.py",
                "type": "file"
              },
              {
                "name": "interacao.py",
                "type": "file"
              },
              {
                "name": "notificacao.py",
                "type": "file"
              },
              {
                "name": "permissions.py",
                "type": "file"
              },
              {
                "name": "usuario.py",
                "type": "file"
              }
            ]
          },
          {
            "name": "routes",
            "type": "folder",
            "children": [
              {
                "name": "__init__.py",
                "type": "file"
              },
              {
                "name": "admin",
                "type": "folder",
                "children": [
                  {
                    "name": "__init__.py",
                    "type": "file"
                  },
                  {
                    "name": "rate_limit_control.py",
                    "type": "file"
                  }
                ]
              },
              {
                "name": "meta",
                "type": "folder",
                "children": [
                  {
                    "name": "__init__.py",
                    "type": "file"
                  },
                  {
                    "name": "ad.py",
                    "type": "file"
                  },
                  {
                    "name": "adset.py",
                    "type": "file"
                  },
                  {
                    "name": "campaign.py",
                    "type": "file"
                  },
                  {
                    "name": "creative.py",
                    "type": "file"
                  },
                  {
                    "name": "export.py",
                    "type": "file"
                  },
                  {
                    "name": "insights.py",
                    "type": "file"
                  },
                  {
                    "name": "oauth.py",
                    "type": "file"
                  },
                  {
                    "name": "permissions.py",
                    "type": "file"
                  },
                  {
                    "name": "pixel.py",
                    "type": "file"
                  },
                  {
                    "name": "rate_limit_status.py",
                    "type": "file"
                  },
                  {
                    "name": "setup.py",
                    "type": "file"
                  },
                  {
                    "name": "webhook.py",
                    "type": "file"
                  }
                ]
              },
              {
                "name": "agendamento.py",
                "type": "file"
              },
              {
                "name": "auth.py",
                "type": "file"
              },
              {
                "name": "campanha.py",
                "type": "file"
              },
              {
                "name": "criativo.py",
                "type": "file"
              },
              {
                "name": "dashboard.py",
                "type": "file"
              },
              {
                "name": "ia.py",
                "type": "file"
              },
              {
                "name": "notificacao.py",
                "type": "file"
              },
              {
                "name": "usuario.py",
                "type": "file"
              }
            ]
          },
          {
            "name": "schemas",
            "type": "folder",
            "children": [
              {
                "name": "__init__.py",
                "type": "file"
              },
              {
                "name": "ad.py",
                "type": "file"
              },
              {
                "name": "adset.py",
                "type": "file"
              },
              {
                "name": "agendamento.py",
                "type": "file"
              },
              {
                "name": "auth.py",
                "type": "file"
              },
              {
                "name": "base.py",
                "type": "file"
              },
              {
                "name": "campanha.py",
                "type": "file"
              },
              {
                "name": "contexto_usuario.py",
                "type": "file"
              },
              {
                "name": "criativo.py",
                "type": "file"
              },
              {
                "name": "desempenho.py",
                "type": "file"
              },
              {
                "name": "enums.py",
                "type": "file"
              },
              {
                "name": "ia.py",
                "type": "file"
              },
              {
                "name": "notificacao.py",
                "type": "file"
              },
              {
                "name": "permissions.py",
                "type": "file"
              },
              {
                "name": "setup.py",
                "type": "file"
              },
              {
                "name": "usuario.py",
                "type": "file"
              }
            ]
          },
          {
            "name": "services",
            "type": "folder",
            "children": [
              {
                "name": "__init__.py",
                "type": "file"
              },
              {
                "name": "ad.py",
                "type": "file"
              },
              {
                "name": "adset.py",
                "type": "file"
              },
              {
                "name": "auth.py",
                "type": "file"
              },
              {
                "name": "campanha.py",
                "type": "file"
              },
              {
                "name": "google_oauth.py",
                "type": "file"
              },
              {
                "name": "historico.py",
                "type": "file"
              },
              {
                "name": "ia.py",
                "type": "file",
                "comment": "AI Business Logic"
              },
              {
                "name": "meta.py",
                "type": "file",
                "comment": "Meta Integration"
              },
              {
                "name": "meta_fields.py",
                "type": "file"
              },
              {
                "name": "notificacao.py",
                "type": "file"
              },
              {
                "name": "permissions.py",
                "type": "file"
              },
              {
                "name": "reports.py",
                "type": "file"
              },
              {
                "name": "setup_meta.py",
                "type": "file"
              }
            ]
          },
          {
            "name": "utils",
            "type": "folder",
            "children": [
              {
                "name": "__init__.py",
                "type": "file"
              },
              {
                "name": "api_decorator.py",
                "type": "file",
                "comment": "Decorators"
              },
              {
                "name": "benchmark.py",
                "type": "file"
              },
              {
                "name": "benchmark_concorrente.py",
                "type": "file"
              },
              {
                "name": "campanha.py",
                "type": "file"
              },
              {
                "name": "contexto.py",
                "type": "file"
              },
              {
                "name": "db_helpers.py",
                "type": "file"
              },
              {
                "name": "exception_handlers.py",
                "type": "file"
              },
              {
                "name": "exceptions.py",
                "type": "file"
              },
              {
                "name": "filtros.py",
                "type": "file"
              },
              {
                "name": "helpers.py",
                "type": "file"
              },
              {
                "name": "http.py",
                "type": "file"
              },
              {
                "name": "ia_benchmark.py",
                "type": "file"
              },
              {
                "name": "ia_client.py",
                "type": "file",
                "comment": "AI Wrapper"
              },
              {
                "name": "ia_helpers.py",
                "type": "file"
              },
              {
                "name": "limiter.py",
                "type": "file"
              },
              {
                "name": "log_helpers.py",
                "type": "file"
              },
              {
                "name": "meta_helpers.py",
                "type": "file"
              },
              {
                "name": "meta_payloads.py",
                "type": "file"
              },
              {
                "name": "meta_permissions.py",
                "type": "file"
              },
              {
                "name": "meta_rate_limiter.py",
                "type": "file"
              },
              {
                "name": "meta_scopes_validator.py",
                "type": "file"
              },
              {
                "name": "metrics.py",
                "type": "file"
              },
              {
                "name": "paginacao.py",
                "type": "file"
              },
              {
                "name": "security.py",
                "type": "file"
              },
              {
                "name": "serialize.py",
                "type": "file"
              },
              {
                "name": "upload.py",
                "type": "file"
              }
            ]
          },
          {
            "name": "validators",
            "type": "folder",
            "children": [
              {
                "name": "__init__.py",
                "type": "file"
              },
              {
                "name": "campanha.py",
                "type": "file"
              },
              {
                "name": "contexto.py",
                "type": "file"
              },
              {
                "name": "ia.py",
                "type": "file"
              },
              {
                "name": "meta.py",
                "type": "file"
              }
            ]
          },
          {
            "name": "main.py",
            "type": "file",
            "comment": "Entry Point"
          }
        ]
      },
      {
        "name": "tests",
        "type": "folder",
        "children": [
          {
            "name": "__init__.py",
            "type": "file"
          },
          {
            "name": "conftest.py",
            "type": "file"
          },
          {
            "name": "ia",
            "type": "folder",
            "children": [
              {
                "name": "test_aprovar_campanha.py",
                "type": "file"
              },
              {
                "name": "test_avaliar_criativo.py",
                "type": "file"
              },
              {
                "name": "test_benchmark_concorrentes.py",
                "type": "file"
              },
              {
                "name": "test_editar_contexto.py",
                "type": "file"
              },
              {
                "name": "test_feedback_etapa.py",
                "type": "file"
              },
              {
                "name": "test_generate_copy.py",
                "type": "file"
              },
              {
                "name": "test_logs_banco.py",
                "type": "file"
              },
              {
                "name": "test_onboarding.py",
                "type": "file"
              },
              {
                "name": "test_status.py",
                "type": "file"
              },
              {
                "name": "test_sugerir_campanha.py",
                "type": "file"
              },
              {
                "name": "test_suporte_pixel.py",
                "type": "file"
              }
            ]
          },
          {
            "name": "meta",
            "type": "folder",
            "children": [
              {
                "name": "test_ads.py",
                "type": "file"
              },
              {
                "name": "test_adset.py",
                "type": "file"
              },
              {
                "name": "test_campaign.py",
                "type": "file"
              },
              {
                "name": "test_creative.py",
                "type": "file"
              },
              {
                "name": "test_export.py",
                "type": "file"
              },
              {
                "name": "test_insights.py",
                "type": "file"
              },
              {
                "name": "test_oauth.py",
                "type": "file"
              },
              {
                "name": "test_permissions.py",
                "type": "file"
              },
              {
                "name": "test_pixel.py",
                "type": "file"
              },
              {
                "name": "test_setup.py",
                "type": "file"
              },
              {
                "name": "test_webhook.py",
                "type": "file"
              }
            ]
          },
          {
            "name": "test_auth.py",
            "type": "file"
          },
          {
            "name": "test_campanha.py",
            "type": "file"
          },
          {
            "name": "test_criativo.py",
            "type": "file"
          },
          {
            "name": "test_dashboard.py",
            "type": "file"
          },
          {
            "name": "test_notificacao.py",
            "type": "file"
          },
          {
            "name": "test_usuario.py",
            "type": "file"
          },
          {
            "name": "test_utils.py",
            "type": "file"
          }
        ],
        "isOpen": false
      }
    ]
  },
  {
    "name": "frontend",
    "type": "folder",
    "isOpen": true,
    "children": [
      {
        "name": "src",
        "type": "folder",
        "isOpen": true,
        "children": [
          {
            "name": "api",
            "type": "folder",
            "children": [
              {
                "name": "auth.ts",
                "type": "file"
              },
              {
                "name": "campanha.ts",
                "type": "file"
              },
              {
                "name": "contexto.ts",
                "type": "file"
              },
              {
                "name": "criativo.ts",
                "type": "file"
              },
              {
                "name": "ia.ts",
                "type": "file"
              },
              {
                "name": "index.ts",
                "type": "file"
              },
              {
                "name": "indexNoCreds.ts",
                "type": "file"
              },
              {
                "name": "meta-permissions.ts",
                "type": "file"
              },
              {
                "name": "meta.ts",
                "type": "file"
              },
              {
                "name": "notificacao.ts",
                "type": "file"
              },
              {
                "name": "onboarding.ts",
                "type": "file"
              },
              {
                "name": "usuario.ts",
                "type": "file"
              }
            ]
          },
          {
            "name": "app",
            "type": "folder",
            "children": [
              {
                "name": "ajuda",
                "type": "folder",
                "children": [
                  {
                    "name": "page.tsx",
                    "type": "file"
                  }
                ]
              },
              {
                "name": "alertas",
                "type": "folder",
                "children": [
                  {
                    "name": "metadata.ts",
                    "type": "file"
                  },
                  {
                    "name": "page.tsx",
                    "type": "file"
                  }
                ]
              },
              {
                "name": "alterar-senha",
                "type": "folder",
                "children": [
                  {
                    "name": "page.tsx",
                    "type": "file"
                  }
                ]
              },
              {
                "name": "analise-landing",
                "type": "folder",
                "children": [
                  {
                    "name": "page.tsx",
                    "type": "file"
                  }
                ]
              },
              {
                "name": "api",
                "type": "folder",
                "children": [
                  {
                    "name": "client-log",
                    "type": "folder",
                    "children": [
                      {
                        "name": "route.ts",
                        "type": "file"
                      }
                    ]
                  }
                ]
              },
              {
                "name": "auth",
                "type": "folder",
                "children": [
                  {
                    "name": "page.tsx",
                    "type": "file"
                  }
                ]
              },
              {
                "name": "benchmarks",
                "type": "folder",
                "children": [
                  {
                    "name": "page.tsx",
                    "type": "file"
                  }
                ]
              },
              {
                "name": "cadastro",
                "type": "folder",
                "children": [
                  {
                    "name": "page.tsx",
                    "type": "file"
                  }
                ]
              },
              {
                "name": "campanhas",
                "type": "folder",
                "children": [
                  {
                    "name": "meta",
                    "type": "folder",
                    "children": [
                      {
                        "name": "[campanhaId]",
                        "type": "folder",
                        "children": [
                          {
                            "name": "adsets",
                            "type": "folder",
                            "children": [
                              {
                                "name": "[adsetId]",
                                "type": "folder",
                                "children": [
                                  {
                                    "name": "ads",
                                    "type": "folder",
                                    "children": [
                                      {
                                        "name": "[adId]",
                                        "type": "folder",
                                        "children": [
                                          {
                                            "name": "page.tsx",
                                            "type": "file"
                                          }
                                        ]
                                      },
                                      {
                                        "name": "page.tsx",
                                        "type": "file"
                                      }
                                    ]
                                  },
                                  {
                                    "name": "page.tsx",
                                    "type": "file"
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "name": "page.tsx",
                            "type": "file"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "name": "nova",
                    "type": "folder",
                    "children": [
                      {
                        "name": "page.tsx",
                        "type": "file"
                      }
                    ]
                  },
                  {
                    "name": "page_new.tsx",
                    "type": "file"
                  },
                  {
                    "name": "page_old.tsx",
                    "type": "file"
                  },
                  {
                    "name": "page.tsx",
                    "type": "file"
                  }
                ]
              },
              {
                "name": "chat-ia",
                "type": "folder",
                "children": [
                  {
                    "name": "page.tsx",
                    "type": "file"
                  }
                ]
              },
              {
                "name": "confirmar-excluir",
                "type": "folder",
                "children": [
                  {
                    "name": "page.tsx",
                    "type": "file"
                  }
                ]
              },
              {
                "name": "contexto",
                "type": "folder",
                "children": [
                  {
                    "name": "page.tsx",
                    "type": "file"
                  }
                ]
              },
              {
                "name": "cors-debug",
                "type": "folder",
                "children": [
                  {
                    "name": "page.tsx",
                    "type": "file"
                  }
                ]
              },
              {
                "name": "criacao-assistida",
                "type": "folder",
                "children": [
                  {
                    "name": "page.tsx",
                    "type": "file"
                  }
                ]
              },
              {
                "name": "criativos",
                "type": "folder",
                "children": [
                  {
                    "name": "nova",
                    "type": "folder",
                    "children": [
                      {
                        "name": "page.tsx",
                        "type": "file"
                      }
                    ]
                  },
                  {
                    "name": "page.tsx",
                    "type": "file"
                  }
                ]
              },
              {
                "name": "debug",
                "type": "folder",
                "children": [
                  {
                    "name": "page.tsx",
                    "type": "file"
                  }
                ]
              },
              {
                "name": "desconectar-meta",
                "type": "folder",
                "children": [
                  {
                    "name": "page.tsx",
                    "type": "file"
                  }
                ]
              },
              {
                "name": "diagnostico-ia",
                "type": "folder",
                "children": [
                  {
                    "name": "page.tsx",
                    "type": "file"
                  }
                ]
              },
              {
                "name": "faq",
                "type": "folder",
                "children": [
                  {
                    "name": "page.tsx",
                    "type": "file"
                  }
                ]
              },
              {
                "name": "home",
                "type": "folder",
                "children": [
                  {
                    "name": "page.tsx",
                    "type": "file"
                  }
                ]
              },
              {
                "name": "kpis",
                "type": "folder",
                "children": [
                  {
                    "name": "page.tsx",
                    "type": "file"
                  }
                ]
              },
              {
                "name": "login",
                "type": "folder",
                "children": [
                  {
                    "name": "page.tsx",
                    "type": "file"
                  }
                ]
              },
              {
                "name": "login-debug",
                "type": "folder",
                "children": [
                  {
                    "name": "page.tsx",
                    "type": "file"
                  }
                ]
              },
              {
                "name": "meta-callback",
                "type": "folder",
                "children": [
                  {
                    "name": "page.tsx",
                    "type": "file"
                  }
                ]
              },
              {
                "name": "meta-conectado",
                "type": "folder",
                "children": [
                  {
                    "name": "page.tsx",
                    "type": "file"
                  }
                ]
              },
              {
                "name": "meta-connect",
                "type": "folder",
                "children": [
                  {
                    "name": "page.tsx",
                    "type": "file"
                  }
                ]
              },
              {
                "name": "meta-test",
                "type": "folder",
                "children": [
                  {
                    "name": "page.tsx",
                    "type": "file"
                  }
                ]
              },
              {
                "name": "notificacoes",
                "type": "folder",
                "children": [
                  {
                    "name": "page.tsx",
                    "type": "file"
                  }
                ]
              },
              {
                "name": "onboarding",
                "type": "folder",
                "children": [
                  {
                    "name": "page.tsx",
                    "type": "file"
                  }
                ]
              },
              {
                "name": "perfil",
                "type": "folder",
                "children": [
                  {
                    "name": "page.tsx",
                    "type": "file"
                  }
                ]
              },
              {
                "name": "pixel",
                "type": "folder",
                "children": [
                  {
                    "name": "page.jsx",
                    "type": "file"
                  }
                ]
              },
              {
                "name": "recuperar-senha",
                "type": "folder",
                "children": [
                  {
                    "name": "page.tsx",
                    "type": "file"
                  }
                ]
              },
              {
                "name": "resumo-analitico",
                "type": "folder",
                "children": [
                  {
                    "name": "page.tsx",
                    "type": "file"
                  }
                ]
              },
              {
                "name": "settings",
                "type": "folder",
                "children": [
                  {
                    "name": "meta-permissions",
                    "type": "folder",
                    "children": [
                      {
                        "name": "page.tsx",
                        "type": "file"
                      }
                    ]
                  }
                ]
              },
              {
                "name": "simulacao",
                "type": "folder",
                "children": [
                  {
                    "name": "page.tsx",
                    "type": "file"
                  }
                ]
              },
              {
                "name": "sincronizacao",
                "type": "folder",
                "children": [
                  {
                    "name": "page.tsx",
                    "type": "file"
                  }
                ]
              },
              {
                "name": "upgrade-planos",
                "type": "folder",
                "children": [
                  {
                    "name": "page.tsx",
                    "type": "file"
                  }
                ]
              },
              {
                "name": "favicon.ico",
                "type": "file"
              },
              {
                "name": "layout.tsx",
                "type": "file"
              },
              {
                "name": "MainLayout.tsx",
                "type": "file"
              },
              {
                "name": "not-found.tsx",
                "type": "file"
              },
              {
                "name": "page.tsx",
                "type": "file"
              },
              {
                "name": "providers.tsx",
                "type": "file"
              }
            ]
          },
          {
            "name": "components",
            "type": "folder",
            "children": [
              {
                "name": "charts",
                "type": "folder",
                "children": [
                  {
                    "name": "BarChart.tsx",
                    "type": "file"
                  },
                  {
                    "name": "ChartWrapper.tsx",
                    "type": "file"
                  },
                  {
                    "name": "LineChart.tsx",
                    "type": "file"
                  }
                ]
              },
              {
                "name": "Meta",
                "type": "folder",
                "children": [
                  {
                    "name": "CampaignActionsGuard.tsx",
                    "type": "file"
                  },
                  {
                    "name": "MetaActionButton.tsx",
                    "type": "file"
                  },
                  {
                    "name": "MetaCapabilitiesBadge.tsx",
                    "type": "file"
                  },
                  {
                    "name": "MetaConnectionStatus.tsx",
                    "type": "file"
                  },
                  {
                    "name": "MetaPermissionsSettings.tsx",
                    "type": "file"
                  },
                  {
                    "name": "MetaPermissionValidator.tsx",
                    "type": "file"
                  }
                ]
              },
              {
                "name": "AuthInitializer.tsx",
                "type": "file"
              },
              {
                "name": "AuthLayout.tsx",
                "type": "file"
              },
              {
                "name": "Breadcrumb.tsx",
                "type": "file"
              },
              {
                "name": "Button.stories.tsx",
                "type": "file"
              },
              {
                "name": "Button.tsx",
                "type": "file"
              },
              {
                "name": "Card.tsx",
                "type": "file"
              },
              {
                "name": "DevUserSwitcher.tsx",
                "type": "file"
              },
              {
                "name": "FooterAuth.tsx",
                "type": "file"
              },
              {
                "name": "Loader.tsx",
                "type": "file"
              },
              {
                "name": "MetaConnection.tsx",
                "type": "file"
              },
              {
                "name": "Modal.tsx",
                "type": "file"
              },
              {
                "name": "OnboardingAviso.tsx",
                "type": "file"
              },
              {
                "name": "ReactQueryProvider.tsx",
                "type": "file"
              },
              {
                "name": "Sidebar.tsx",
                "type": "file"
              },
              {
                "name": "TopBar.tsx",
                "type": "file"
              },
              {
                "name": "UpgradePlan.tsx",
                "type": "file"
              }
            ]
          },
          {
            "name": "features",
            "type": "folder",
            "children": [
              {
                "name": "auth",
                "type": "folder",
                "children": [
                  {
                    "name": "CadastroForm.tsx",
                    "type": "file"
                  },
                  {
                    "name": "LoginFacebookButton.tsx",
                    "type": "file"
                  },
                  {
                    "name": "LoginForm.tsx",
                    "type": "file"
                  },
                  {
                    "name": "LoginGoogleButton.tsx",
                    "type": "file"
                  },
                  {
                    "name": "LoginPanel.tsx",
                    "type": "file"
                  }
                ]
              },
              {
                "name": "campanha",
                "type": "folder",
                "children": [
                  {
                    "name": "CampanhaActions.tsx",
                    "type": "file"
                  },
                  {
                    "name": "CampanhaDiagnostico.tsx",
                    "type": "file"
                  },
                  {
                    "name": "CampanhaForm.tsx",
                    "type": "file"
                  },
                  {
                    "name": "CampanhaList.tsx",
                    "type": "file"
                  },
                  {
                    "name": "CampanhaReport.tsx",
                    "type": "file"
                  },
                  {
                    "name": "CampanhaTable.tsx",
                    "type": "file"
                  }
                ]
              },
              {
                "name": "contexto",
                "type": "folder",
                "children": [
                  {
                    "name": "ContextoForm.tsx",
                    "type": "file"
                  },
                  {
                    "name": "ContextoPanel.tsx",
                    "type": "file"
                  },
                  {
                    "name": "ContextoWizard.tsx",
                    "type": "file"
                  }
                ]
              },
              {
                "name": "criativo",
                "type": "folder",
                "children": [
                  {
                    "name": "CriativoPreview.tsx",
                    "type": "file"
                  },
                  {
                    "name": "CriativoUpload.tsx",
                    "type": "file"
                  }
                ]
              },
              {
                "name": "dashboard",
                "type": "folder",
                "children": [
                  {
                    "name": "CampanhaTable.tsx",
                    "type": "file"
                  },
                  {
                    "name": "DashboardHeader.tsx",
                    "type": "file"
                  },
                  {
                    "name": "DashboardSidebar.tsx",
                    "type": "file"
                  },
                  {
                    "name": "MetricsPanel.tsx",
                    "type": "file"
                  },
                  {
                    "name": "ResumoCards.tsx",
                    "type": "file"
                  },
                  {
                    "name": "SupportQuickAccess.tsx",
                    "type": "file"
                  }
                ]
              },
              {
                "name": "ia",
                "type": "folder",
                "children": [
                  {
                    "name": "IAChat.tsx",
                    "type": "file"
                  },
                  {
                    "name": "IASuggestions.tsx",
                    "type": "file"
                  },
                  {
                    "name": "IASuggestionsPanel.tsx",
                    "type": "file"
                  }
                ]
              },
              {
                "name": "meta",
                "type": "folder",
                "children": [
                  {
                    "name": "AdCard.tsx",
                    "type": "file"
                  },
                  {
                    "name": "AdsetAdsList.tsx",
                    "type": "file"
                  },
                  {
                    "name": "AdsetCard.tsx",
                    "type": "file"
                  },
                  {
                    "name": "CampanhaMetaChart.tsx",
                    "type": "file"
                  },
                  {
                    "name": "CampanhaMetaKpiPanel.tsx",
                    "type": "file"
                  },
                  {
                    "name": "CampanhaTable.tsx",
                    "type": "file"
                  },
                  {
                    "name": "CardsAcoesIA.tsx",
                    "type": "file"
                  },
                  {
                    "name": "DashboardVitrine.tsx",
                    "type": "file"
                  },
                  {
                    "name": "FunilMetaKpiPanel.tsx",
                    "type": "file"
                  },
                  {
                    "name": "IAssistantPrompt.tsx",
                    "type": "file"
                  },
                  {
                    "name": "InsightsDashboard.tsx",
                    "type": "file"
                  },
                  {
                    "name": "KpiGraficoPlaceholder.tsx",
                    "type": "file"
                  },
                  {
                    "name": "MetaAuthButton.tsx",
                    "type": "file"
                  },
                  {
                    "name": "MetaConnectPrompt.tsx",
                    "type": "file"
                  },
                  {
                    "name": "MetaMetricsPanel.tsx",
                    "type": "file"
                  },
                  {
                    "name": "PixelSetupWizard.tsx",
                    "type": "file"
                  },
                  {
                    "name": "ResumoRapido.tsx",
                    "type": "file"
                  },
                  {
                    "name": "StatusContaMeta.tsx",
                    "type": "file"
                  }
                ]
              },
              {
                "name": "notificacao",
                "type": "folder",
                "children": [
                  {
                    "name": "NotificationList.tsx",
                    "type": "file"
                  },
                  {
                    "name": "NotificationSettings.tsx",
                    "type": "file"
                  }
                ]
              },
              {
                "name": "onboarding",
                "type": "folder",
                "children": [
                  {
                    "name": "OnboardingWizard.tsx",
                    "type": "file"
                  },
                  {
                    "name": "QuestionCard.tsx",
                    "type": "file"
                  }
                ]
              },
              {
                "name": "usuario",
                "type": "folder",
                "children": [
                  {
                    "name": "PlanInfo.tsx",
                    "type": "file"
                  },
                  {
                    "name": "ProfileForm.tsx",
                    "type": "file"
                  }
                ]
              }
            ]
          },
          {
            "name": "hooks",
            "type": "folder",
            "children": [
              {
                "name": "useApiErrorHandler.ts",
                "type": "file"
              },
              {
                "name": "useAuthGuard.ts",
                "type": "file"
              },
              {
                "name": "useCampanhaDashboard.ts",
                "type": "file"
              },
              {
                "name": "useDebounce.ts",
                "type": "file"
              },
              {
                "name": "useIASuggestions.ts",
                "type": "file"
              },
              {
                "name": "useMetaCapabilities.ts",
                "type": "file"
              },
              {
                "name": "useMetaErrorHandler.ts",
                "type": "file"
              },
              {
                "name": "useMetaMetrics.ts",
                "type": "file"
              },
              {
                "name": "useMetaOAuth.ts",
                "type": "file"
              },
              {
                "name": "useMetaPermissionValidation.ts",
                "type": "file"
              },
              {
                "name": "useOnboardingGuard.ts",
                "type": "file"
              },
              {
                "name": "useTheme.ts",
                "type": "file"
              },
              {
                "name": "useThemeProvider.tsx",
                "type": "file"
              },
              {
                "name": "useTokenSync.ts",
                "type": "file"
              },
              {
                "name": "useUserContext.ts",
                "type": "file"
              }
            ]
          },
          {
            "name": "mocks",
            "type": "folder",
            "children": [
              {
                "name": "alertas.ts",
                "type": "file"
              },
              {
                "name": "applyMockUser.ts",
                "type": "file"
              },
              {
                "name": "MockUserLoader.tsx",
                "type": "file"
              },
              {
                "name": "sync.ts",
                "type": "file"
              },
              {
                "name": "user.ts",
                "type": "file"
              }
            ]
          },
          {
            "name": "stores",
            "type": "folder",
            "children": [
              {
                "name": "authStore.ts",
                "type": "file"
              }
            ]
          },
          {
            "name": "styles",
            "type": "folder",
            "children": [
              {
                "name": "globals.css",
                "type": "file"
              }
            ]
          },
          {
            "name": "types",
            "type": "folder",
            "children": [
              {
                "name": "auth.ts",
                "type": "file"
              },
              {
                "name": "meta-permissions.ts",
                "type": "file"
              },
              {
                "name": "meta.ts",
                "type": "file"
              },
              {
                "name": "metaOAuth.ts",
                "type": "file"
              },
              {
                "name": "next.d.ts",
                "type": "file"
              }
            ]
          },
          {
            "name": "utils",
            "type": "folder",
            "children": [
              {
                "name": "clientLogger.ts",
                "type": "file"
              },
              {
                "name": "conectarMeta.ts",
                "type": "file"
              },
              {
                "name": "debugAuth.ts",
                "type": "file"
              },
              {
                "name": "metaDebugger.ts",
                "type": "file"
              },
              {
                "name": "metaLabels.ts",
                "type": "file"
              },
              {
                "name": "toast.ts",
                "type": "file"
              },
              {
                "name": "tokenRefresh.ts",
                "type": "file"
              },
              {
                "name": "tokenSync.ts",
                "type": "file"
              },
              {
                "name": "userDataSanitizer.ts",
                "type": "file"
              }
            ]
          }
        ]
      }
    ]
  }
];

const PROJECT_DATA = {
  id: "aisyad",
  links: {
    repo: "https://github.com/lipeamarok/projetox-backend",
    demo: null
  },
  media: {
    mainVideo: "/projects/aisyad/demo-AISYAD.mp4"
  },
  pt: {
    title: "AISYAD",
    subtitle: "Automação de Ads com Inteligência Artificial",
    description: "Plataforma SaaS Enterprise-grade para otimização de tráfego pago integrando Meta Ads API e OpenAI.",
    summary: "O AISYAD é uma plataforma SaaS desenvolvida para automatizar campanhas de tráfego pago via Meta Ads (Facebook/Instagram), permitindo que pequenos empreendedores criem, otimizem e gerenciem anúncios com apoio de inteligência artificial, diagnósticos automáticos e sugestões de melhoria em tempo real.",
    sections: [
      {
        title: "Arquitetura Global & Escalabilidade",
        content: [
          "O backend foi projetado desde o dia zero para ser global. Implementei uma camada de {i18n} nativa no Python (`app/i18n`), permitindo que todas as mensagens de erro, emails e notificações sejam servidas no idioma do usuário, facilitando a expansão para novos mercados.",
          "A estrutura segue **Clean Architecture**, isolando regras de negócio (`services/`) da persistência (`crud/`). Para garantir a qualidade, utilizei {decorator} customizados que padronizam logs e tratamento de exceções em toda a API."
        ]
      },
      {
        title: "Banco de Dados & DevOps",
        content: [
          "A integridade dos dados é crítica. Utilizo **PostgreSQL** com versionamento de schema via {alembic}, permitindo migrações seguras e rastreáveis em produção.",
          "Para garantir a estabilidade, implementei uma suíte de testes automatizados com {pytest}, cobrindo desde unidades isoladas até fluxos complexos de integração OAuth.",
          "A produtividade é acelerada por scripts de automação via **Makefile**, que padronizam comandos de setup, testes e deploy."
        ]
      },
      {
        title: "Inteligência Artificial Autônoma",
        content: [
          "A IA no AISYAD não é apenas um gerador de texto. Ela atua como um agente autônomo capaz de entender o contexto do negócio do usuário, armazenar insights no banco e orquestrar ações reais na Meta Ads.",
          "Através da abstração {iaclient}, o sistema pode criar campanhas, gerar criativos otimizados, configurar Pixels e analisar métricas de desempenho, sugerindo e aplicando correções automaticamente."
        ]
      },
      {
        title: "Segurança & Integração Meta",
        content: [
          "A segurança é robusta, com fluxo completo de {oauth} para acesso à conta de anúncios do usuário. Implementei um {middleware} de Rate Limit inteligente que protege a aplicação de bloqueios da API do Facebook.",
          "O sistema gerencia tokens com renovação automática e sincroniza permissões granulares em background, garantindo acesso contínuo sem intervenção manual."
        ]
      }
    ]
  },
  en: {
    title: "AISYAD",
    subtitle: "AI-Powered Ads Automation",
    description: "Enterprise-grade SaaS platform for paid traffic optimization integrating Meta Ads API and OpenAI.",
    summary: "AISYAD is a SaaS platform developed to automate paid traffic campaigns via Meta Ads (Facebook/Instagram), allowing small business owners to create, optimize, and manage ads with the support of artificial intelligence, automatic diagnostics, and real-time improvement suggestions.",
    sections: [
      {
        title: "Global Architecture & Scalability",
        content: [
          "The backend was designed from day one to be global. I implemented a native {i18n} layer in Python (`app/i18n`), allowing all error messages, emails, and notifications to be served in the user's language, facilitating expansion to new markets.",
          "The structure follows **Clean Architecture**, isolating business rules (`services/`) from persistence (`crud/`). To ensure quality, I used custom {decorator} that standardize logs and exception handling across the API."
        ]
      },
      {
        title: "Database & DevOps",
        content: [
          "Data integrity is critical. I use **PostgreSQL** with schema versioning via {alembic}, allowing safe and traceable migrations in production.",
          "To ensure stability, I implemented an automated test suite with {pytest}, covering everything from isolated units to complex OAuth integration flows.",
          "Productivity is accelerated by automation scripts via **Makefile**, which standardize setup, testing, and deploy commands."
        ]
      },
      {
        title: "Autonomous Artificial Intelligence",
        content: [
          "AI in AISYAD is not just a text generator. It acts as an autonomous agent capable of understanding the user's business context, storing insights in the database, and orchestrating real actions on Meta Ads.",
          "Through the {iaclient} abstraction, the system can create campaigns, generate optimized creatives, configure Pixels, and analyze performance metrics, suggesting and applying corrections automatically."
        ]
      },
      {
        title: "Security & Meta Integration",
        content: [
          "Security is robust, with a full {oauth} flow for accessing the user's ad account. I implemented an intelligent Rate Limit {middleware} that protects the application from Facebook API blocks.",
          "The system manages tokens with automatic renewal and synchronizes granular permissions in the background, ensuring continuous access without manual intervention."
        ]
      }
    ]
  }
};

// --- Components ---

const TechTooltip = ({ term, mediaKey }) => {
  const [isHovered, setIsHovered] = useState(false);
  const media = MEDIA_ASSETS[mediaKey];

  if (!media) {
    return <span className="font-bold text-gray-200">{term}</span>;
  }

  return (
    <span
      className="relative inline-block font-bold text-[#5B9FE3] cursor-help border-b border-[#5B9FE3]/30 hover:border-[#5B9FE3] transition-colors"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {term}
      <AnimatePresence>
        {isHovered && media && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 z-50 w-[600px] bg-[#1a1a1c] border border-white/10 rounded-xl shadow-2xl overflow-hidden pointer-events-none"
          >
            <div className="relative aspect-video bg-black/50 flex items-center justify-center border-b border-white/5">
              <div className="absolute inset-0 flex items-center justify-center text-gray-500 text-xs font-mono">
                {media.type === 'image' ? '[ Code Snippet / Preview ]' : '[ Media ]'}
              </div>
              {media.type === 'image' && (
                <img
                  src={media.src}
                  alt={media.alt}
                  className="w-full h-full object-cover relative z-10"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              )}
              {media.type === 'video' && (
                <video
                  src={media.src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover relative z-10"
                />
              )}
            </div>
            <div className="p-3 bg-[#151517]">
              <p className="text-xs text-gray-400 text-center font-medium">{media.alt}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </span>
  );
};

const RichText = ({ content }) => {
  const parts = content.split(/(\{.*?\})/g);

  return (
    <p className="text-gray-300 leading-relaxed mb-4 text-lg">
      {parts.map((part, index) => {
        if (part.startsWith("{") && part.endsWith("}")) {
          const key = part.slice(1, -1);
          const labels = {
            fastapi: "FastAPI",
            alembic: "Alembic",
            oauth: "OAuth2",
            zustand: "Zustand",
            render: "Render",
            middleware: "Middleware",
            decorator: "Decorators",
            iaclient: "AI Client Wrapper",
            pytest: "Pytest",
            i18n: "i18n System"
          };
          return <TechTooltip key={index} term={labels[key] || key} mediaKey={key} />;
        }

        const subParts = part.split(/(\*\*.*?\*\*)/g);
        return (
          <span key={index}>
            {subParts.map((subPart, subIndex) => {
              if (subPart.startsWith("**") && subPart.endsWith("**")) {
                return <strong key={subIndex} className="text-white font-bold">{subPart.slice(2, -2)}</strong>;
              }
              return subPart;
            })}
          </span>
        );
      })}
    </p>
  );
};

const FileTreeNode = ({ item, depth = 0 }) => {
  const [isOpen, setIsOpen] = useState(item.isOpen !== undefined ? item.isOpen : depth < 1);
  const isFolder = item.type === 'folder';

  return (
    <div className="font-mono text-xs md:text-sm leading-relaxed select-none">
      <div
        className={`flex items-center gap-2 py-1 hover:bg-white/5 rounded px-2 cursor-pointer transition-colors ${depth > 0 ? 'ml-4' : ''}`}
        onClick={() => isFolder && setIsOpen(!isOpen)}
      >
        <span className="text-gray-500 min-w-[16px]">
          {isFolder ? (isOpen ? <FaFolderOpen className="text-[#5B9FE3]" /> : <FaFolder />) : <FaFileCode />}
        </span>
        <span className={`${isFolder ? 'text-gray-200 font-bold' : 'text-gray-400'}`}>
          {item.name}
        </span>
        {item.comment && (
          <span className="text-gray-600 italic ml-2 text-[10px] md:text-xs hidden sm:inline"># {item.comment}</span>
        )}
      </div>
      <AnimatePresence>
        {isFolder && isOpen && item.children && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-l border-white/10 ml-3 pl-1 overflow-hidden"
          >
            {item.children.map((child, i) => (
              <FileTreeNode key={i} item={child} depth={depth + 1} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FileTree = () => (
  <div className="rounded-xl overflow-hidden border border-white/10 bg-[#0e0e10] shadow-inner">
    <div className="bg-[#1a1a1c] px-4 py-3 border-b border-white/5 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <FaFolderOpen className="text-gray-500 text-sm" />
        <span className="text-xs font-mono text-gray-400">project-structure</span>
      </div>
      <div className="flex gap-1.5">
        <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
        <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
      </div>
    </div>
    <div className="p-4 overflow-x-auto max-h-[500px] overflow-y-auto custom-scrollbar">
      {PROJECT_STRUCTURE_DATA.map((item, i) => (
        <FileTreeNode key={i} item={item} />
      ))}
    </div>
  </div>
);

function AisyadPage() {
  const router = useRouter();
  const [lang, setLang] = useState('pt');
  const content = PROJECT_DATA[lang];

  const toggleLang = () => setLang(prev => prev === 'pt' ? 'en' : 'pt');

  return (
    <main className="min-h-screen bg-[#0e0e10] text-gray-200 selection:bg-[#5B9FE3]/30">

      {/* Navigation Header */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-[#0e0e10]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition-colors"
          >
            <FaArrowLeft />
            {lang === 'pt' ? 'Voltar' : 'Back'}
          </button>

          <button
            onClick={toggleLang}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/5 transition-all text-xs font-medium text-gray-300"
          >
            <FaGlobeAmericas className="text-[#5B9FE3]" />
            <span className={lang === 'pt' ? 'text-white' : 'text-gray-500'}>PT</span>
            <span className="text-gray-600">|</span>
            <span className={lang === 'en' ? 'text-white' : 'text-gray-500'}>EN</span>
          </button>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-6 pt-32 pb-20">

        {/* Hero Section */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-500 mb-6 tracking-tight">
              {content.title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-10 font-light">
              {content.subtitle}
            </p>

            {/* Tech Badges */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {[
                { icon: SiFastapi, label: "FastAPI", color: "text-[#009688]" },
                { icon: FaPython, label: "Python 3.11", color: "text-[#3776AB]" },
                { icon: SiPostgresql, label: "PostgreSQL", color: "text-[#336791]" },
                { icon: SiDocker, label: "Docker", color: "text-[#2496ED]" },
                { icon: SiPytest, label: "Pytest", color: "text-[#0A9EDC]" },
              ].map((tech, i) => (
                <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/5 hover:bg-white/10 transition-colors cursor-default">
                  <tech.icon className={`text-lg ${tech.color}`} />
                  <span className="text-sm font-medium text-gray-300">{tech.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Demo Video Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="relative rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-[#151517] max-w-4xl mx-auto"
          >
            <div className="absolute top-0 left-0 right-0 h-8 bg-[#1a1a1c] border-b border-white/5 flex items-center px-4 gap-2 z-10">
              <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
              <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
              <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
            </div>
            <div className="pt-8">
              <video
                src={PROJECT_DATA.media.mainVideo}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

          {/* Left Column: Narrative */}
          <div className="lg:col-span-7 space-y-20">

            {/* Project Summary */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-8 h-[2px] bg-[#5B9FE3]"></span>
                {lang === 'pt' ? 'Sobre o Projeto' : 'About the Project'}
              </h2>
              <p className="text-gray-300 leading-relaxed text-lg">
                {content.summary}
              </p>
            </motion.section>

            {content.sections.map((section, idx) => (
              <motion.section
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="w-8 h-[2px] bg-[#5B9FE3]"></span>
                  {section.title}
                </h2>
                <div className="space-y-6">
                  {section.content.map((paragraph, pIdx) => (
                    <RichText key={pIdx} content={paragraph} />
                  ))}
                </div>
              </motion.section>
            ))}
          </div>

          {/* Right Column: Structure & Details */}
          <div className="lg:col-span-5 space-y-10">

            {/* Project Structure Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                {lang === 'pt' ? 'Estrutura do Projeto' : 'Project Structure'}
              </h3>
              <FileTree />
              <p className="text-xs text-gray-500 mt-3 italic">
                {lang === 'pt'
                  ? '* Estrutura real do backend (repositório privado)'
                  : '* Actual backend structure (private repository)'}
              </p>
            </motion.div>

            {/* Info Card */}
            <div className="p-8 rounded-2xl bg-white/5 border border-white/5 sticky top-24">
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-6">
                {lang === 'pt' ? 'Ficha Técnica' : 'Technical Sheet'}
              </h3>

              <div className="space-y-8">
                <div>
                  <div className="text-xs text-gray-500 mb-1 uppercase tracking-wide">Role</div>
                  <div className="font-medium text-white text-lg">Fullstack Engineer</div>
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-1 uppercase tracking-wide">Architecture</div>
                  <div className="font-medium text-white text-lg">Microservices / Modular Monolith</div>
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-1 uppercase tracking-wide">Key Techs</div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {['FastAPI', 'SQLAlchemy', 'Alembic', 'Next.js', 'Zustand', 'Pytest'].map(tag => (
                      <span key={tag} className="text-xs px-3 py-1.5 rounded-md bg-white/10 text-gray-200 border border-white/5 font-mono">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-8 border-t border-white/5">
                  <div className="flex items-center justify-center gap-3 w-full py-4 rounded-xl bg-white/5 text-gray-400 border border-white/5 cursor-not-allowed">
                    <FaLock className="text-sm" />
                    <span className="font-medium">Private Repository</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </main>
  );
}

export default AisyadPage;
