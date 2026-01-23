-- Enable RLS on all tables
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE solutions ENABLE ROW LEVEL SECURITY;
ALTER TABLE case_studies ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE client_accounts ENABLE ROW LEVEL SECURITY;
ALTER TABLE client_projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE project_updates ENABLE ROW LEVEL SECURITY;
ALTER TABLE team_members ENABLE ROW LEVEL SECURITY;
ALTER TABLE analytics_events ENABLE ROW LEVEL SECURITY;
ALTER TABLE page_content ENABLE ROW LEVEL SECURITY;

-- Solutions: Public read
CREATE POLICY "Solutions public read" ON solutions FOR SELECT USING (is_active = TRUE);

-- Case Studies: Public read published
CREATE POLICY "Case studies public read" ON case_studies FOR SELECT USING (is_published = TRUE);

-- Blog Posts: Public read published
CREATE POLICY "Blog posts public read" ON blog_posts FOR SELECT USING (is_published = TRUE);

-- Client Accounts: Own view
CREATE POLICY "Client accounts own view" ON client_accounts FOR SELECT USING (user_id = auth.uid());

-- Leads: Authenticated access
CREATE POLICY "Leads authenticated access" ON leads FOR SELECT USING (auth.uid() IS NOT NULL);

-- Team Members: Own view
CREATE POLICY "Team members own view" ON team_members FOR SELECT USING (user_id = auth.uid());

-- Page Content: Public read
CREATE POLICY "Page content public read" ON page_content FOR SELECT USING (is_published = TRUE);

-- Project Updates: Authenticated access
CREATE POLICY "Project updates authenticated access" ON project_updates FOR SELECT USING (auth.uid() IS NOT NULL);

-- Analytics Events: Authenticated access
CREATE POLICY "Analytics events insert" ON analytics_events FOR INSERT WITH CHECK (auth.uid() IS NOT NULL);

-- Client Projects: Authenticated access
CREATE POLICY "Client projects authenticated" ON client_projects FOR SELECT USING (auth.uid() IS NOT NULL);
