package controllers

import (
	"backend/database"
	"backend/models"
	"bytes"
	"net/http"

	"github.com/gin-gonic/gin"
)

func GetProjectsThumbnail(c *gin.Context) {
	var projects []models.MinProject

	if err := database.DB.Model(&models.Project{}).Find(&projects).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, projects)
}

func GetIndividualProject(c *gin.Context) {
	var project models.Project

	id := c.Param("id")
	if err := database.DB.Where("id = ?", id).First(&project).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Record not found!"})
		return
	}

	c.JSON(http.StatusOK, project)
}

func CreateProject(c *gin.Context) {
    var project models.Project

    // Parse form data
    project.Title = c.PostForm("title")
    project.Description = c.PostForm("description")
    project.GithubURL = c.PostForm("github_url")
    project.WebsiteURL = c.PostForm("website_url")

    // Handle file upload
    file, err := c.FormFile("image")
    if err != nil {
        c.JSON(http.StatusBadRequest, gin.H{"error": "Image file is required"})
        return
    }

    // Read file content
    fileContent, err := file.Open()
    if err != nil {
        c.JSON(http.StatusInternalServerError, gin.H{"error": "Unable to read image file"})
        return
    }
    defer fileContent.Close()

    buf := bytes.NewBuffer(nil)
    if _, err := buf.ReadFrom(fileContent); err != nil {
        c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
        return
    }

    project.ImageBytes = buf.Bytes()

    // Save project to database
    if err := database.DB.Create(&project).Error; err != nil {
        c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
        return
    }

    c.JSON(http.StatusCreated, project)
}

func UpdateProject(c *gin.Context) {
	var project models.Project

	id := c.Param("id")
	if err := database.DB.Where("id = ?", id).First(&project).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Record not found!"})
		return
	}

	// Parse form data
	project.Title = c.PostForm("title")
	project.Description = c.PostForm("description")
	project.GithubURL = c.PostForm("github_url")
	project.WebsiteURL = c.PostForm("website_url")

	// Handle file upload
	file, err := c.FormFile("image")
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Image file is required"})
		return
	}
	
	// Read file content
	fileContent, err := file.Open()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Unable to read image file"})
		return
	}
	defer fileContent.Close()

	buf := bytes.NewBuffer(nil)
	if _, err := buf.ReadFrom(fileContent); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	project.ImageBytes = buf.Bytes()

	// Save project to database
	if err := database.DB.Save(&project).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, project)

}

func DeleteProject(c *gin.Context) {
	var project models.Project

	id := c.Param("id")
	if err := database.DB.Where("id = ?", id).First(&project).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Record not found!"})
		return
	}

	if err := database.DB.Delete(&project).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": "Project deleted successfully"})
}