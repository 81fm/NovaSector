// THIS IS A NOVA SECTOR UI FILE
import { CheckboxInput, FeatureToggle } from '../../base';

export const emote_panel: FeatureToggle = {
  name: 'Emote panel',
  category: 'CHAT',
  description: 'Toggles Emote panel (requires reconnect if in-game to apply)',
  component: CheckboxInput,
};
