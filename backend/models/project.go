package models

import (
	"github.com/google/uuid"
	"gorm.io/gorm"
)

type Project struct {
	ID          uuid.UUID `json:"id" gorm:"type:uuid;default:uuid_generate_v4();primary_key"`
	Title       string    `json:"title"`
	Description string    `json:"description"`
	Image       []byte    `json:"image"`
	GithubURL   string    `json:"github_url"`
	WebsiteURL  string    `json:"website_url"`
}

func (project *Project) BeforeCreate(tx *gorm.DB) (err error) {
	project.ID = uuid.New()
	return
}