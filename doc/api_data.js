define({ "api": [
  {
    "type": "post",
    "url": "/referral",
    "title": "To add referral address.",
    "name": "addReferral",
    "group": "Referral",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "clientAddress",
            "description": "<p>Address of client.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "referralId",
            "description": "<p>Referral ID which is valid.</p>"
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
            "field": "ClientAddressAlreadyExists",
            "description": "<p>Provided address already exists</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ReferralIdNotExists",
            "description": "<p>Provided referral ID not exists</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "ClientAddressAlreadyExists-Response:",
          "content": "{\n  success: false,\n  message: 'Client address is already exists.'\n}",
          "type": "json"
        },
        {
          "title": "ReferralIdNotExists-Response:",
          "content": "{\n  success: false,\n  message: 'Referral ID is not exist.'\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response: ",
          "content": "{\n  success: true,\n  message: 'Referral ID added successfully.'\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/controllers/referral.controller.js",
    "groupTitle": "Referral"
  },
  {
    "type": "post",
    "url": "/referral/claim",
    "title": "To claim referral bonus.",
    "name": "claimBonus",
    "group": "Referral",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>Address of client.</p>"
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
            "field": "NoAddressExists",
            "description": "<p>No one used this client as referral</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BonusAlreadyClaimed",
            "description": "<p>Provided address already claimed for bonus</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PaymentTxNotFound",
            "description": "<p>Provided address not made first payment yet.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "NoAddressExists-Response:",
          "content": "{\n  success: false,\n  message: 'No address exists.'\n}",
          "type": "json"
        },
        {
          "title": "BonusAlreadyClaimed-Response:",
          "content": "{\n  success: false,\n  message: 'Bonus already claimed.'\n}",
          "type": "json"
        },
        {
          "title": "PaymentTxNotFound-Response:",
          "content": "{\n  success: false,\n  message: 'Payment tx hash not found.'\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response:",
          "content": "{\n  success: true,\n  message: 'Bonus claimed successfully.'\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/controllers/referral.controller.js",
    "groupTitle": "Referral"
  },
  {
    "type": "get",
    "url": "/referral/info",
    "title": "To get referral information.",
    "name": "getReferralInfo",
    "group": "Referral",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>Address of client.</p>"
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
            "field": "NoAddressExists",
            "description": "<p>No address exists.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "NoAddressExists-Response:",
          "content": "{\n  success: false,\n  message: 'No address exists.'\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "isClaimed",
            "description": "<p>Status of claim</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "joinBonus",
            "description": "<p>Referral amount earned</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "referral",
            "description": "<p>Information about referral earnings.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response:",
          "content": "{\n  success: true,\n  isClaimed: true,\n  joinBonus: 20000000000,\n  referral: {\n      count: 4,\n      amount: 40000000000\n  }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/controllers/referral.controller.js",
    "groupTitle": "Referral"
  }
] });
