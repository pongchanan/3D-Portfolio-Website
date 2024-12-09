package main

import (
	"backend/database"
	"backend/routes"
)

func main() {
    // Initialize the database
    database.Init()

    // Create a default Gin router
    router := routes.SetupRouter()

    // Run the server on port 8080
    router.Run(":8080")
}