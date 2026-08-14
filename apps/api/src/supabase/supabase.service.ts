import { Injectable } from '@nestjs/common';
import { createClient, type SupabaseClient } from '@supabase/supabase-js';
import { Resource } from 'sst';

@Injectable()
export class SupabaseService {
  public readonly client: SupabaseClient;

  constructor() {
    this.client = createClient(
      Resource.SupabaseUrl.value,
      Resource.SupabaseSecretKey.value,
      {
        auth: {
          autoRefreshToken: false,
          persistSession: false,
        },
      },
    );
  }
}
