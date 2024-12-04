package main

import (
	"backend/database"
	"backend/routes"
	"log"

	"github.com/joho/godotenv"
)

func main() {
    // Load environment variables from .env file
    err := godotenv.Load()
    if err != nil {
        log.Fatalf("Error loading .env file")
    }
    
    // Initialize the database
    database.Init()

    // Create a default Gin router
    router := routes.SetupRouter()

    // Run the server on port 8080
    router.Run(":8080")
}