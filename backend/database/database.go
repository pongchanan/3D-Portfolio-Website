package database

import (
	"backend/config"
	"backend/models"
	"log"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

var DB *gorm.DB

func Init() {
    cfg := config.LoadConfig()
    dsn := cfg.GetDSN()

    var err error
    DB, err = gorm.Open(postgres.Open(dsn), &gorm.Config{})
    if err != nil {
        log.Fatalf("failed to connect to database: %v", err)
    }

    // Add UUID extension
    DB.Exec("CREATE EXTENSION IF NOT EXISTS \"uuid-ossp\"")

    // Auto-migrate the models
    DB.AutoMigrate(&models.Project{})
}