module.exports = {
    "prompts": {
        "name": {
            "type": "string",
            "required": false,
            "message": "项目名称",
            "default": "react-project"
        },
        "author": {
            "type": "string",
            "message": "项目作者"
        },
        "version": {
            "type": "string",
            "message": "项目版本",
            "default": "0.0.1"
        },
        "description": {
            "type": "string",
            "required": false,
            "message": "项目描述",
            "default": "A new React project"
        },
        "port": {
            "type": "string",
            "required": false,
            "message": "默认端口号",
            "default": 3000
        },
        "react-version": {
            "type": "string",
            "required": false,
            "message": "react版本",
            "default": '^16.3.2'
        },
        "async": {
            type: 'confirm',
            message: '是否使用async/await',
        },
        "decorators": {
            type: 'confirm',
            message: '是否使用装饰器',
        },
    },
    "filters": {
        "src/redux/**/*": "state === 'redux'",
        "src/mobx/**/*": "state === 'mobx'"
    },
    "completeMessage": "To get started:\n\n  cd {{destDirName}}\n  npm install\n  npm run dll\n  npm run dev\n\nDocumentation can be found at https://github.com/dwqs/react-startup"
}