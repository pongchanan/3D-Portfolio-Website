package routes

import (
	"backend/controllers"

	"github.com/gin-gonic/gin"
)

func SetupRouter() *gin.Engine {
	router := gin.Default()

	router.GET("project/thumbnail", controllers.GetProjects)
	router.GET("project/:id", controllers.GetProjects)

	return router
}