package core

type CloudflareDlpError struct {
	IsCloudflareDlpError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewCloudflareDlpError(code string, msg string, ctx *Context) *CloudflareDlpError {
	return &CloudflareDlpError{
		IsCloudflareDlpError: true,
		Sdk:              "CloudflareDlp",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *CloudflareDlpError) Error() string {
	return e.Msg
}
