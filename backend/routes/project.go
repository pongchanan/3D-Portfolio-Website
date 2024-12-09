package routes

import (
	"backend/controllers"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func SetupRouter() *gin.Engine {
	router := gin.Default()

	router.Use(cors.Default())

	router.GET("project/thumbnail", controllers.GetProjectsThumbnail)
	router.GET("project/:id", controllers.GetIndividualProject)
	router.POST("project", controllers.CreateProject)
	router.PUT("project/:id", controllers.UpdateProject)
	router.DELETE("project/:id", controllers.DeleteProject)

	return router
}