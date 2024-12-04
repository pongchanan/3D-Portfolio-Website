package config

import (
	"fmt"
	"os"
)

type Config struct {
    DBHost     string
    DBPort     string
    DBUser     string
    DBPassword string
    DBName     string
}

func LoadConfig() Config {
    return Config{
        DBHost:     os.Getenv("DB_HOST"),
        DBPort:     os.Getenv("DB_PORT"),
        DBUser:     os.Getenv("DB_USER"),
        DBPassword: os.Getenv("DB_PASSWORD"),
        DBName:     os.Getenv("DB_NAME"),
    }
}

func (c Config) GetDSN() string {
    return fmt.Sprintf("host=%s port=%s user=%s dbname=%s password=%s sslmode=disable",
        c.DBHost, c.DBPort, c.DBUser, c.DBName, c.DBPassword)
}