import type { Schema, Struct } from '@strapi/strapi';

export interface FixturesMatchEvent extends Struct.ComponentSchema {
  collectionName: 'components_fixtures_match_events';
  info: {
    displayName: 'match_event';
    icon: 'shirt';
  };
  attributes: {
    details: Schema.Attribute.Text;
    minute: Schema.Attribute.Integer;
    player: Schema.Attribute.Relation<'oneToMany', 'api::player.player'>;
    team: Schema.Attribute.Relation<'oneToMany', 'api::team.team'>;
    type: Schema.Attribute.Enumeration<
      [
        'goal',
        'own_goal',
        'penalty',
        'penalty_goal',
        'penalty_missed',
        'penalty_saved',
        'yellow_card',
        'second_yellow_card',
        'red_card',
        'substitution',
        'assist',
        'var_review',
        'injury',
        'disallowed_goal',
        'start',
        'half-time',
        'full-time',
      ]
    >;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'fixtures.match-event': FixturesMatchEvent;
    }
  }
}
