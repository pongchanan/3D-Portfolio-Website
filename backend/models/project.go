package models

import (
	"github.com/google/uuid"
	"gorm.io/gorm"
)

type MinProject struct {
	ID          uuid.UUID `json:"id" gorm:"type:uuid;primaryKey;default:uuid_generate_v4()"`
	Title       string    `json:"title"`
	Description string    `json:"description"`
}

type Project struct {
	ID          uuid.UUID `json:"id" gorm:"type:uuid;primaryKey;default:uuid_generate_v4()"`
	Title       string    `json:"title"`
	Description string    `json:"description"`
	ImageBytes  []byte    `json:"image_bytes"`
	GithubURL   string    `json:"github_url"`
	WebsiteURL  string    `json:"website_url"`
}

func (project *Project) BeforeCreate(tx *gorm.DB) (err error) {
	project.ID = uuid.New()
	return
}