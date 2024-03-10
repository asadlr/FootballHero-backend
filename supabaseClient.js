const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://xdzepwgrzealmgdmfigl.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhkemVwd2dyemVhbG1nZG1maWdsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc1NzA5NzAsImV4cCI6MjAyMzE0Njk3MH0.BQ5t4N_1CFCsSAfimbXL8Qui-qlW7cbRDFFQWBUfQmk';
const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = supabase;
