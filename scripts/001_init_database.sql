-- =============================================================================
-- 7LAYERS ENTERPRISE DATABASE SCHEMA
-- =============================================================================

-- Enable required extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- =============================================================================
-- 1. LEADS & CONTACT MANAGEMENT
-- =============================================================================

CREATE TABLE leads (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  phone VARCHAR(20),
  company VARCHAR(255),
  industry VARCHAR(100),
  message TEXT,
  source VARCHAR(50) DEFAULT 'contact-form',
  status VARCHAR(50) DEFAULT 'new',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  assigned_to UUID
);

CREATE INDEX idx_leads_email ON leads(email);
CREATE INDEX idx_leads_status ON leads(status);
CREATE INDEX idx_leads_created_at ON leads(created_at DESC);

-- =============================================================================
-- 2. SOLUTIONS CATALOG
-- =============================================================================

CREATE TABLE solutions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  slug VARCHAR(100) UNIQUE NOT NULL,
  title VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  long_description TEXT,
  icon_name VARCHAR(50),
  featured_image_url VARCHAR(500),
  order_index INT DEFAULT 0,
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_solutions_slug ON solutions(slug);
CREATE INDEX idx_solutions_active ON solutions(is_active);

-- =============================================================================
-- 3. CASE STUDIES & PROJECTS
-- =============================================================================

CREATE TABLE case_studies (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  slug VARCHAR(100) UNIQUE NOT NULL,
  title VARCHAR(255) NOT NULL,
  subtitle VARCHAR(255),
  client_name VARCHAR(255) NOT NULL,
  industry VARCHAR(100),
  description TEXT NOT NULL,
  challenge TEXT,
  solution TEXT,
  results TEXT,
  metrics JSONB,
  featured_image_url VARCHAR(500),
  gallery_images JSONB,
  related_solutions UUID[] DEFAULT '{}',
  featured BOOLEAN DEFAULT FALSE,
  is_published BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_case_studies_slug ON case_studies(slug);
CREATE INDEX idx_case_studies_published ON case_studies(is_published);
CREATE INDEX idx_case_studies_featured ON case_studies(featured);

-- =============================================================================
-- 4. BLOG & INSIGHTS
-- =============================================================================

CREATE TABLE blog_posts (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  slug VARCHAR(100) UNIQUE NOT NULL,
  title VARCHAR(255) NOT NULL,
  excerpt TEXT,
  content TEXT NOT NULL,
  featured_image_url VARCHAR(500),
  author_id UUID,
  category VARCHAR(100),
  tags VARCHAR(500)[],
  is_published BOOLEAN DEFAULT FALSE,
  published_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_blog_posts_slug ON blog_posts(slug);
CREATE INDEX idx_blog_posts_published ON blog_posts(is_published);
CREATE INDEX idx_blog_posts_published_at ON blog_posts(published_at DESC);
CREATE INDEX idx_blog_posts_category ON blog_posts(category);

-- =============================================================================
-- 5. CLIENT PORTAL & AUTHENTICATION
-- =============================================================================

CREATE TABLE client_accounts (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL UNIQUE,
  company_name VARCHAR(255) NOT NULL,
  industry VARCHAR(100),
  company_website VARCHAR(500),
  logo_url VARCHAR(500),
  subscription_tier VARCHAR(50) DEFAULT 'free',
  subscription_status VARCHAR(50) DEFAULT 'active',
  contract_signed_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_client_accounts_user_id ON client_accounts(user_id);
CREATE INDEX idx_client_accounts_tier ON client_accounts(subscription_tier);

-- =============================================================================
-- 6. CLIENT PROJECTS (Assigned to clients)
-- =============================================================================

CREATE TABLE client_projects (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  client_id UUID NOT NULL,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  status VARCHAR(50) DEFAULT 'active',
  start_date DATE,
  end_date DATE,
  budget DECIMAL(15, 2),
  assigned_team_member_id UUID,
  solution_ids UUID[] DEFAULT '{}',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_client_projects_client_id ON client_projects(client_id);
CREATE INDEX idx_client_projects_status ON client_projects(status);

-- =============================================================================
-- 7. PROJECT UPDATES & COMMUNICATIONS
-- =============================================================================

CREATE TABLE project_updates (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  project_id UUID NOT NULL,
  title VARCHAR(255) NOT NULL,
  content TEXT NOT NULL,
  update_type VARCHAR(50) DEFAULT 'general',
  visibility VARCHAR(50) DEFAULT 'client',
  created_by_id UUID,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_project_updates_project_id ON project_updates(project_id);
CREATE INDEX idx_project_updates_created_at ON project_updates(created_at DESC);

-- =============================================================================
-- 8. TEAM & ADMIN MANAGEMENT
-- =============================================================================

CREATE TABLE team_members (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL UNIQUE,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  role VARCHAR(50) NOT NULL,
  department VARCHAR(100),
  avatar_url VARCHAR(500),
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_team_members_user_id ON team_members(user_id);
CREATE INDEX idx_team_members_role ON team_members(role);
CREATE INDEX idx_team_members_active ON team_members(is_active);

-- =============================================================================
-- 9. ANALYTICS & USAGE TRACKING
-- =============================================================================

CREATE TABLE analytics_events (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  event_type VARCHAR(100) NOT NULL,
  user_id UUID,
  session_id VARCHAR(255),
  page_path VARCHAR(500),
  metadata JSONB,
  user_agent VARCHAR(500),
  ip_address VARCHAR(45),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_analytics_events_event_type ON analytics_events(event_type);
CREATE INDEX idx_analytics_events_user_id ON analytics_events(user_id);
CREATE INDEX idx_analytics_events_created_at ON analytics_events(created_at DESC);

-- =============================================================================
-- 10. CONTENT MANAGEMENT
-- =============================================================================

CREATE TABLE page_content (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  page_slug VARCHAR(100) UNIQUE NOT NULL,
  section_key VARCHAR(100),
  content JSONB NOT NULL,
  is_published BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_page_content_slug ON page_content(page_slug);

-- =============================================================================
-- UPDATE TRIGGERS
-- =============================================================================

CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language plpgsql;

CREATE TRIGGER update_leads_updated_at BEFORE UPDATE ON leads FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_solutions_updated_at BEFORE UPDATE ON solutions FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_case_studies_updated_at BEFORE UPDATE ON case_studies FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_blog_posts_updated_at BEFORE UPDATE ON blog_posts FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_client_accounts_updated_at BEFORE UPDATE ON client_accounts FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_client_projects_updated_at BEFORE UPDATE ON client_projects FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_team_members_updated_at BEFORE UPDATE ON team_members FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_page_content_updated_at BEFORE UPDATE ON page_content FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
