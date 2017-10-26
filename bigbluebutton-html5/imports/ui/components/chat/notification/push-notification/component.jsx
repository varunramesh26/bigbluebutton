import React from 'react';
import _ from 'lodash';
import injectNotify from '/imports/ui/components/toast/inject-notify/component';
import { defineMessages, injectIntl } from 'react-intl';

const intlMessages = defineMessages({
  appToastChatSigular: {
    id: 'app.toast.chat.singular',
    description: 'when entry a message',
  },
  appToastChatPlural: {
    id: 'app.toast.chat.plural',
    description: 'when entry various message',
  },
});

class ChatPushNotification extends React.Component {
  constructor(props) {
    super(props);
    this.showNotify = _.debounce(this.showNotify.bind(this), 1000);

    this.componentDidMount = this.showNotify;
    this.componentDidUpdate = this.showNotify;
  }

  showNotify() {
    const {
      intl,
      count,
      name,
      notify,
      onOpen,
    } = this.props;

    const message = intl.formatMessage(
      count > 1 ?
      intlMessages.appToastChatPlural :
      intlMessages.appToastChatSigular, {
        0: count,
        1: name });

    return notify(message, 'info', 'chat', { onOpen });
  }

  render() {
    return null;
  }
}

export default injectIntl(injectNotify(ChatPushNotification));
