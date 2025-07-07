export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instanciate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.3 (519615d)"
  }
  public: {
    Tables: {
      profiles: {
        Row: {
          adaptability: string | null
          age_range: string | null
          agreed_to_privacy: boolean
          agreed_to_terms: boolean
          ai_frameworks: string[] | null
          ai_understanding: string | null
          cloud_platforms: string[] | null
          collaboration_preference: string | null
          communication_style: string | null
          conflict_resolution: string | null
          created_at: string
          current_industry: string | null
          databases: string[] | null
          device_models: string | null
          devices_owned: string[] | null
          discord_username: string | null
          entrepreneurial_experience: boolean | null
          feedback_preference: string | null
          frameworks_libraries: string[] | null
          full_name: string
          gender: string | null
          gpt_models_used: string[] | null
          id: string
          interests_hobbies: string | null
          job_title: string | null
          linkedin_profile: string | null
          location_city: string | null
          location_country: string | null
          motivations: string[] | null
          native_languages: string[] | null
          operating_systems: string[] | null
          perspective_ai: string | null
          perspective_ai_agents: string | null
          problem_solving: string | null
          profile_completed: boolean | null
          programming_languages: string[] | null
          programming_proficiency: string | null
          race_ethnicity: string[] | null
          recent_ai_tools: string | null
          software_practices: string[] | null
          testimonial_consent: boolean | null
          time_zone: string | null
          twitter_username: string | null
          updated_at: string
          user_id: string
          version_control_git: boolean | null
          work_pace: string | null
          years_experience: string | null
        }
        Insert: {
          adaptability?: string | null
          age_range?: string | null
          agreed_to_privacy?: boolean
          agreed_to_terms?: boolean
          ai_frameworks?: string[] | null
          ai_understanding?: string | null
          cloud_platforms?: string[] | null
          collaboration_preference?: string | null
          communication_style?: string | null
          conflict_resolution?: string | null
          created_at?: string
          current_industry?: string | null
          databases?: string[] | null
          device_models?: string | null
          devices_owned?: string[] | null
          discord_username?: string | null
          entrepreneurial_experience?: boolean | null
          feedback_preference?: string | null
          frameworks_libraries?: string[] | null
          full_name: string
          gender?: string | null
          gpt_models_used?: string[] | null
          id?: string
          interests_hobbies?: string | null
          job_title?: string | null
          linkedin_profile?: string | null
          location_city?: string | null
          location_country?: string | null
          motivations?: string[] | null
          native_languages?: string[] | null
          operating_systems?: string[] | null
          perspective_ai?: string | null
          perspective_ai_agents?: string | null
          problem_solving?: string | null
          profile_completed?: boolean | null
          programming_languages?: string[] | null
          programming_proficiency?: string | null
          race_ethnicity?: string[] | null
          recent_ai_tools?: string | null
          software_practices?: string[] | null
          testimonial_consent?: boolean | null
          time_zone?: string | null
          twitter_username?: string | null
          updated_at?: string
          user_id: string
          version_control_git?: boolean | null
          work_pace?: string | null
          years_experience?: string | null
        }
        Update: {
          adaptability?: string | null
          age_range?: string | null
          agreed_to_privacy?: boolean
          agreed_to_terms?: boolean
          ai_frameworks?: string[] | null
          ai_understanding?: string | null
          cloud_platforms?: string[] | null
          collaboration_preference?: string | null
          communication_style?: string | null
          conflict_resolution?: string | null
          created_at?: string
          current_industry?: string | null
          databases?: string[] | null
          device_models?: string | null
          devices_owned?: string[] | null
          discord_username?: string | null
          entrepreneurial_experience?: boolean | null
          feedback_preference?: string | null
          frameworks_libraries?: string[] | null
          full_name?: string
          gender?: string | null
          gpt_models_used?: string[] | null
          id?: string
          interests_hobbies?: string | null
          job_title?: string | null
          linkedin_profile?: string | null
          location_city?: string | null
          location_country?: string | null
          motivations?: string[] | null
          native_languages?: string[] | null
          operating_systems?: string[] | null
          perspective_ai?: string | null
          perspective_ai_agents?: string | null
          problem_solving?: string | null
          profile_completed?: boolean | null
          programming_languages?: string[] | null
          programming_proficiency?: string | null
          race_ethnicity?: string[] | null
          recent_ai_tools?: string | null
          software_practices?: string[] | null
          testimonial_consent?: boolean | null
          time_zone?: string | null
          twitter_username?: string | null
          updated_at?: string
          user_id?: string
          version_control_git?: boolean | null
          work_pace?: string | null
          years_experience?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
