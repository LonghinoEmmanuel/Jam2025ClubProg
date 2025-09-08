/**
 * By Repeat.
 * A package deal with R-selection-actions.js.
 * NOTE: Any references to a unitId refers to the unit's DATABASE ID.
 * Be sure to go to Tools > Options > Data and check 'Display id next to data name' to see these numbers.
 *  */

var SpeechControl = {

    resetUses: function () {
        var players = PlayerList.getAliveList();
        for (var i = 0; i < players.getCount(); i++) {
            players.getData(i).custom.speechUsed = false;
        }
    },

    resetSingleUnit: function (unitId) {
        var players = PlayerList.getAliveList();
        for (var i = 0; i < players.getCount(); i++) {
            var player = players.getData(i);
            if (player.getId() !== unitId) {
                continue;
            }
            player.custom.speechUsed = false;
        }
    },

    setSpeech: function (message, unitId, pos) {
        var players = PlayerList.getAliveList();
        for (var i = 0; i < players.getCount(); i++) {
            var player = players.getData(i);
            if (player.getId() !== unitId) {
                continue;
            }
            player.custom.selectSpeech = { message: '', pos: 0 };
            player.custom.selectSpeech.message = message;
            player.custom.selectSpeech.pos = pos;
        }
    },

    setRandomSpeech: function (messages, unit, pos) {
        if (!messages || messages.length === 0) {
            return;
        }
        var index = Math.floor(Math.random() * messages.length);
        var selectedMessage = messages[index];
        SpeechControl.setSpeech(selectedMessage, unit.getId(), pos);
    },

    setSpeechUsed: function (unit) {
        unit.custom.speechUsed = true;
    },

    isSpeechUsed: function (unit) {
        return unit.custom.speechUsed;
    }
};

