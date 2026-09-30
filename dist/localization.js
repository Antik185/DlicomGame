(function () {
  const languages = Object.freeze([
    { code: "en", label: "English", short: "EN" },
    { code: "ru", label: "Русский", short: "RU" },
    { code: "uk", label: "Українська", short: "UK" },
    { code: "hi", label: "हिन्दी", short: "HI" },
    { code: "bn", label: "বাংলা", short: "BN" },
    { code: "ar", label: "العربية", short: "AR" },
    { code: "id", label: "Indonesia", short: "ID" },
    { code: "zh", label: "中文", short: "ZH" },
    { code: "vi", label: "Tiếng Việt", short: "VI" }
  ]);

  const en = {
    language: "LANGUAGE", chooseLanguage: "Choose interface language",
    rotateEyebrow: "DLICOM COMMUNITY · MOBILE TERMINAL", rotateTitle: "Rotate to continue", rotateText: "Turn your phone or tablet sideways to start the shift.", rotateHint: "Landscape mode keeps the mascot and controls visible.",
    chat: "CHAT", rules: "RULES", decide: "DECIDE", closePanel: "Close mobile panel",
    evidenceSelected: "EVIDENCE SELECTED", accountRecord: "ACCOUNT RECORD", tapMascot: "TAP MASCOT TO CONNECT", tapRule: "TAP THE MATCHING RULE",
    safety: "Safety", trust: "Trust", activity: "Activity", builders: "Builders", artists: "Artists", clipmakers: "Clipmakers", supporters: "Supporters", members: "Members",
    general: "general", admins: "admins", communityLobby: "Community lobby · live", staffNotices: "Staff notices · read only", messageChannel: "Message #{channel}", chatOn: "CHAT ON", chatMuted: "CHAT MUTED",
    lobbyAccess: "LOBBY ACCESS", dlicomCommunity: "DLICOM COMMUNITY", case: "CASE", clickQuestion: "CLICK TO QUESTION", ask: "ASK", close: "CLOSE", you: "YOU", questionBan: "QUESTION THE BAN?", askAdmins: "ASK #ADMINS", glass: "GLASS // REINFORCED", mic: "MIC // OPEN",
    displayName: "Display name", username: "Username", requestedRole: "Requested role", accountCreated: "Account created", phoneNumber: "Phone number", xTwitter: "X (Twitter)", shortBio: "Short bio", notProvided: "Not provided",
    roleBuilder: "Builder", roleArtist: "Artist", roleClipmaker: "Clipmaker", roleSupporter: "Supporter", roleMember: "Member", roleAdmin: "Admin", roleModerator: "Moderator",
    search: "Search", onServer: "on server", device: "Device", check: "check", account: "Account", details: "details", phone: "Phone", lookup: "lookup", xProfile: "X profile", recentPosts: "recent posts",
    modTerminal: "MOD TERMINAL", serverSearch: "SERVER SEARCH", accountDetails: "ACCOUNT DETAILS", phoneLookup: "PHONE LOOKUP", deviceCheck: "DEVICE CHECK", usernameReady: "USERNAME READY // PRESS SEARCH", typeUsername: "type username", searchAction: "SEARCH", xReady: "X HANDLE READY // PRESS OPEN", typeHandle: "type handle", openAction: "OPEN", profileLookup: "PROFILE LOOKUP", enterHandle: "Enter the handle shown on the applicant card.", noQuery: "NO QUERY", noQueryHint: "Use the name on the applicant card, or search any claimed inviter.",
    shift: "SHIFT", soundOn: "SOUND ON", soundOff: "SOUND OFF", volume: "VOL", shiftRules: "SHIFT RULES", memo: "MEMO {current}/{total}",
    ruleAge: "Account must be at least {days} days old.", rulePhone: "Phone verification is required.", ruleBans: "Old bans still count.", rulePhoneLimit: "A verified phone may be linked to no more than {count} accounts.", ruleBuilderPhoneLimit: "Builders may use a verified phone for up to {count} accounts.", ruleRoleProof: "Builders, Artists and Clipmakers need recent public proof of their role.", ruleDlicomPost: "Role applicants need a recent X post mentioning Dlicom or the jam.", checkAdmins: "Check #admins for rule changes during the shift.",
    decision: "DECISION", checkRecords: "CHECK THE RECORDS", letIn: "LET IN", grantAccess: "GRANT ACCESS", reject: "REJECT", denyEntry: "DENY ENTRY", shortcut: "A LET IN · R REJECT",
    denyAccess: "DENY ACCESS", chooseReason: "Choose a reason", onlyEvidence: "Only evidence you discovered during this inspection is available.", noDocumentedReason: "No documented reason", rejectUnsupported: "Reject without supporting evidence",
    startEyebrow: "DLICOM COMMUNITY · ACCESS CONTROL", night: "NIGHT", shiftWord: "SHIFT", startText: "Read the staff channel, inspect each applicant, and make the call before sunrise.", queue: "QUEUE", visitors: "{count} VISITORS", firstStep: "FIRST STEP", readAdmins: "READ #ADMINS", applicantPool: "APPLICANT POOL", chooseRegion: "Choose a region", loadingRoster: "Loading real member roster…", allServer: "All server", play: "PLAY", training: "TRAINING", headphones: "Headphones optional · keyboard friendly",
    rosterUnavailable: "Regional roster unavailable · General archive will be used", realMembers: "{count} real members · random all-server queue", regionalMembers: "{count} regional members · All server fills the queue if needed", poolExhausted: "{region} POOL EXHAUSTED // ALL SERVER BACKUP",
    regionArabic: "Arabic", regionBangladesh: "Bangladesh", regionChina: "China", regionIndia: "India", regionIndonesia: "Indonesia", regionNigeria: "Nigeria", regionRussia: "Russia", regionUkraine: "Ukraine", regionVietnam: "Vietnam",
    trainingAdmin: "TRAINING ADMIN", next: "NEXT", reading: "READING…", skipTraining: "SKIP TRAINING", trainingSession: "TRAINING SESSION", skipQuestion: "Skip training?", progressCleared: "Your tutorial progress will be cleared.", cancel: "CANCEL", skip: "SKIP",
    tutorialComplete: "TUTORIAL SHIFT · COMPLETE", trainingComplete: "TRAINING COMPLETE", youKnow: "You know how to:", checkAccounts: "Check accounts", verifyPhones: "Verify phones", searchImpersonators: "Search for impersonators", inspectX: "Inspect X profiles", investigateBans: "Investigate previous bans", checkDevices: "Check linked devices", followRules: "Follow changing rules", protectHealth: "Protect community health", monitorGeneral: "Monitor General chat", sendAdmin: "Send cases to Admin", returnReady: "Return to the menu when you are ready for the real shift.", returnMenu: "RETURN TO MAIN MENU",
    shiftComplete: "SHIFT COMPLETE", shiftFailed: "SHIFT FAILED", moderatorScore: "MODERATOR SCORE", survived: "The server made it through the night.", correctCalls: "CORRECT CALLS", mistakes: "MISTAKES", scammersStopped: "SCAMMERS STOPPED", impostorsCaught: "IMPOSTORS CAUGHT", falseRejects: "FALSE REJECTS", incidentsResolved: "INCIDENTS RESOLVED", runAnother: "RUN ANOTHER SHIFT",
    copied: "COPIED", copyFailed: "COPY FAILED // TRY AGAIN", evidencePicked: "EVIDENCE SELECTED // CHOOSE A TARGET", noConnection: "NO CONNECTION", connectionQuestion: "CONNECTION FOUND // QUESTION UNLOCKED", connectionEvidence: "CONNECTION FOUND // EVIDENCE LOGGED", newQuestion: "NEW QUESTION UNLOCKED", evidenceLogged: "EVIDENCE ALREADY LOGGED",
    incidentActive: "INCIDENT ACTIVE", scamSpreading: "SCAM SPREADING", memberAffected: "MEMBER AFFECTED", communityDamage: "COMMUNITY DAMAGE", messageDeleted: "MESSAGE DELETED", incidentContained: "INCIDENT CONTAINED", accessGranted: "ACCESS GRANTED", entryDenied: "ENTRY DENIED",
    firstTimeBio: "Here for the Dlicom community night shift.", bioBuilder: "I build small games and tools. Here for the jam.", bioArtist: "I draw creatures, environments and game art.", bioClipmaker: "I make short clips for games and launches.", bioMember: "Here to hang out with the Dlicom community.", bioAdmin: "Dlicom staff account. Working the late shift.", bioModerator: "Community moderation and lobby support."
  };

  const packs = {
    en,
    ru: {
      language:"ЯЗЫК",chooseLanguage:"Выберите язык интерфейса",rotateEyebrow:"СООБЩЕСТВО DLICOM · МОБИЛЬНЫЙ ТЕРМИНАЛ",rotateTitle:"Поверните устройство",rotateText:"Поверните телефон или планшет горизонтально, чтобы начать смену.",rotateHint:"В альбомном режиме маскот и управление остаются видимыми.",chat:"ЧАТ",rules:"ПРАВИЛА",decide:"РЕШЕНИЕ",closePanel:"Закрыть панель",evidenceSelected:"УЛИКА ВЫБРАНА",accountRecord:"ДАННЫЕ АККАУНТА",tapMascot:"НАЖМИТЕ НА МАСКОТА ДЛЯ СВЯЗИ",tapRule:"НАЖМИТЕ НА ПОДХОДЯЩЕЕ ПРАВИЛО",safety:"Безопасность",trust:"Доверие",activity:"Активность",builders:"Разработчики",artists:"Художники",clipmakers:"Клипмейкеры",supporters:"Помощники",members:"Участники",communityLobby:"Общий чат · онлайн",staffNotices:"Сообщения команды · только чтение",messageChannel:"Сообщение #{channel}",chatOn:"ЧАТ ВКЛ",chatMuted:"ЧАТ БЕЗ ЗВУКА",lobbyAccess:"ДОСТУП В ЛОББИ",dlicomCommunity:"СООБЩЕСТВО DLICOM",case:"ДЕЛО",clickQuestion:"НАЖМИТЕ, ЧТОБЫ СПРОСИТЬ",ask:"СПРОСИТЬ",close:"ЗАКРЫТЬ",you:"ВЫ",questionBan:"СПРОСИТЬ О БАНЕ?",askAdmins:"СПРОСИТЬ #ADMINS",glass:"СТЕКЛО // УСИЛЕННОЕ",mic:"МИКРОФОН // ОТКРЫТ",displayName:"Отображаемое имя",username:"Имя пользователя",requestedRole:"Запрошенная роль",accountCreated:"Аккаунт создан",phoneNumber:"Номер телефона",xTwitter:"X (Twitter)",shortBio:"Краткое описание",notProvided:"Не указано",roleBuilder:"Разработчик",roleArtist:"Художник",roleClipmaker:"Клипмейкер",roleSupporter:"Помощник",roleMember:"Участник",roleAdmin:"Администратор",roleModerator:"Модератор",search:"Поиск",onServer:"на сервере",device:"Устройство",check:"проверка",account:"Аккаунт",details:"данные",phone:"Телефон",lookup:"проверка",xProfile:"Профиль X",recentPosts:"последние посты",modTerminal:"ТЕРМИНАЛ МОДЕРАТОРА",serverSearch:"ПОИСК НА СЕРВЕРЕ",accountDetails:"ДАННЫЕ АККАУНТА",phoneLookup:"ПРОВЕРКА ТЕЛЕФОНА",deviceCheck:"ПРОВЕРКА УСТРОЙСТВА",usernameReady:"ИМЯ ВВЕДЕНО // НАЖМИТЕ ПОИСК",typeUsername:"введите имя",searchAction:"НАЙТИ",xReady:"НИК X ВВЕДЁН // НАЖМИТЕ ОТКРЫТЬ",typeHandle:"введите ник",openAction:"ОТКРЫТЬ",profileLookup:"ПОИСК ПРОФИЛЯ",enterHandle:"Введите ник, указанный в карточке участника.",noQuery:"НЕТ ЗАПРОСА",noQueryHint:"Используйте имя из карточки или найдите указанного пригласившего.",shift:"СМЕНА",soundOn:"ЗВУК ВКЛ",soundOff:"ЗВУК ВЫКЛ",volume:"ГРОМКОСТЬ",shiftRules:"ПРАВИЛА СМЕНЫ",memo:"ПАМЯТКА {current}/{total}",ruleAge:"Аккаунту должно быть не менее {days} дней.",rulePhone:"Требуется подтверждение телефона.",ruleBans:"Старые баны всё ещё учитываются.",rulePhoneLimit:"К подтверждённому телефону можно привязать не более {count} аккаунтов.",ruleBuilderPhoneLimit:"Разработчики могут использовать подтверждённый телефон для {count} аккаунтов.",ruleRoleProof:"Разработчикам, художникам и клипмейкерам нужны свежие публичные доказательства роли.",ruleDlicomPost:"Кандидату на роль нужен свежий пост в X с упоминанием Dlicom или джема.",checkAdmins:"Проверяйте #admins: правила могут меняться во время смены.",decision:"РЕШЕНИЕ",checkRecords:"ПРОВЕРЬТЕ ДАННЫЕ",letIn:"ВПУСТИТЬ",grantAccess:"РАЗРЕШИТЬ ДОСТУП",reject:"ОТКЛОНИТЬ",denyEntry:"ОТКАЗАТЬ ВО ВХОДЕ",shortcut:"A ВПУСТИТЬ · R ОТКЛОНИТЬ",denyAccess:"ОТКАЗ В ДОСТУПЕ",chooseReason:"Выберите причину",onlyEvidence:"Доступны только причины, которые вы доказали во время проверки.",noDocumentedReason:"Нет подтверждённой причины",rejectUnsupported:"Отклонить без доказательств",startEyebrow:"СООБЩЕСТВО DLICOM · КОНТРОЛЬ ДОСТУПА",night:"НОЧНАЯ",shiftWord:"СМЕНА",startText:"Читайте канал команды, проверяйте каждого кандидата и принимайте решения до рассвета.",queue:"ОЧЕРЕДЬ",visitors:"{count} ПОСЕТИТЕЛЕЙ",firstStep:"ПЕРВЫЙ ШАГ",readAdmins:"ПРОЧИТАТЬ #ADMINS",applicantPool:"ПУЛ КАНДИДАТОВ",chooseRegion:"Выберите регион",loadingRoster:"Загружаем список реальных участников…",allServer:"Весь сервер",play:"ИГРАТЬ",training:"ОБУЧЕНИЕ",headphones:"Наушники необязательны · можно играть с клавиатуры",rosterUnavailable:"Региональный список недоступен · используем архив General",realMembers:"{count} реальных участников · случайная очередь со всего сервера",regionalMembers:"{count} участников региона · при нехватке очередь дополнится со всего сервера",poolExhausted:"{region}: ПУЛ ЗАКОНЧИЛСЯ // РЕЗЕРВ СО ВСЕГО СЕРВЕРА",regionArabic:"Арабский",regionBangladesh:"Бангладеш",regionChina:"Китай",regionIndia:"Индия",regionIndonesia:"Индонезия",regionNigeria:"Нигерия",regionRussia:"Россия",regionUkraine:"Украина",regionVietnam:"Вьетнам",trainingAdmin:"АДМИН ОБУЧЕНИЯ",next:"ДАЛЕЕ",reading:"ЧТЕНИЕ…",skipTraining:"ПРОПУСТИТЬ ОБУЧЕНИЕ",trainingSession:"ОБУЧАЮЩАЯ СМЕНА",skipQuestion:"Пропустить обучение?",progressCleared:"Прогресс обучения будет сброшен.",cancel:"ОТМЕНА",skip:"ПРОПУСТИТЬ",tutorialComplete:"ОБУЧАЮЩАЯ СМЕНА · ЗАВЕРШЕНА",trainingComplete:"ОБУЧЕНИЕ ЗАВЕРШЕНО",youKnow:"Теперь вы умеете:",checkAccounts:"Проверять аккаунты",verifyPhones:"Проверять телефоны",searchImpersonators:"Искать двойников",inspectX:"Изучать профили X",investigateBans:"Проверять прошлые баны",checkDevices:"Проверять связанные устройства",followRules:"Следить за изменениями правил",protectHealth:"Защищать показатели сообщества",monitorGeneral:"Следить за чатом General",sendAdmin:"Передавать дела администратору",returnReady:"Вернитесь в меню, когда будете готовы к настоящей смене.",returnMenu:"ВЕРНУТЬСЯ В ГЛАВНОЕ МЕНЮ",shiftComplete:"СМЕНА ЗАВЕРШЕНА",shiftFailed:"СМЕНА ПРОВАЛЕНА",moderatorScore:"СЧЁТ МОДЕРАТОРА",survived:"Сервер пережил эту ночь.",correctCalls:"ВЕРНЫЕ РЕШЕНИЯ",mistakes:"ОШИБКИ",scammersStopped:"СКАМЕРОВ ОСТАНОВЛЕНО",impostorsCaught:"ДВОЙНИКОВ ПОЙМАНО",falseRejects:"ЛОЖНЫЕ ОТКАЗЫ",incidentsResolved:"ИНЦИДЕНТОВ УСТРАНЕНО",runAnother:"НАЧАТЬ НОВУЮ СМЕНУ",copied:"СКОПИРОВАНО",copyFailed:"НЕ УДАЛОСЬ СКОПИРОВАТЬ",evidencePicked:"УЛИКА ВЫБРАНА // ВЫБЕРИТЕ ЦЕЛЬ",noConnection:"НЕТ СВЯЗИ",connectionQuestion:"СВЯЗЬ НАЙДЕНА // ОТКРЫТ НОВЫЙ ВОПРОС",connectionEvidence:"СВЯЗЬ НАЙДЕНА // УЛИКА ЗАПИСАНА",newQuestion:"ОТКРЫТ НОВЫЙ ВОПРОС",evidenceLogged:"УЛИКА УЖЕ ЗАПИСАНА",incidentActive:"ИНЦИДЕНТ НАЧАЛСЯ",scamSpreading:"СКАМ РАСПРОСТРАНЯЕТСЯ",memberAffected:"УЧАСТНИК ПОСТРАДАЛ",communityDamage:"СООБЩЕСТВО ПОСТРАДАЛО",messageDeleted:"СООБЩЕНИЕ УДАЛЕНО",incidentContained:"ИНЦИДЕНТ УСТРАНЁН",accessGranted:"ДОСТУП РАЗРЕШЁН",entryDenied:"ВХОД ОТКЛОНЁН",firstTimeBio:"На ночной смене сообщества Dlicom.",bioBuilder:"Создаю небольшие игры и инструменты. Я здесь ради джема.",bioArtist:"Рисую существ, окружение и игровую графику.",bioClipmaker:"Делаю короткие ролики об играх и запусках.",bioMember:"Хочу общаться с сообществом Dlicom.",bioAdmin:"Сотрудник Dlicom на ночной смене.",bioModerator:"Модерация сообщества и помощь в лобби."
    },
    uk: {
      language:"МОВА",chooseLanguage:"Оберіть мову інтерфейсу",rotateTitle:"Поверніть пристрій",rotateText:"Поверніть телефон або планшет горизонтально, щоб почати зміну.",rotateHint:"В альбомному режимі маскот і керування залишаються видимими.",chat:"ЧАТ",rules:"ПРАВИЛА",decide:"РІШЕННЯ",evidenceSelected:"ДОКАЗ ОБРАНО",accountRecord:"ДАНІ АКАУНТА",tapMascot:"НАТИСНІТЬ НА МАСКОТА ДЛЯ ЗВ'ЯЗКУ",tapRule:"НАТИСНІТЬ НА ВІДПОВІДНЕ ПРАВИЛО",safety:"Безпека",trust:"Довіра",activity:"Активність",builders:"Розробники",artists:"Художники",clipmakers:"Кліпмейкери",supporters:"Помічники",members:"Учасники",communityLobby:"Загальний чат · наживо",staffNotices:"Повідомлення команди · лише читання",messageChannel:"Повідомлення #{channel}",chatOn:"ЧАТ УВІМК",chatMuted:"ЧАТ БЕЗ ЗВУКУ",lobbyAccess:"ДОСТУП ДО ЛОБІ",case:"СПРАВА",clickQuestion:"НАТИСНІТЬ, ЩОБ ЗАПИТАТИ",ask:"ЗАПИТАТИ",close:"ЗАКРИТИ",you:"ВИ",displayName:"Відображуване ім'я",username:"Ім'я користувача",requestedRole:"Запитана роль",accountCreated:"Акаунт створено",phoneNumber:"Номер телефону",shortBio:"Короткий опис",notProvided:"Не вказано",roleBuilder:"Розробник",roleArtist:"Художник",roleClipmaker:"Кліпмейкер",roleSupporter:"Помічник",roleMember:"Учасник",roleAdmin:"Адміністратор",roleModerator:"Модератор",search:"Пошук",onServer:"на сервері",device:"Пристрій",check:"перевірка",account:"Акаунт",details:"дані",phone:"Телефон",lookup:"перевірка",xProfile:"Профіль X",recentPosts:"останні дописи",modTerminal:"ТЕРМІНАЛ МОДЕРАТОРА",serverSearch:"ПОШУК НА СЕРВЕРІ",accountDetails:"ДАНІ АКАУНТА",phoneLookup:"ПЕРЕВІРКА ТЕЛЕФОНУ",deviceCheck:"ПЕРЕВІРКА ПРИСТРОЮ",usernameReady:"ІМ'Я ВВЕДЕНО // НАТИСНІТЬ ПОШУК",typeUsername:"введіть ім'я",searchAction:"ЗНАЙТИ",xReady:"НІК X ВВЕДЕНО // НАТИСНІТЬ ВІДКРИТИ",typeHandle:"введіть нік",openAction:"ВІДКРИТИ",shift:"ЗМІНА",soundOn:"ЗВУК УВІМК",soundOff:"ЗВУК ВИМК",volume:"ГУЧНІСТЬ",shiftRules:"ПРАВИЛА ЗМІНИ",memo:"ПАМ'ЯТКА {current}/{total}",ruleAge:"Акаунту має бути щонайменше {days} днів.",rulePhone:"Потрібне підтвердження телефону.",ruleBans:"Старі бани все ще враховуються.",checkAdmins:"Перевіряйте #admins: правила можуть змінюватися під час зміни.",decision:"РІШЕННЯ",checkRecords:"ПЕРЕВІРТЕ ДАНІ",letIn:"ВПУСТИТИ",grantAccess:"НАДАТИ ДОСТУП",reject:"ВІДХИЛИТИ",denyEntry:"ВІДМОВИТИ У ВХОДІ",denyAccess:"ВІДМОВА У ДОСТУПІ",chooseReason:"Оберіть причину",onlyEvidence:"Доступні лише причини, які ви довели під час перевірки.",noDocumentedReason:"Немає підтвердженої причини",rejectUnsupported:"Відхилити без доказів",startEyebrow:"СПІЛЬНОТА DLICOM · КОНТРОЛЬ ДОСТУПУ",night:"НІЧНА",shiftWord:"ЗМІНА",startText:"Читайте канал команди, перевіряйте кожного кандидата й ухвалюйте рішення до світанку.",queue:"ЧЕРГА",visitors:"{count} ВІДВІДУВАЧІВ",firstStep:"ПЕРШИЙ КРОК",readAdmins:"ПРОЧИТАТИ #ADMINS",applicantPool:"ПУЛ КАНДИДАТІВ",chooseRegion:"Оберіть регіон",loadingRoster:"Завантажуємо список реальних учасників…",allServer:"Увесь сервер",play:"ГРАТИ",training:"НАВЧАННЯ",headphones:"Навушники необов'язкові · можна грати з клавіатури",rosterUnavailable:"Регіональний список недоступний · використаємо архів General",realMembers:"{count} реальних учасників · випадкова черга з усього сервера",regionalMembers:"{count} учасників регіону · за потреби черга доповниться з усього сервера",trainingAdmin:"АДМІН НАВЧАННЯ",next:"ДАЛІ",reading:"ЧИТАННЯ…",skipTraining:"ПРОПУСТИТИ НАВЧАННЯ",skipQuestion:"Пропустити навчання?",progressCleared:"Прогрес навчання буде очищено.",cancel:"СКАСУВАТИ",skip:"ПРОПУСТИТИ",tutorialComplete:"НАВЧАЛЬНА ЗМІНА · ЗАВЕРШЕНА",trainingComplete:"НАВЧАННЯ ЗАВЕРШЕНО",youKnow:"Тепер ви вмієте:",checkAccounts:"Перевіряти акаунти",verifyPhones:"Перевіряти телефони",searchImpersonators:"Шукати двійників",inspectX:"Перевіряти профілі X",investigateBans:"Досліджувати попередні бани",checkDevices:"Перевіряти пов'язані пристрої",followRules:"Стежити за змінами правил",protectHealth:"Захищати стан спільноти",monitorGeneral:"Стежити за чатом General",sendAdmin:"Передавати справи адміну",returnReady:"Поверніться до меню, коли будете готові до справжньої зміни.",returnMenu:"ПОВЕРНУТИСЯ ДО ГОЛОВНОГО МЕНЮ",shiftComplete:"ЗМІНУ ЗАВЕРШЕНО",shiftFailed:"ЗМІНУ ПРОВАЛЕНО",moderatorScore:"РАХУНОК МОДЕРАТОРА",survived:"Сервер пережив цю ніч.",correctCalls:"ПРАВИЛЬНІ РІШЕННЯ",mistakes:"ПОМИЛКИ",scammersStopped:"СКАМЕРІВ ЗУПИНЕНО",impostorsCaught:"ДВІЙНИКІВ СПІЙМАНО",falseRejects:"ХИБНІ ВІДМОВИ",incidentsResolved:"ІНЦИДЕНТІВ УСУНЕНО",runAnother:"ПОЧАТИ НОВУ ЗМІНУ"
    },
    hi: {
      language:"भाषा",chooseLanguage:"इंटरफ़ेस भाषा चुनें",rotateTitle:"जारी रखने के लिए घुमाएँ",rotateText:"शिफ्ट शुरू करने के लिए फ़ोन या टैबलेट को आड़ा करें।",rotateHint:"लैंडस्केप मोड में मैस्कॉट और कंट्रोल दिखाई देते हैं।",chat:"चैट",rules:"नियम",decide:"फ़ैसला",evidenceSelected:"सबूत चुना गया",accountRecord:"अकाउंट रिकॉर्ड",tapMascot:"जोड़ने के लिए मैस्कॉट पर टैप करें",tapRule:"मेल खाते नियम पर टैप करें",safety:"सुरक्षा",trust:"विश्वास",activity:"गतिविधि",builders:"बिल्डर",artists:"कलाकार",clipmakers:"क्लिपमेकर",supporters:"सपोर्टर",members:"सदस्य",communityLobby:"कम्युनिटी लॉबी · लाइव",staffNotices:"स्टाफ नोटिस · केवल पढ़ें",messageChannel:"#{channel} में संदेश",chatOn:"चैट चालू",chatMuted:"चैट म्यूट",lobbyAccess:"लॉबी एक्सेस",case:"केस",clickQuestion:"सवाल पूछने के लिए क्लिक करें",ask:"पूछें",close:"बंद करें",you:"आप",displayName:"डिस्प्ले नाम",username:"यूज़रनेम",requestedRole:"माँगी गई भूमिका",accountCreated:"अकाउंट बना",phoneNumber:"फ़ोन नंबर",shortBio:"छोटा परिचय",notProvided:"नहीं दिया",roleBuilder:"बिल्डर",roleArtist:"कलाकार",roleClipmaker:"क्लिपमेकर",roleSupporter:"सपोर्टर",roleMember:"सदस्य",roleAdmin:"एडमिन",roleModerator:"मॉडरेटर",search:"खोज",onServer:"सर्वर पर",device:"डिवाइस",check:"जाँच",account:"अकाउंट",details:"विवरण",phone:"फ़ोन",lookup:"खोज",xProfile:"X प्रोफ़ाइल",recentPosts:"हाल की पोस्ट",modTerminal:"मॉड टर्मिनल",serverSearch:"सर्वर खोज",accountDetails:"अकाउंट विवरण",phoneLookup:"फ़ोन जाँच",deviceCheck:"डिवाइस जाँच",usernameReady:"यूज़रनेम तैयार // खोज दबाएँ",typeUsername:"यूज़रनेम लिखें",searchAction:"खोजें",xReady:"X हैंडल तैयार // खोलें",typeHandle:"हैंडल लिखें",openAction:"खोलें",shift:"शिफ्ट",soundOn:"आवाज़ चालू",soundOff:"आवाज़ बंद",volume:"वॉल्यूम",shiftRules:"शिफ्ट के नियम",memo:"मेमो {current}/{total}",ruleAge:"अकाउंट कम से कम {days} दिन पुराना होना चाहिए।",rulePhone:"फ़ोन सत्यापन ज़रूरी है।",ruleBans:"पुराने बैन भी मान्य हैं।",checkAdmins:"शिफ्ट में बदले नियमों के लिए #admins देखें।",decision:"फ़ैसला",checkRecords:"रिकॉर्ड जाँचें",letIn:"अंदर आने दें",grantAccess:"प्रवेश दें",reject:"अस्वीकार",denyEntry:"प्रवेश रोकें",denyAccess:"प्रवेश अस्वीकृत",chooseReason:"कारण चुनें",onlyEvidence:"केवल आपकी खोजी हुई वजहें उपलब्ध हैं।",noDocumentedReason:"कोई प्रमाणित कारण नहीं",rejectUnsupported:"बिना सबूत अस्वीकार करें",startEyebrow:"DLICOM कम्युनिटी · एक्सेस कंट्रोल",night:"नाइट",shiftWord:"शिफ्ट",startText:"स्टाफ चैनल पढ़ें, हर आवेदक की जाँच करें और सुबह से पहले फ़ैसला लें।",queue:"कतार",visitors:"{count} विज़िटर",firstStep:"पहला कदम",readAdmins:"#ADMINS पढ़ें",applicantPool:"आवेदक समूह",chooseRegion:"क्षेत्र चुनें",loadingRoster:"वास्तविक सदस्य सूची लोड हो रही है…",allServer:"पूरा सर्वर",play:"खेलें",training:"प्रशिक्षण",headphones:"हेडफ़ोन वैकल्पिक · कीबोर्ड अनुकूल",realMembers:"{count} वास्तविक सदस्य · पूरे सर्वर से यादृच्छिक कतार",regionalMembers:"{count} क्षेत्रीय सदस्य · ज़रूरत पर पूरा सर्वर कतार भरेगा",trainingAdmin:"प्रशिक्षण एडमिन",next:"आगे",reading:"पढ़ रहे हैं…",skipTraining:"प्रशिक्षण छोड़ें",skipQuestion:"प्रशिक्षण छोड़ना है?",progressCleared:"आपकी प्रशिक्षण प्रगति मिट जाएगी।",cancel:"रद्द करें",skip:"छोड़ें",trainingComplete:"प्रशिक्षण पूरा",youKnow:"अब आप जानते हैं:",shiftComplete:"शिफ्ट पूरी",shiftFailed:"शिफ्ट विफल",moderatorScore:"मॉडरेटर स्कोर",survived:"सर्वर ने रात पार कर ली।",correctCalls:"सही फ़ैसले",mistakes:"गलतियाँ",scammersStopped:"स्कैमर रोके",impostorsCaught:"नकली पकड़े",falseRejects:"गलत अस्वीकृतियाँ",incidentsResolved:"घटनाएँ सुलझीं",runAnother:"एक और शिफ्ट"
    },
    bn: {
      language:"ভাষা",chooseLanguage:"ইন্টারফেসের ভাষা বেছে নিন",rotateTitle:"চালিয়ে যেতে ঘোরান",rotateText:"শিফট শুরু করতে ফোন বা ট্যাবলেট আড়াআড়ি করুন।",rotateHint:"ল্যান্ডস্কেপ মোডে মাসকট ও কন্ট্রোল দেখা যায়।",chat:"চ্যাট",rules:"নিয়ম",decide:"সিদ্ধান্ত",evidenceSelected:"প্রমাণ নির্বাচিত",accountRecord:"অ্যাকাউন্ট রেকর্ড",tapMascot:"সংযোগ করতে মাসকটে ট্যাপ করুন",tapRule:"মিলে যাওয়া নিয়মে ট্যাপ করুন",safety:"নিরাপত্তা",trust:"বিশ্বাস",activity:"সক্রিয়তা",builders:"বিল্ডার",artists:"শিল্পী",clipmakers:"ক্লিপমেকার",supporters:"সহায়ক",members:"সদস্য",communityLobby:"কমিউনিটি লবি · লাইভ",staffNotices:"স্টাফ নোটিশ · শুধু পড়ার জন্য",messageChannel:"#{channel}-এ বার্তা",chatOn:"চ্যাট চালু",chatMuted:"চ্যাট নিঃশব্দ",lobbyAccess:"লবি অ্যাক্সেস",case:"কেস",clickQuestion:"প্রশ্ন করতে ক্লিক করুন",ask:"জিজ্ঞাসা",close:"বন্ধ",you:"আপনি",displayName:"ডিসপ্লে নাম",username:"ইউজারনেম",requestedRole:"চাওয়া ভূমিকা",accountCreated:"অ্যাকাউন্ট তৈরি",phoneNumber:"ফোন নম্বর",shortBio:"সংক্ষিপ্ত পরিচিতি",notProvided:"দেওয়া হয়নি",roleBuilder:"বিল্ডার",roleArtist:"শিল্পী",roleClipmaker:"ক্লিপমেকার",roleSupporter:"সহায়ক",roleMember:"সদস্য",roleAdmin:"অ্যাডমিন",roleModerator:"মডারেটর",search:"খুঁজুন",onServer:"সার্ভারে",device:"ডিভাইস",check:"পরীক্ষা",account:"অ্যাকাউন্ট",details:"বিবরণ",phone:"ফোন",lookup:"খোঁজ",xProfile:"X প্রোফাইল",recentPosts:"সাম্প্রতিক পোস্ট",modTerminal:"মড টার্মিনাল",serverSearch:"সার্ভার খোঁজ",accountDetails:"অ্যাকাউন্ট বিবরণ",phoneLookup:"ফোন পরীক্ষা",deviceCheck:"ডিভাইস পরীক্ষা",usernameReady:"ইউজারনেম প্রস্তুত // খুঁজুন",typeUsername:"ইউজারনেম লিখুন",searchAction:"খুঁজুন",xReady:"X হ্যান্ডেল প্রস্তুত // খুলুন",typeHandle:"হ্যান্ডেল লিখুন",openAction:"খুলুন",shift:"শিফট",soundOn:"শব্দ চালু",soundOff:"শব্দ বন্ধ",volume:"ভলিউম",shiftRules:"শিফটের নিয়ম",memo:"মেমো {current}/{total}",ruleAge:"অ্যাকাউন্ট অন্তত {days} দিনের পুরোনো হতে হবে।",rulePhone:"ফোন যাচাই আবশ্যক।",ruleBans:"পুরোনো ব্যানও গণ্য হবে।",checkAdmins:"শিফটে নিয়ম বদলালে #admins দেখুন।",decision:"সিদ্ধান্ত",checkRecords:"রেকর্ড দেখুন",letIn:"প্রবেশ দিন",grantAccess:"অ্যাক্সেস দিন",reject:"প্রত্যাখ্যান",denyEntry:"প্রবেশ বন্ধ",denyAccess:"অ্যাক্সেস অস্বীকৃত",chooseReason:"কারণ বেছে নিন",onlyEvidence:"শুধু আপনার খুঁজে পাওয়া প্রমাণের কারণগুলো পাওয়া যাবে।",noDocumentedReason:"কোনো প্রমাণিত কারণ নেই",rejectUnsupported:"প্রমাণ ছাড়া প্রত্যাখ্যান",startEyebrow:"DLICOM কমিউনিটি · অ্যাক্সেস কন্ট্রোল",night:"নাইট",shiftWord:"শিফট",startText:"স্টাফ চ্যানেল পড়ুন, প্রত্যেক আবেদনকারীকে যাচাই করুন এবং ভোরের আগে সিদ্ধান্ত নিন।",queue:"সারি",visitors:"{count} ভিজিটর",firstStep:"প্রথম ধাপ",readAdmins:"#ADMINS পড়ুন",applicantPool:"আবেদনকারী দল",chooseRegion:"অঞ্চল বেছে নিন",loadingRoster:"আসল সদস্য তালিকা লোড হচ্ছে…",allServer:"পুরো সার্ভার",play:"খেলুন",training:"প্রশিক্ষণ",headphones:"হেডফোন ঐচ্ছিক · কিবোর্ড উপযোগী",realMembers:"{count} আসল সদস্য · পুরো সার্ভার থেকে এলোমেলো সারি",regionalMembers:"{count} আঞ্চলিক সদস্য · প্রয়োজনে পুরো সার্ভার সারি পূরণ করবে",trainingAdmin:"প্রশিক্ষণ অ্যাডমিন",next:"পরবর্তী",reading:"পড়া হচ্ছে…",skipTraining:"প্রশিক্ষণ বাদ দিন",skipQuestion:"প্রশিক্ষণ বাদ দেবেন?",progressCleared:"প্রশিক্ষণের অগ্রগতি মুছে যাবে।",cancel:"বাতিল",skip:"বাদ দিন",trainingComplete:"প্রশিক্ষণ সম্পন্ন",youKnow:"এখন আপনি জানেন:",shiftComplete:"শিফট সম্পন্ন",shiftFailed:"শিফট ব্যর্থ",moderatorScore:"মডারেটর স্কোর",survived:"সার্ভার রাতটি পার করেছে।",correctCalls:"সঠিক সিদ্ধান্ত",mistakes:"ভুল",scammersStopped:"স্ক্যামার আটক",impostorsCaught:"ছদ্মবেশী ধরা",falseRejects:"ভুল প্রত্যাখ্যান",incidentsResolved:"ঘটনা সমাধান",runAnother:"আরেকটি শিফট"
    },
    ar: {
      language:"اللغة",chooseLanguage:"اختر لغة الواجهة",rotateTitle:"أدر الجهاز للمتابعة",rotateText:"أدر الهاتف أو الجهاز اللوحي أفقياً لبدء الوردية.",rotateHint:"يبقي الوضع الأفقي الشخصية وأدوات التحكم ظاهرة.",chat:"الدردشة",rules:"القواعد",decide:"القرار",evidenceSelected:"تم اختيار الدليل",accountRecord:"سجل الحساب",tapMascot:"اضغط على الشخصية للربط",tapRule:"اضغط على القاعدة المطابقة",safety:"الأمان",trust:"الثقة",activity:"النشاط",builders:"المطورون",artists:"الفنانون",clipmakers:"صناع المقاطع",supporters:"الداعمون",members:"الأعضاء",communityLobby:"ردهة المجتمع · مباشر",staffNotices:"إشعارات الفريق · للقراءة فقط",messageChannel:"رسالة في #{channel}",chatOn:"صوت الدردشة يعمل",chatMuted:"الدردشة صامتة",lobbyAccess:"دخول الردهة",case:"الحالة",clickQuestion:"اضغط لطرح سؤال",ask:"اسأل",close:"إغلاق",you:"أنت",displayName:"الاسم الظاهر",username:"اسم المستخدم",requestedRole:"الدور المطلوب",accountCreated:"تاريخ إنشاء الحساب",phoneNumber:"رقم الهاتف",shortBio:"نبذة قصيرة",notProvided:"غير مذكور",roleBuilder:"مطور",roleArtist:"فنان",roleClipmaker:"صانع مقاطع",roleSupporter:"داعم",roleMember:"عضو",roleAdmin:"مسؤول",roleModerator:"مشرف",search:"بحث",onServer:"في الخادم",device:"الجهاز",check:"فحص",account:"الحساب",details:"التفاصيل",phone:"الهاتف",lookup:"بحث",xProfile:"ملف X",recentPosts:"المنشورات الأخيرة",modTerminal:"طرفية المشرف",serverSearch:"بحث الخادم",accountDetails:"تفاصيل الحساب",phoneLookup:"فحص الهاتف",deviceCheck:"فحص الجهاز",usernameReady:"اسم المستخدم جاهز // اضغط بحث",typeUsername:"اكتب اسم المستخدم",searchAction:"بحث",xReady:"معرّف X جاهز // اضغط فتح",typeHandle:"اكتب المعرّف",openAction:"فتح",shift:"الوردية",soundOn:"الصوت يعمل",soundOff:"الصوت متوقف",volume:"الصوت",shiftRules:"قواعد الوردية",memo:"مذكرة {current}/{total}",ruleAge:"يجب أن يكون عمر الحساب {days} يوماً على الأقل.",rulePhone:"توثيق الهاتف مطلوب.",ruleBans:"الحظر القديم ما زال محسوباً.",checkAdmins:"راجع #admins لتغييرات القواعد أثناء الوردية.",decision:"القرار",checkRecords:"افحص السجلات",letIn:"السماح بالدخول",grantAccess:"منح الوصول",reject:"رفض",denyEntry:"منع الدخول",denyAccess:"رفض الوصول",chooseReason:"اختر السبب",onlyEvidence:"تظهر فقط الأسباب التي أثبتها الفحص.",noDocumentedReason:"لا يوجد سبب موثق",rejectUnsupported:"رفض بلا دليل",startEyebrow:"مجتمع DLICOM · التحكم بالدخول",night:"وردية",shiftWord:"ليلية",startText:"اقرأ قناة الفريق وافحص كل متقدم واتخذ القرار قبل الفجر.",queue:"الطابور",visitors:"{count} زائراً",firstStep:"الخطوة الأولى",readAdmins:"اقرأ #ADMINS",applicantPool:"مجموعة المتقدمين",chooseRegion:"اختر المنطقة",loadingRoster:"جارٍ تحميل قائمة الأعضاء الحقيقيين…",allServer:"كل الخادم",play:"ابدأ",training:"التدريب",headphones:"سماعات الرأس اختيارية · لوحة المفاتيح مدعومة",realMembers:"{count} عضواً حقيقياً · طابور عشوائي من كل الخادم",regionalMembers:"{count} عضواً إقليمياً · يكمل كل الخادم الطابور عند الحاجة",trainingAdmin:"مسؤول التدريب",next:"التالي",reading:"جارٍ القراءة…",skipTraining:"تخطي التدريب",skipQuestion:"تخطي التدريب؟",progressCleared:"سيتم مسح تقدم التدريب.",cancel:"إلغاء",skip:"تخطي",trainingComplete:"اكتمل التدريب",youKnow:"أصبحت تعرف كيف:",shiftComplete:"اكتملت الوردية",shiftFailed:"فشلت الوردية",moderatorScore:"نتيجة المشرف",survived:"نجا الخادم حتى الصباح.",correctCalls:"القرارات الصحيحة",mistakes:"الأخطاء",scammersStopped:"المحتالون الموقوفون",impostorsCaught:"منتحلو الهوية",falseRejects:"الرفض الخاطئ",incidentsResolved:"الحوادث المحلولة",runAnother:"وردية أخرى"
    },
    id: {
      language:"BAHASA",chooseLanguage:"Pilih bahasa antarmuka",rotateTitle:"Putar untuk melanjutkan",rotateText:"Putar ponsel atau tablet ke samping untuk memulai shift.",rotateHint:"Mode lanskap menjaga maskot dan kontrol tetap terlihat.",chat:"OBROLAN",rules:"ATURAN",decide:"PUTUSKAN",evidenceSelected:"BUKTI DIPILIH",accountRecord:"CATATAN AKUN",tapMascot:"KETUK MASKOT UNTUK MENGHUBUNGKAN",tapRule:"KETUK ATURAN YANG SESUAI",safety:"Keamanan",trust:"Kepercayaan",activity:"Aktivitas",builders:"Builder",artists:"Artis",clipmakers:"Pembuat klip",supporters:"Pendukung",members:"Anggota",communityLobby:"Lobi komunitas · langsung",staffNotices:"Pemberitahuan staf · hanya baca",messageChannel:"Pesan #{channel}",chatOn:"CHAT AKTIF",chatMuted:"CHAT SENYAP",lobbyAccess:"AKSES LOBI",case:"KASUS",clickQuestion:"KLIK UNTUK BERTANYA",ask:"TANYA",close:"TUTUP",you:"KAMU",displayName:"Nama tampilan",username:"Nama pengguna",requestedRole:"Peran diminta",accountCreated:"Akun dibuat",phoneNumber:"Nomor telepon",shortBio:"Bio singkat",notProvided:"Tidak diisi",roleBuilder:"Builder",roleArtist:"Artis",roleClipmaker:"Pembuat klip",roleSupporter:"Pendukung",roleMember:"Anggota",roleAdmin:"Admin",roleModerator:"Moderator",search:"Cari",onServer:"di server",device:"Perangkat",check:"periksa",account:"Akun",details:"detail",phone:"Telepon",lookup:"pencarian",xProfile:"Profil X",recentPosts:"postingan terbaru",modTerminal:"TERMINAL MOD",serverSearch:"PENCARIAN SERVER",accountDetails:"DETAIL AKUN",phoneLookup:"CEK TELEPON",deviceCheck:"CEK PERANGKAT",usernameReady:"NAMA SIAP // TEKAN CARI",typeUsername:"ketik nama pengguna",searchAction:"CARI",xReady:"HANDLE X SIAP // TEKAN BUKA",typeHandle:"ketik handle",openAction:"BUKA",shift:"SHIFT",soundOn:"SUARA AKTIF",soundOff:"SUARA MATI",volume:"VOL",shiftRules:"ATURAN SHIFT",memo:"MEMO {current}/{total}",ruleAge:"Akun harus berusia minimal {days} hari.",rulePhone:"Verifikasi telepon wajib.",ruleBans:"Ban lama tetap berlaku.",checkAdmins:"Periksa #admins untuk perubahan aturan selama shift.",decision:"KEPUTUSAN",checkRecords:"PERIKSA CATATAN",letIn:"IZINKAN MASUK",grantAccess:"BERI AKSES",reject:"TOLAK",denyEntry:"TOLAK MASUK",denyAccess:"TOLAK AKSES",chooseReason:"Pilih alasan",onlyEvidence:"Hanya alasan yang kamu buktikan selama pemeriksaan yang tersedia.",noDocumentedReason:"Tidak ada alasan terdokumentasi",rejectUnsupported:"Tolak tanpa bukti",startEyebrow:"KOMUNITAS DLICOM · KONTROL AKSES",night:"SHIFT",shiftWord:"MALAM",startText:"Baca kanal staf, periksa setiap pelamar, dan buat keputusan sebelum fajar.",queue:"ANTREAN",visitors:"{count} PENGUNJUNG",firstStep:"LANGKAH PERTAMA",readAdmins:"BACA #ADMINS",applicantPool:"KUMPULAN PELAMAR",chooseRegion:"Pilih wilayah",loadingRoster:"Memuat daftar anggota asli…",allServer:"Semua server",play:"MAIN",training:"LATIHAN",headphones:"Headphone opsional · ramah keyboard",realMembers:"{count} anggota asli · antrean acak seluruh server",regionalMembers:"{count} anggota wilayah · seluruh server mengisi jika perlu",trainingAdmin:"ADMIN LATIHAN",next:"LANJUT",reading:"MEMBACA…",skipTraining:"LEWATI LATIHAN",skipQuestion:"Lewati latihan?",progressCleared:"Progres latihan akan dihapus.",cancel:"BATAL",skip:"LEWATI",trainingComplete:"LATIHAN SELESAI",youKnow:"Sekarang kamu tahu cara:",shiftComplete:"SHIFT SELESAI",shiftFailed:"SHIFT GAGAL",moderatorScore:"SKOR MODERATOR",survived:"Server berhasil melewati malam.",correctCalls:"KEPUTUSAN BENAR",mistakes:"KESALAHAN",scammersStopped:"PENIPU DIHENTIKAN",impostorsCaught:"PENYAMAR TERTANGKAP",falseRejects:"PENOLAKAN SALAH",incidentsResolved:"INSIDEN SELESAI",runAnother:"JALANKAN SHIFT LAGI"
    },
    zh: {
      language:"语言",chooseLanguage:"选择界面语言",rotateTitle:"旋转设备以继续",rotateText:"将手机或平板横向放置以开始值班。",rotateHint:"横屏模式可保持吉祥物和控件可见。",chat:"聊天",rules:"规则",decide:"决定",evidenceSelected:"已选择证据",accountRecord:"账号记录",tapMascot:"点击吉祥物进行关联",tapRule:"点击匹配的规则",safety:"安全",trust:"信任",activity:"活跃度",builders:"开发者",artists:"艺术家",clipmakers:"剪辑师",supporters:"支持者",members:"成员",communityLobby:"社区大厅 · 实时",staffNotices:"员工通知 · 只读",messageChannel:"发送到 #{channel}",chatOn:"聊天声音开",chatMuted:"聊天静音",lobbyAccess:"大厅准入",case:"案件",clickQuestion:"点击提问",ask:"提问",close:"关闭",you:"你",displayName:"显示名称",username:"用户名",requestedRole:"申请角色",accountCreated:"账号创建时间",phoneNumber:"电话号码",shortBio:"个人简介",notProvided:"未提供",roleBuilder:"开发者",roleArtist:"艺术家",roleClipmaker:"剪辑师",roleSupporter:"支持者",roleMember:"成员",roleAdmin:"管理员",roleModerator:"版主",search:"搜索",onServer:"服务器内",device:"设备",check:"检查",account:"账号",details:"详情",phone:"电话",lookup:"查询",xProfile:"X 主页",recentPosts:"最近帖子",modTerminal:"审核终端",serverSearch:"服务器搜索",accountDetails:"账号详情",phoneLookup:"电话查询",deviceCheck:"设备检查",usernameReady:"用户名已填入 // 点击搜索",typeUsername:"输入用户名",searchAction:"搜索",xReady:"X 用户名已填入 // 点击打开",typeHandle:"输入用户名",openAction:"打开",shift:"值班",soundOn:"声音开",soundOff:"声音关",volume:"音量",shiftRules:"值班规则",memo:"备忘 {current}/{total}",ruleAge:"账号必须至少注册 {days} 天。",rulePhone:"必须完成电话验证。",ruleBans:"旧封禁仍然有效。",checkAdmins:"值班期间请查看 #admins 的规则更新。",decision:"决定",checkRecords:"检查记录",letIn:"允许进入",grantAccess:"授予访问",reject:"拒绝",denyEntry:"禁止进入",denyAccess:"拒绝访问",chooseReason:"选择原因",onlyEvidence:"仅显示你在检查中发现的证据原因。",noDocumentedReason:"没有已记录的原因",rejectUnsupported:"无证据拒绝",startEyebrow:"DLICOM 社区 · 访问控制",night:"夜间",shiftWord:"值班",startText:"阅读员工频道，检查每位申请者，并在天亮前作出决定。",queue:"队列",visitors:"{count} 位访客",firstStep:"第一步",readAdmins:"阅读 #ADMINS",applicantPool:"申请者池",chooseRegion:"选择地区",loadingRoster:"正在加载真实成员名单…",allServer:"全服务器",play:"开始",training:"训练",headphones:"耳机可选 · 支持键盘",realMembers:"{count} 名真实成员 · 全服务器随机队列",regionalMembers:"{count} 名地区成员 · 不足时由全服务器补充",trainingAdmin:"训练管理员",next:"下一步",reading:"阅读中…",skipTraining:"跳过训练",skipQuestion:"跳过训练？",progressCleared:"训练进度将被清除。",cancel:"取消",skip:"跳过",trainingComplete:"训练完成",youKnow:"你已经学会：",shiftComplete:"值班完成",shiftFailed:"值班失败",moderatorScore:"审核员得分",survived:"服务器安全度过了这一夜。",correctCalls:"正确决定",mistakes:"错误",scammersStopped:"阻止骗子",impostorsCaught:"抓获冒充者",falseRejects:"错误拒绝",incidentsResolved:"已解决事件",runAnother:"再次值班"
    },
    vi: {
      language:"NGÔN NGỮ",chooseLanguage:"Chọn ngôn ngữ giao diện",rotateTitle:"Xoay thiết bị để tiếp tục",rotateText:"Xoay ngang điện thoại hoặc máy tính bảng để bắt đầu ca trực.",rotateHint:"Chế độ ngang giữ linh vật và điều khiển luôn hiển thị.",chat:"CHAT",rules:"QUY TẮC",decide:"QUYẾT ĐỊNH",evidenceSelected:"ĐÃ CHỌN BẰNG CHỨNG",accountRecord:"HỒ SƠ TÀI KHOẢN",tapMascot:"CHẠM LINH VẬT ĐỂ KẾT NỐI",tapRule:"CHẠM QUY TẮC PHÙ HỢP",safety:"An toàn",trust:"Tin cậy",activity:"Hoạt động",builders:"Lập trình viên",artists:"Họa sĩ",clipmakers:"Người làm clip",supporters:"Hỗ trợ",members:"Thành viên",communityLobby:"Sảnh cộng đồng · trực tiếp",staffNotices:"Thông báo nhân viên · chỉ đọc",messageChannel:"Nhắn #{channel}",chatOn:"CHAT BẬT",chatMuted:"CHAT TẮT TIẾNG",lobbyAccess:"TRUY CẬP SẢNH",case:"HỒ SƠ",clickQuestion:"NHẤN ĐỂ HỎI",ask:"HỎI",close:"ĐÓNG",you:"BẠN",displayName:"Tên hiển thị",username:"Tên người dùng",requestedRole:"Vai trò yêu cầu",accountCreated:"Ngày tạo tài khoản",phoneNumber:"Số điện thoại",shortBio:"Giới thiệu ngắn",notProvided:"Chưa cung cấp",roleBuilder:"Lập trình viên",roleArtist:"Họa sĩ",roleClipmaker:"Người làm clip",roleSupporter:"Hỗ trợ",roleMember:"Thành viên",roleAdmin:"Quản trị viên",roleModerator:"Điều hành viên",search:"Tìm",onServer:"trên server",device:"Thiết bị",check:"kiểm tra",account:"Tài khoản",details:"chi tiết",phone:"Điện thoại",lookup:"tra cứu",xProfile:"Hồ sơ X",recentPosts:"bài gần đây",modTerminal:"TRẠM ĐIỀU HÀNH",serverSearch:"TÌM TRÊN SERVER",accountDetails:"CHI TIẾT TÀI KHOẢN",phoneLookup:"KIỂM TRA ĐIỆN THOẠI",deviceCheck:"KIỂM TRA THIẾT BỊ",usernameReady:"ĐÃ ĐIỀN TÊN // NHẤN TÌM",typeUsername:"nhập tên người dùng",searchAction:"TÌM",xReady:"ĐÃ ĐIỀN TÊN X // NHẤN MỞ",typeHandle:"nhập tên X",openAction:"MỞ",shift:"CA TRỰC",soundOn:"ÂM THANH BẬT",soundOff:"ÂM THANH TẮT",volume:"ÂM LƯỢNG",shiftRules:"QUY TẮC CA TRỰC",memo:"GHI CHÚ {current}/{total}",ruleAge:"Tài khoản phải ít nhất {days} ngày tuổi.",rulePhone:"Bắt buộc xác minh điện thoại.",ruleBans:"Lệnh cấm cũ vẫn được tính.",checkAdmins:"Kiểm tra #admins để biết thay đổi quy tắc trong ca.",decision:"QUYẾT ĐỊNH",checkRecords:"KIỂM TRA HỒ SƠ",letIn:"CHO VÀO",grantAccess:"CẤP QUYỀN",reject:"TỪ CHỐI",denyEntry:"KHÔNG CHO VÀO",denyAccess:"TỪ CHỐI TRUY CẬP",chooseReason:"Chọn lý do",onlyEvidence:"Chỉ có các lý do bạn đã tìm thấy bằng chứng.",noDocumentedReason:"Không có lý do được ghi nhận",rejectUnsupported:"Từ chối không có bằng chứng",startEyebrow:"CỘNG ĐỒNG DLICOM · KIỂM SOÁT TRUY CẬP",night:"CA",shiftWord:"ĐÊM",startText:"Đọc kênh nhân viên, kiểm tra từng ứng viên và quyết định trước bình minh.",queue:"HÀNG ĐỢI",visitors:"{count} KHÁCH",firstStep:"BƯỚC ĐẦU",readAdmins:"ĐỌC #ADMINS",applicantPool:"NHÓM ỨNG VIÊN",chooseRegion:"Chọn khu vực",loadingRoster:"Đang tải danh sách thành viên thật…",allServer:"Toàn server",play:"CHƠI",training:"HUẤN LUYỆN",headphones:"Tai nghe không bắt buộc · hỗ trợ bàn phím",realMembers:"{count} thành viên thật · hàng đợi ngẫu nhiên toàn server",regionalMembers:"{count} thành viên khu vực · toàn server sẽ bổ sung nếu cần",trainingAdmin:"ADMIN HUẤN LUYỆN",next:"TIẾP",reading:"ĐANG ĐỌC…",skipTraining:"BỎ QUA HUẤN LUYỆN",skipQuestion:"Bỏ qua huấn luyện?",progressCleared:"Tiến trình huấn luyện sẽ bị xóa.",cancel:"HỦY",skip:"BỎ QUA",trainingComplete:"HOÀN TẤT HUẤN LUYỆN",youKnow:"Bạn đã biết cách:",shiftComplete:"HOÀN TẤT CA",shiftFailed:"CA THẤT BẠI",moderatorScore:"ĐIỂM ĐIỀU HÀNH",survived:"Server đã vượt qua đêm nay.",correctCalls:"QUYẾT ĐỊNH ĐÚNG",mistakes:"SAI LẦM",scammersStopped:"ĐÃ CHẶN LỪA ĐẢO",impostorsCaught:"ĐÃ BẮT GIẢ MẠO",falseRejects:"TỪ CHỐI SAI",incidentsResolved:"SỰ CỐ ĐÃ XỬ LÝ",runAnother:"CHẠY CA KHÁC"
    }
  };

  const packExtensions = {
    en: {
      shiftSummary:"Community survived. {correct} correct decisions, {mistakes} mistakes, {incidents} incidents contained.",
      phoneOptional:"Phone verification is optional.", bansAdvisory:"Old bans are advisory only.", adminsOnly:"Only administrators can post here",
      usernameRecords:"USERNAME RECORDS", searchMembersHint:"Enter a username to search members who are already on the server.", similarHint:"Enter a username to find close matches among server members.", exactAccountHint:"Enter the applicant's exact username to open their account record.", reviewHandle:"Review the handle, then press OPEN yourself.", connectMissingX:"Connect the missing X field to the applicant first.",
      verified:"VERIFIED", yes:"YES", no:"NO", verifiedSince:"VERIFIED SINCE", linkedAccounts:"LINKED ACCOUNTS", listOpen:"LIST OPEN", viewList:"VIEW LIST", localFingerprint:"LOCAL FINGERPRINT", deviceId:"DEVICE ID", deviceAccounts:"ACCOUNTS ON THIS DEVICE", accountUsernames:"ACCOUNT USERNAMES",
      enterUsernameFirst:"Enter a username first", enterXFirst:"Enter an X handle first", profile:"PROFILE", result:"RESULT", joined:"Joined", followers:"followers", following:"following", likes:"likes", engagement:"ENGAGEMENT", connectMetrics:"Connect metrics", roleClaim:"ROLE CLAIM", connectPosts:"Connect posts", views:"views", profileNotFound:"PROFILE NOT FOUND", noPublicProfile:"No public profile matches that exact handle.",
      accountAge:"ACCOUNT AGE", status:"STATUS", previousBans:"PREVIOUS BANS", membership:"MEMBERSHIP", historicalRecord:"HISTORICAL RECORD", activeRecord:"ACTIVE RECORD", deviceRecord:"DEVICE-LINKED RECORD", directoryRecord:"DIRECTORY RECORD", unknown:"Unknown", banned:"BANNED", online:"ONLINE", onFile:"ON FILE",
      moderationActions:"Moderation actions", deleted:"Deleted", deleteMessage:"Delete message", banMember:"Ban member", messageDeletedByModerator:"Message deleted by moderator", logged:"LOGGED", newMessage:"NEW MESSAGE", copyDiscordUsername:"Copy Discord username",
      serverCompromised:"SERVER COMPROMISED", serverCompromisedText:"Too many malicious accounts gained access.", communityWalkout:"COMMUNITY WALKOUT", communityWalkoutText:"Members no longer trust the moderation team.", serverClosed:"SERVER CLOSED", serverClosedText:"The community became inactive.", adminCompromised:"ADMIN ACCESS COMPROMISED", adminCompromisedText:"Channels deleted. Server ownership lost.", moderatorDismissed:"MODERATOR DISMISSED", moderatorDismissedText:"Too many applicants were rejected without supporting evidence.", copyXUsername:"Copy X username"
    },
    ru: {
      shiftSummary:"Сообщество выжило. Верных решений: {correct}, ошибок: {mistakes}, устранено инцидентов: {incidents}.",
      phoneOptional:"Подтверждение телефона необязательно.",bansAdvisory:"Старые баны носят рекомендательный характер.",adminsOnly:"Писать здесь могут только администраторы",usernameRecords:"ДАННЫЕ ПОЛЬЗОВАТЕЛЯ",searchMembersHint:"Введите имя, чтобы найти участников, которые уже находятся на сервере.",similarHint:"Введите имя, чтобы найти похожие имена среди участников сервера.",exactAccountHint:"Введите точное имя кандидата, чтобы открыть данные аккаунта.",reviewHandle:"Проверьте ник и самостоятельно нажмите ОТКРЫТЬ.",connectMissingX:"Сначала соедините отсутствующее поле X с маскотом.",verified:"ПОДТВЕРЖДЁН",yes:"ДА",no:"НЕТ",verifiedSince:"ПОДТВЕРЖДЁН С",linkedAccounts:"СВЯЗАННЫЕ АККАУНТЫ",listOpen:"СПИСОК ОТКРЫТ",viewList:"ОТКРЫТЬ СПИСОК",localFingerprint:"ЛОКАЛЬНЫЙ ОТПЕЧАТОК",deviceId:"ID УСТРОЙСТВА",deviceAccounts:"АККАУНТЫ НА УСТРОЙСТВЕ",accountUsernames:"ИМЕНА АККАУНТОВ",enterUsernameFirst:"Сначала введите имя пользователя",enterXFirst:"Сначала введите ник X",profile:"ПРОФИЛЬ",result:"РЕЗУЛЬТАТ",joined:"Регистрация",followers:"подписчиков",following:"подписок",likes:"лайков",engagement:"АКТИВНОСТЬ",connectMetrics:"Связать метрики",roleClaim:"ЗАЯВЛЕННАЯ РОЛЬ",connectPosts:"Связать посты",views:"просмотров",profileNotFound:"ПРОФИЛЬ НЕ НАЙДЕН",noPublicProfile:"Публичный профиль с таким точным ником не найден.",accountAge:"ВОЗРАСТ АККАУНТА",status:"СТАТУС",previousBans:"ПРЕДЫДУЩИЕ БАНЫ",membership:"УЧАСТИЕ",historicalRecord:"АРХИВНАЯ ЗАПИСЬ",activeRecord:"АКТИВНАЯ ЗАПИСЬ",deviceRecord:"ЗАПИСЬ С УСТРОЙСТВА",directoryRecord:"ЗАПИСЬ В КАТАЛОГЕ",unknown:"Неизвестно",banned:"ЗАБАНЕН",online:"В СЕТИ",onFile:"ЕСТЬ В БАЗЕ",moderationActions:"Действия модератора",deleted:"Удалено",deleteMessage:"Удалить сообщение",banMember:"Забанить участника",messageDeletedByModerator:"Сообщение удалено модератором",logged:"ЗАПИСАНО",newMessage:"НОВОЕ СООБЩЕНИЕ",copyDiscordUsername:"Скопировать имя Discord",serverCompromised:"СЕРВЕР ВЗЛОМАН",serverCompromisedText:"Слишком много опасных аккаунтов получили доступ.",communityWalkout:"ИСХОД СООБЩЕСТВА",communityWalkoutText:"Участники больше не доверяют модерации.",serverClosed:"СЕРВЕР ЗАКРЫТ",serverClosedText:"Сообщество потеряло активность.",adminCompromised:"ДОСТУП АДМИНА ВЗЛОМАН",adminCompromisedText:"Каналы удалены. Контроль над сервером потерян.",moderatorDismissed:"МОДЕРАТОР УВОЛЕН",moderatorDismissedText:"Слишком много кандидатов отклонено без доказательств.",copyXUsername:"Скопировать имя X"
    },
    uk: {
      shiftSummary:"Спільнота вижила. Правильних рішень: {correct}, помилок: {mistakes}, усунуто інцидентів: {incidents}.",adminsOnly:"Писати тут можуть лише адміністратори",verified:"ПІДТВЕРДЖЕНО",yes:"ТАК",no:"НІ",linkedAccounts:"ПОВ'ЯЗАНІ АКАУНТИ",deviceId:"ID ПРИСТРОЮ",deviceAccounts:"АКАУНТИ НА ПРИСТРОЇ",accountAge:"ВІК АКАУНТА",status:"СТАТУС",previousBans:"ПОПЕРЕДНІ БАНИ",membership:"УЧАСТЬ",banned:"ЗАБАНЕНО",online:"ОНЛАЙН",deleteMessage:"Видалити повідомлення",banMember:"Забанити учасника",logged:"ЗАПИСАНО",newMessage:"НОВЕ ПОВІДОМЛЕННЯ"
    },
    hi: { shiftSummary:"समुदाय सुरक्षित रहा। सही फैसले: {correct}, गलतियाँ: {mistakes}, संभाली गई घटनाएँ: {incidents}।", adminsOnly:"यहाँ केवल एडमिन पोस्ट कर सकते हैं",verified:"सत्यापित",yes:"हाँ",no:"नहीं",deviceId:"डिवाइस ID",status:"स्थिति",previousBans:"पिछले प्रतिबंध",deleteMessage:"संदेश हटाएँ",banMember:"सदस्य को प्रतिबंधित करें" },
    bn: { shiftSummary:"কমিউনিটি টিকে গেছে। সঠিক সিদ্ধান্ত: {correct}, ভুল: {mistakes}, সামলানো ঘটনা: {incidents}।", adminsOnly:"শুধু অ্যাডমিনরা এখানে লিখতে পারেন",verified:"যাচাইকৃত",yes:"হ্যাঁ",no:"না",deviceId:"ডিভাইস ID",status:"অবস্থা",previousBans:"আগের ব্যান",deleteMessage:"মেসেজ মুছুন",banMember:"সদস্যকে ব্যান করুন" },
    ar: { shiftSummary:"نجا المجتمع. القرارات الصحيحة: {correct}، الأخطاء: {mistakes}، الحوادث المحتواة: {incidents}.", adminsOnly:"يمكن للمشرفين فقط الكتابة هنا",verified:"موثّق",yes:"نعم",no:"لا",deviceId:"معرّف الجهاز",status:"الحالة",previousBans:"الحظر السابق",deleteMessage:"حذف الرسالة",banMember:"حظر العضو" },
    id: { shiftSummary:"Komunitas bertahan. Keputusan benar: {correct}, kesalahan: {mistakes}, insiden diatasi: {incidents}.", adminsOnly:"Hanya admin yang dapat menulis di sini",verified:"TERVERIFIKASI",yes:"YA",no:"TIDAK",deviceId:"ID PERANGKAT",status:"STATUS",previousBans:"BAN SEBELUMNYA",deleteMessage:"Hapus pesan",banMember:"Ban anggota" },
    zh: { shiftSummary:"社区平安度过夜晚。正确决定：{correct}，错误：{mistakes}，已控制事件：{incidents}。", adminsOnly:"只有管理员可以在这里发言",verified:"已验证",yes:"是",no:"否",deviceId:"设备 ID",status:"状态",previousBans:"过往封禁",deleteMessage:"删除消息",banMember:"封禁成员" },
    vi: { shiftSummary:"Cộng đồng đã sống sót. Quyết định đúng: {correct}, sai: {mistakes}, sự cố đã xử lý: {incidents}.", adminsOnly:"Chỉ quản trị viên có thể đăng ở đây",verified:"ĐÃ XÁC MINH",yes:"CÓ",no:"KHÔNG",deviceId:"ID THIẾT BỊ",status:"TRẠNG THÁI",previousBans:"LỆNH CẤM TRƯỚC",deleteMessage:"Xóa tin nhắn",banMember:"Cấm thành viên" }
  };
  Object.entries(packExtensions).forEach(([code, values]) => Object.assign(packs[code] || (packs[code] = {}), values));

  const phrasePacks = {
    ru: {
      "What phone number did you use?":"Какой номер телефона вы использовали?",
      "Why didn't you add an X profile?":"Почему вы не указали профиль X?",
      "What's your X handle?":"Какой у вас ник в X?",
      "Why didn't you add a bio?":"Почему вы не добавили описание?",
      "Why isn't your phone verified?":"Почему ваш телефон не подтверждён?",
      "Did you change your phone recently?":"Вы недавно меняли телефон?",
      "Why is this number linked to several accounts?":"Почему этот номер привязан к нескольким аккаунтам?",
      "Why were you banned?":"Почему вас забанили?",
      "Why does your X activity look suspicious?":"Почему активность в вашем X выглядит подозрительно?",
      "How do your posts prove the role you requested?":"Как ваши посты подтверждают запрошенную роль?",
      "Why is there another account with your identity?":"Почему существует другой аккаунт с вашей личностью?",
      "Why doesn't your phone number match the account record?":"Почему номер телефона не совпадает с данными аккаунта?",
      "Why are several accounts using this device?":"Почему этим устройством пользуются несколько аккаунтов?",
      "Why is there another account on this device?":"Почему на этом устройстве есть другой аккаунт?",
      "The server made it through the night.":"Сервер пережил эту ночь.",
      "A visitor has arrived at the window.":"К окну подошёл посетитель.",
      "Our job is to verify what they submitted before making a decision.":"Наша задача — проверить его данные перед решением.",
      "This is the Join Card.":"Это карточка заявки.",
      "It shows the applicant's name, username, requested role and submitted details.":"Здесь указаны имя, ник, запрошенная роль и данные кандидата.",
      "These five tools do the real checking.":"Эти пять инструментов нужны для настоящей проверки.",
      "Never assume the Join Card is telling the whole truth.":"Не считайте, что в карточке всегда написана вся правда.",
      "Keep an eye on General and Admins too.":"Следите также за каналами General и Admins.",
      "Bad entrants can cause incidents, and rule changes arrive in #admins.":"Опасные участники создают инциденты, а новые правила приходят в #admins.",
      "Safety, Trust and Activity measure the health of the server.":"Безопасность, доверие и активность показывают состояние сервера.",
      "The roster below shows the community you are building.":"Состав ниже показывает сообщество, которое вы создаёте.",
      "Let's start with the account itself.":"Начнём с самого аккаунта.",
      "Open Account Details.":"Откройте данные аккаунта.",
      "Always check the current Shift Rules first.":"Сначала всегда проверяйте текущие правила смены.",
      "Tonight, accounts must be at least 14 days old.":"Сегодня аккаунту должно быть не менее 14 дней.",
      "Evidence needs context.":"Улике нужен контекст.",
      "Connect the selected age to the 14-day Shift Rule.":"Соедините выбранный возраст с правилом о 14 днях.",
      "The connection unlocked a new question.":"Связь открыла новый вопрос.",
      "Ask about the identity conflict.":"Спросите о конфликте личности.",
      "Open Search on Server.":"Откройте поиск на сервере.",
      "Open X Profile.":"Откройте профиль X.",
      "Use Phone Lookup for the final check.":"Для последней проверки используйте поиск телефона.",
      "Let them in.":"Впустите кандидата.",
      "Reject the impersonator.":"Отклоните двойника.",
      "Last applicant.":"Последний кандидат.",
      "Make the call.":"Примите решение.",
      "Incident contained.":"Инцидент устранён.",
      "Return to the menu when you are ready for the real shift.":"Вернитесь в меню, когда будете готовы к настоящей смене."
    },
    uk: {
      "What phone number did you use?":"Який номер телефону ви використали?",
      "Why didn't you add an X profile?":"Чому ви не вказали профіль X?",
      "What's your X handle?":"Який у вас нік в X?",
      "Why didn't you add a bio?":"Чому ви не додали опис?",
      "Why were you banned?":"Чому вас забанили?",
      "Why isn't your phone verified?":"Чому ваш телефон не підтверджено?",
      "Why does your X activity look suspicious?":"Чому активність у вашому X виглядає підозріло?",
      "Why is there another account with your identity?":"Чому існує інший акаунт із вашою особою?",
      "A visitor has arrived at the window.":"До вікна підійшов відвідувач.",
      "Our job is to verify what they submitted before making a decision.":"Наше завдання — перевірити його дані перед рішенням.",
      "This is the Join Card.":"Це картка заявки.",
      "These five tools do the real checking.":"Ці п'ять інструментів потрібні для справжньої перевірки.",
      "Keep an eye on General and Admins too.":"Стежте також за каналами General та Admins.",
      "Let's start with the account itself.":"Почнімо із самого акаунта.",
      "Open Account Details.":"Відкрийте дані акаунта.",
      "Open Search on Server.":"Відкрийте пошук на сервері.",
      "Open X Profile.":"Відкрийте профіль X.",
      "Let them in.":"Впустіть кандидата.",
      "Reject the impersonator.":"Відхиліть двійника.",
      "Make the call.":"Ухваліть рішення."
    }
  };

  Object.assign(phrasePacks.ru, {
    "Phone is not verified":"Телефон не подтверждён", "Connected the phone status to the applicant":"Статус телефона связан с кандидатом",
    "Phone number does not match":"Номер телефона не совпадает", "Connected a conflicting phone number to the applicant":"Несовпадающий номер связан с кандидатом",
    "Phone is linked too widely":"К телефону привязано слишком много аккаунтов", "Connected the linked-account count to the active rule":"Количество аккаунтов связано с текущим правилом",
    "Banned account on this device":"На устройстве есть забаненный аккаунт", "Connected a banned device account to the applicant":"Забаненный аккаунт устройства связан с кандидатом",
    "Contradictory device history":"Противоречивая история устройства", "Connected the applicant's denial to the device records":"Ответ кандидата сопоставлен с данными устройства",
    "Previous server ban":"Предыдущий бан на сервере", "Connected the ban record to the applicant":"Запись о бане связана с кандидатом",
    "Suspicious X activity":"Подозрительная активность в X", "Connected suspicious metrics to the applicant":"Подозрительные метрики связаны с кандидатом",
    "Requested role is unsupported":"Запрошенная роль не подтверждена", "Connected the posts to the claimed role":"Посты сопоставлены с заявленной ролью",
    "Possible impersonation":"Возможная подмена личности", "Connected an existing server identity to the applicant":"Существующий профиль на сервере связан с кандидатом",
    "Account is too new":"Аккаунт слишком новый", "Connected the account age to the current rule":"Возраст аккаунта связан с текущим правилом",
    "No documented reason":"Нет подтверждённой причины", "Reject without supporting evidence":"Отклонить без доказательств",
    "Hey! I'm participating in the Game Jam.":"Привет! Я участвую в геймджеме.",
    "Just here to meet the jam teams. I draw creatures.":"Я хочу познакомиться с командами джема. Я рисую существ.",
    "First time here. I make clips and can post your launch everywhere.":"Я здесь впервые. Делаю клипы и могу рассказать о вашем запуске.",
    "New account, old project. I can prove I'm building.":"Аккаунт новый, проект старый. Я могу доказать, что занимаюсь разработкой.",
    "Yo, it's Mogster. Got logged out for a minute.":"Йо, это Mogster. Меня ненадолго выкинуло из аккаунта.",
    "I used to build here. Someone said bans reset after a year.":"Раньше я здесь разрабатывал. Кто-то сказал, что через год бан снимается.",
    "Alex invited me to help with the jam key art.":"Alex пригласил меня помочь с ключевым артом для джема.",
    "I'm a Builder. I create apps and handle complete projects.":"Я строитель. Оформляю заявки и веду проекты под ключ.",
    "Phone verification broke. The build is real though.":"Проверка телефона сломалась. Но проект настоящий.",
    "Open the door. I forgot which side I'm on.":"Открой дверь. Я забыл, с какой стороны нахожусь.",
    "You already approved me. You just haven't done it yet.":"Ты уже меня одобрил. Просто ещё этого не сделал.",
    "Don't let the next one in. That's all I came to say.":"Не впускай следующего. Я пришёл сказать только это.",
    "Hi. First time here — I'm Sam. I make small puzzle games.":"Привет. Я здесь впервые — меня зовут Sam. Я делаю небольшие головоломки.",
    "Shift's over. I'll take it from here.":"Смена окончена. Дальше я сам.",
    "Hi. I made this account a few days ago.":"Привет. Я создал этот аккаунт несколько дней назад.",
    "My number is 583-2194.":"Мой номер — 583-2194.", "Hey, it's Mogster. My other session broke.":"Привет, это Mogster. Другая сессия сломалась.",
    "I'm a Builder. The game should be ready tonight.":"Я разработчик. Игра должна быть готова сегодня ночью.",
    "I'm trying to come back. My old ban was appealed.":"Я пытаюсь вернуться. Старый бан был обжалован.",
    "Last check? I brought everything you might need.":"Последняя проверка? Я принёс всё, что может понадобиться.",
    "What are you building?":"Что вы разрабатываете?", "Who invited you?":"Кто вас пригласил?", "Can you show your work?":"Можете показать свои работы?",
    "What do you make?":"Чем вы занимаетесь?", "Which clips have you made?":"Какие клипы вы делали?", "Why this server?":"Почему именно этот сервер?",
    "Why are you outside?":"Почему вы снаружи?", "What's your current project?":"Какой у вас сейчас проект?", "Prove it's you.":"Докажите, что это вы.",
    "Who said bans reset?":"Кто сказал, что баны снимаются?", "Can you prove the account was hacked?":"Можете доказать, что аккаунт взломали?",
    "What do you draw?":"Что вы рисуете?", "Can Alex confirm?":"Alex может это подтвердить?", "What apps do you build?":"Какие приложения вы разрабатываете?",
    "Do you develop software?":"Вы разрабатываете программы?", "Why are you already online?":"Почему вы уже в сети?", "What's the staff code?":"Какой код сотрудников?",
    "Where did you come from?":"Откуда вы пришли?", "Who are you?":"Кто вы?", "What happens at dawn?":"Что случится на рассвете?",
    "Anything unusual?":"Что-нибудь необычное?", "Why are you joining?":"Зачем вы хотите войти?", "Is this your first account?":"Это ваш первый аккаунт?",
    "Can you prove the project?":"Можете подтвердить проект?", "Which account is real?":"Какой аккаунт настоящий?", "Can anyone confirm?":"Кто-нибудь может подтвердить?",
    "Can you show progress?":"Можете показать прогресс?", "Why return now?":"Почему вы возвращаетесь сейчас?", "Who remembers you?":"Кто вас помнит?",
    "Is the account secure?":"Аккаунт защищён?", "What do you build?":"Что вы создаёте?", "Is this your first visit?":"Вы здесь впервые?",
    "Your account is under 14 days old, so the current rule does not allow entry. Anything to add?":"Вашему аккаунту меньше 14 дней, поэтому текущее правило не разрешает вход. Хотите что-нибудь добавить?",
    "You said there were no other accounts. Why does the device log show them?":"Вы сказали, что других аккаунтов нет. Почему журнал устройства их показывает?",
    "I changed numbers recently and never finished the verification step.":"Я недавно сменил номер и не закончил подтверждение.",
    "I don't use X.":"Я не пользуюсь X.", "I skipped it when I sent the application.":"Я пропустил это при отправке заявки.",
    "Morning, night crew. For this shift, accounts need to be at least 14 days old before we let them into the server.":"Доброй ночи, ночная смена. Сегодня впускаем только аккаунты старше 14 дней.",
    "Phone verification is mandatory tonight. A good story or a nice profile does not replace it.":"Сегодня подтверждение телефона обязательно. Хорошая история или красивый профиль его не заменят.",
    "Also: old bans still count. If someone looks familiar, search the directory before deciding.":"И ещё: старые баны учитываются. Если лицо кажется знакомым, проверьте каталог перед решением.",
    "Device Check is online. Multiple accounts are not automatically bad — open the linked usernames, inspect their records, and connect only real risks or contradictions.":"Проверка устройства работает. Несколько аккаунтов сами по себе не нарушение — откройте связанные имена, изучите записи и отмечайте только реальные риски и противоречия.",
    "RULE UPDATE — Builders now need recent public proof of work. Always follow the latest message in #admins.":"НОВОЕ ПРАВИЛО — разработчикам теперь нужны свежие публичные доказательства работы. Всегда следуйте последнему сообщению в #admins.",
    "During a real shift, Admin can change the rules at any time.":"Во время настоящей смены администратор может изменить правила в любой момент.",
    "A new rule has just appeared in #admins.":"В #admins только что появилось новое правило.",
    "Reject reasons come from evidence you actually discovered.":"Причины отказа появляются только из найденных вами доказательств.",
    "A case may have several valid reasons — or none at all.":"У дела может быть несколько причин — или ни одной.",
    "Wrong calls and unresolved incidents reduce Safety, Trust and Activity.":"Ошибочные решения и нерешённые инциденты снижают безопасность, доверие и активность.",
    "If one of them collapses, the community can fail.":"Если один из показателей рухнет, сообщество может погибнуть.",
    "Keep watching General after every decision.":"После каждого решения продолжайте следить за General.",
    "A bad entrant can create a second problem inside the chat.":"Опасный участник может создать новую проблему прямо в чате.",
    "Moderate suspicious messages directly in General.":"Модерируйте подозрительные сообщения прямо в General.",
    "Open the three-dot menu on the bad message.":"Откройте меню с тремя точками у опасного сообщения.",
    "First stop the link from spreading.":"Сначала остановите распространение ссылки.", "Delete the message.":"Удалите сообщение.",
    "Deleting the post is not enough.":"Удалить сообщение недостаточно.", "Ban the malicious account too.":"Также забаньте опасный аккаунт.",
    "Fast deletion and a ban prevent later losses and earn a recovery bonus.":"Быстрое удаление и бан предотвращают дальнейшие потери и дают бонус.",
    "Those are the core systems.":"Это основные системы.", "The live shift will add new rules, harder lies and consequences inside the chat.":"В настоящей смене появятся новые правила, более сложная ложь и последствия в чате."
  });
  Object.assign(phrasePacks.ru, {
    "New here. Learning how the server works.":"Я здесь недавно. Разбираюсь, как работает сервер.",
    "I build small browser games and tools.":"Я создаю небольшие браузерные игры и инструменты.",
    "Long-time community member.":"Давний участник сообщества.",
    "Browser games, tiny tools and too many prototypes.":"Браузерные игры, небольшие инструменты и слишком много прототипов.",
    "Community support and event help.":"Помогаю сообществу и мероприятиям.",
    "I make small tools for game jam teams.":"Делаю небольшие инструменты для команд геймджема.",
    "It shows the applicant's name, username, requested role and submitted details.":"Здесь указаны имя кандидата, ник, запрошенная роль и предоставленные данные.",
    "Never assume the Join Card is telling the whole truth.":"Не считайте, что карточка заявки всегда говорит всю правду.",
    "Bad entrants can cause incidents, and rule changes arrive in #admins.":"Опасные участники могут создавать инциденты, а изменения правил приходят в #admins.",
    "Safety, Trust and Activity measure the health of the server.":"Безопасность, доверие и активность показывают состояние сервера.",
    "The roster below shows the community you are building.":"Состав ниже показывает сообщество, которое вы создаёте.",
    "Always check the current Shift Rules first.":"Сначала всегда проверяйте текущие правила смены.",
    "Tonight, accounts must be at least 14 days old.":"Сегодня аккаунту должно быть не менее 14 дней.",
    "The record says this account is only 6 days old.":"В записи указано, что аккаунту всего 6 дней.",
    "Click ACCOUNT AGE to pick it up as evidence.":"Нажмите ВОЗРАСТ АККАУНТА, чтобы выбрать это как доказательство.",
    "That comparison confirmed the violation and unlocked a response.":"Сравнение подтвердило нарушение и открыло новый ответ.",
    "Tell the applicant what the current rule means.":"Объясните кандидату, что означает текущее правило.",
    "Now the account-age reason is documented.":"Теперь причина, связанная с возрастом аккаунта, подтверждена.",
    "It will be available in the rejection report.":"Она появится в отчёте об отказе.",
    "Open the rejection report.":"Откройте отчёт об отказе.",
    "Only reasons proven through Connect appear here.":"Здесь появляются только причины, доказанные через связь.",
    "ACCOUNT IS TOO NEW is available because you proved it against the rule.":"Причина «АККАУНТ СЛИШКОМ НОВЫЙ» доступна, потому что вы сопоставили её с правилом.",
    "Choose the documented reason.":"Выберите подтверждённую причину.",
    "Good call.":"Верное решение.", "A decision is only as strong as the rule and evidence behind it.":"Решение надёжно лишь настолько, насколько надёжны правило и доказательства.",
    "This applicant gave us a phone number.":"Этот кандидат указал номер телефона.",
    "A submitted number still needs to match the account and pass verification.":"Указанный номер должен совпасть с аккаунтом и пройти проверку.",
    "We already know this tool.":"Этот инструмент нам уже знаком.",
    "Open Account Details and compare the stored number.":"Откройте данные аккаунта и сравните сохранённый номер.",
    "This is the complete account record.":"Это полная запись аккаунта.",
    "Age, phone and moderation history all live here.":"Здесь находятся возраст, телефон и история модерации.",
    "The stored phone number matches the Join Card.":"Сохранённый номер совпадает с карточкой заявки.",
    "Now we still need to verify the number itself.":"Теперь нужно проверить сам номер.",
    "The lookup confirms the same number and VERIFIED: YES.":"Проверка подтверждает тот же номер и статус «ПОДТВЕРЖДЁН: ДА».",
    "All three pieces agree.":"Все три источника совпадают.",
    "The checks confirm they're legitimate.":"Проверки подтверждают, что кандидат настоящий.",
    "Checks are not only for finding problems.":"Проверки нужны не только для поиска проблем.",
    "They also confirm legitimate applicants.":"Они также подтверждают добросовестных кандидатов.",
    "Names can be deceptive.":"Имена могут обманывать.",
    "This time we'll check whether a similar identity is already inside.":"Теперь проверим, нет ли внутри пользователя с похожей личностью.",
    "This terminal searches existing server members only.":"Терминал ищет только участников, которые уже находятся на сервере.",
    "The applicant is not included unless they are impersonating someone already inside.":"Кандидат не появится в выдаче, если только не выдаёт себя за существующего участника.",
    "The search found an existing Mogster with a slightly different username.":"Поиск нашёл существующего Mogster с немного другим ником.",
    "Open that record.":"Откройте эту запись.", "Open the existing member's record.":"Откройте запись существующего участника.",
    "The existing member is online right now.":"Существующий участник сейчас в сети.",
    "Select the STATUS field as evidence.":"Выберите поле СТАТУС как доказательство.",
    "Click STATUS to pick it up as evidence.":"Нажмите СТАТУС, чтобы выбрать доказательство.",
    "The evidence is selected.":"Доказательство выбрано.",
    "Now click the mascot to connect the record to this applicant.":"Теперь нажмите на маскота, чтобы связать запись с кандидатом.",
    "Evidence can unlock questions that were not available before.":"Доказательства могут открывать вопросы, которых раньше не было.",
    "The existing member is already online.":"Существующий участник уже в сети.",
    "Good catch.":"Хорошо замечено.", "Small changes in a username can hide an impersonator.":"Небольшие изменения ника могут скрывать двойника.",
    "Anyone can claim a role on the Join Card.":"Любой может указать роль в карточке заявки.",
    "Recent public work is stronger proof than a confident introduction.":"Свежие публичные работы надёжнее уверенного рассказа.",
    "The tablet also includes an X Profile check.":"В планшете также есть проверка профиля X.",
    "Let's see whether this Builder actually builds.":"Проверим, действительно ли этот разработчик создаёт игры.",
    "This view shows the public profile, recent posts and engagement.":"Здесь видны публичный профиль, свежие посты и активность.",
    "Use the content itself, not only follower count.":"Оценивайте содержимое, а не только число подписчиков.",
    "This recent post shows active game development.":"Этот свежий пост показывает активную разработку игры.",
    "It supports the Builder claim.":"Он подтверждает роль разработчика.",
    "The role is supported.":"Роль подтверждена.",
    "Use X to verify roles and spot impossible engagement patterns.":"Используйте X, чтобы проверять роли и замечать невозможные показатели активности.",
    "Now you do the first part yourself.":"Теперь первую часть вы выполняете самостоятельно.",
    "This applicant has something in their account history. Find it.":"В истории аккаунта этого кандидата что-то есть. Найдите это.",
    "Choose the tool that can reveal moderation history.":"Выберите инструмент, который показывает историю модерации.",
    "Good. The record shows one previous ban.":"Хорошо. В записи есть один предыдущий бан.",
    "Select that field, then connect it to the applicant.":"Выберите это поле и свяжите его с кандидатом.",
    "Click PREVIOUS BANS to select the evidence.":"Нажмите ПРЕДЫДУЩИЕ БАНЫ, чтобы выбрать доказательство.",
    "Now click the mascot to connect the ban to this applicant.":"Теперь нажмите на маскота, чтобы связать бан с кандидатом.",
    "Use the question unlocked by the connection.":"Задайте вопрос, открытый этой связью.",
    "A warning is not always the whole story.":"Предупреждение не всегда раскрывает всю историю.",
    "The applicant says the ban was appealed, so send the case to Admin.":"Кандидат утверждает, что бан обжалован. Передайте дело администратору.",
    "Forward the case to Admin.":"Передайте дело администратору.",
    "I'll check the appeal record now.":"Сейчас я проверю запись об апелляции.",
    "Wait for the response in #admins.":"Дождитесь ответа в #admins.",
    "Here is the Admin verdict.":"Вот решение администратора.",
    "The ban was a false positive, so this applicant is clear.":"Бан был ошибочным, поэтому кандидата можно пропустить.",
    "Confirmed. The ban was a false positive.":"Подтверждено: бан был ошибочным.",
    "Context matters.":"Контекст важен.", "Investigate before making a decision.":"Проводите проверку перед решением.",
    "Last applicant.":"Последний кандидат.", "I'll give hints, but I won't point at every button now.":"Я буду давать подсказки, но больше не стану показывать каждую кнопку.",
    "Start by checking where this account has appeared before.":"Сначала проверьте, где этот аккаунт появлялся раньше.",
    "Try Device Check. I won't highlight it this time.":"Попробуйте «Проверку устройства». В этот раз я не буду её подсвечивать.",
    "This device has several accounts attached.":"К этому устройству привязано несколько аккаунтов.",
    "Open the usernames and inspect their records one by one.":"Открывайте имена и проверяйте записи по очереди.",
    "Find the linked account with moderation history, then open its record.":"Найдите связанный аккаунт с историей модерации и откройте его запись.",
    "One of the device accounts is @old_user. Check that record.":"Один из аккаунтов устройства — @old_user. Проверьте его запись.",
    "You found a banned account on the same device.":"Вы нашли забаненный аккаунт на том же устройстве.",
    "Select PREVIOUS BANS and connect it to the applicant.":"Выберите ПРЕДЫДУЩИЕ БАНЫ и свяжите их с кандидатом.",
    "Select the ban evidence yourself.":"Самостоятельно выберите доказательство бана.",
    "Now connect the selected record to the mascot.":"Теперь соедините выбранную запись с маскотом.",
    "Ask about the linked banned account.":"Спросите о связанном забаненном аккаунте.",
    "The record says the appeal was cleared.":"В записи сказано, что апелляция одобрена.",
    "You have the evidence and the explanation — now judge the risk.":"У вас есть доказательство и объяснение — теперь оцените риск.",
    "Good members grow the roster and keep the server alive.":"Хорошие участники расширяют состав и поддерживают жизнь сервера.",
    "Builders, Artists, Clipmakers and Supporters all help in different ways.":"Разработчики, художники, клипмейкеры и помощники полезны по-разному.",
    "A malicious link just appeared, and Safety and Trust dropped.":"Появилась опасная ссылка, а безопасность и доверие снизились.",
    "The longer an incident is ignored, the more damage it causes.":"Чем дольше игнорировать инцидент, тем больше ущерба он нанесёт.",
    "Complete the queue with strong decisions to earn a higher Moderator Score.":"Пройдите очередь с верными решениями, чтобы получить более высокий счёт модератора.",
    "Correct calls, healthy metrics and resolved incidents all matter.":"Важны верные решения, хорошие показатели и устранённые инциденты."
  });
  Object.assign(phrasePacks.ru, {
    "Rule update: we need Builders, so a Builder under 14 days may enter with phone verification and believable proof of work. We're also seeing fake roles — verify every Builder, Artist and Clipmaker through recent X posts.":"Обновление правил: нам нужны разработчики, поэтому аккаунт младше 14 дней можно пропустить при подтверждённом телефоне и убедительных доказательствах работы. Появились фальшивые роли — проверяйте разработчиков, художников и клипмейкеров по свежим постам в X.",
    "Tightening role checks: look for at least three relevant posts and at least one post with 50+ likes. Followers alone do not count as proof.":"Усиливаем проверку ролей: нужно не менее трёх подходящих постов и хотя бы один пост с 50+ лайками. Одни подписчики ничего не доказывают.",
    "Phone rule update: one verified number may serve at most two accounts. Builders may use it for three. Open the linked-account list and compare it yourself.":"Новое правило телефона: один подтверждённый номер допускается максимум для двух аккаунтов. Для разработчиков — до трёх. Откройте список связанных аккаунтов и сравните сами.",
    "We're seeing boosted X accounts. Compare followers, views, likes, reposts and replies. Impossible ratios or every metric spiking together are a reason to reject.":"Мы видим накрученные аккаунты X. Сравнивайте подписчиков, просмотры, лайки, репосты и ответы. Невозможные соотношения или одновременный скачок всех метрик — причина для отказа.",
    "Final rule update: new role applicants now need at least one recent X post that mentions Dlicom or the Dlicom jam. Check the post text yourself.":"Последнее обновление: кандидату на роль нужен хотя бы один свежий пост в X с упоминанием Dlicom или джема Dlicom. Проверяйте текст поста сами.",
    "Yo, what's going on? Too many people are being rejected without evidence. Check the records and document the reason before denying access.":"Эй, что происходит? Слишком много отказов без доказательств. Проверяйте данные и подтверждайте причину до отказа.",
    "Stop the shift. Three unsupported rejections is too much — I'm taking over moderation.":"Остановите смену. Три отказа без доказательств — это слишком много. Я забираю модерацию.",
    "Wait… seriously?":"Подождите… серьёзно?", "Aww. I brought snacks.":"Эх. Я даже принёс перекус.", "Guess I'll try again tomorrow.":"Попробую снова завтра.", "I even wore my good boots.":"Я даже надел хорошие ботинки.", "I practiced my intro for this.":"Я специально репетировал представление.",
    "Wow. Didn't even let me cook.":"Ничего себе. Даже не дали мне раскрыться.", "Rejected before I could say ‘gm’.":"Отказали раньше, чем я успел сказать «gm».", "I'm telling General about this.":"Я расскажу об этом в General.", "This is going in my villain origin story.":"Это войдёт в историю моего превращения в злодея.", "Moderator power trip detected.":"Обнаружено злоупотребление властью модератора.",
    "Your server is mid anyway.":"Да ваш сервер всё равно так себе.", "Worst mod on the server.":"Худший модератор на сервере.", "Enjoy your dead community.":"Наслаждайтесь своим мёртвым сообществом.", "Bro thinks he's security.":"Бро решил, что он охрана.", "Power went straight to your head.":"Власть сразу ударила вам в голову.",
    "Good choice.":"Хороший выбор.", "You weren't supposed to let me in.":"Вы и не должны были меня впускать.", "See you at 03:17.":"Увидимся в 03:17.", "The next one is lying.":"Следующий врёт.", "I'll wait outside.":"Я подожду снаружи.",
    "Thanks, mod!":"Спасибо, модератор!", "See you inside.":"Увидимся внутри.", "Appreciate it.":"Спасибо.", "Catch you in General.":"Увидимся в General.", "Good luck with the rest.":"Удачи с остальными.",
    "Easy.":"Легко.", "Knew I'd get in.":"Я знал, что войду.", "As expected.":"Как и ожидалось.", "Light work.":"Проще простого.", "That was quick.":"Быстро получилось.",
    "GG, gatekeeper.":"GG, привратник.", "W mod.":"W модератор.", "Rare moderator W.":"Редкая победа модератора.", "We take those.":"Засчитываем.", "Lobby speedrun complete.":"Спидран лобби завершён.",
    "That was it?":"И это всё?", "I prepared answers for nothing.":"Я зря готовил ответы.", "Thought this would take longer.":"Думал, это займёт больше времени.", "Okay, that was painless.":"Ладно, всё прошло безболезненно.", "No more questions?":"Больше вопросов нет?",
    "Trusting type, huh?":"Вы доверчивый, да?", "You didn't hesitate.":"Вы даже не сомневались.", "Interesting choice.":"Интересный выбор.", "Good instincts.":"Хорошая интуиция.", "That was almost too easy.":"Это было почти слишком легко.",
    "Good.":"Хорошо.", "You chose correctly.":"Вы выбрали правильно.", "This time.":"В этот раз.", "We'll talk again.":"Мы ещё поговорим.", "You won't remember me.":"Вы меня не запомните.",
    "You're making a big mistake.":"Вы совершаете большую ошибку.", "But the airdrop is real…":"Но аирдроп настоящий…", "Fine. More tokens for everyone else.":"Ладно. Остальным достанется больше токенов.", "My 48,000 followers disagree.":"Мои 48 000 подписчиков с вами не согласны.", "Wait, let me show you one more QR code.":"Подождите, покажу ещё один QR-код.",
    "Which account are you talking about?":"О каком аккаунте речь?", "The other one is obviously fake.":"Другой аккаунт явно поддельный.", "Identity is a social construct.":"Личность — это социальный конструкт.", "You caught the zero, huh?":"Вы заметили ноль, да?", "Fine. I'll change one more letter.":"Ладно. Поменяю ещё одну букву.",
    "Uh… I'm already in the Discord.":"Эм… я уже на сервере Discord.", "You could've checked my profile first.":"Сначала можно было проверить мой профиль.", "I've been here since 2024…":"Я здесь с 2024 года…", "My role is right there.":"Моя роль прямо там указана.", "I think you rejected the wrong person.":"Кажется, вы отклонили не того человека.",
    "That's your reason?":"И это ваша причина?", "You're gonna write that in the report?":"Вы правда запишете это в отчёт?", "Even I wouldn't reject me for that.":"Даже я бы не отказал себе по такой причине.", "Can I speak to your admin?":"Можно поговорить с администратором?", "That explanation somehow made it worse.":"Это объяснение сделало всё только хуже."
  });
  Object.assign(phrasePacks.ru, {
    "A browser game for the jam. Combat finally works.":"Браузерную игру для джема. Боевая система наконец заработала.",
    "Saw the open call in the builder feed.":"Увидел открытый набор в ленте разработчиков.", "The devlog is on my X profile.":"Дневник разработки есть в моём профиле X.",
    "No one — the lobby post said visitors were welcome.":"Никто — в посте о лобби было сказано, что гости приветствуются.", "Mostly creature concepts and UI paintovers.":"В основном концепты существ и перерисовка интерфейсов.", "Sure. My portfolio thread is pinned.":"Конечно. Ветка с портфолио закреплена.",
    "Mostly private stuff. I deleted the good ones.":"В основном закрытые работы. Лучшие я удалил.", "Uh, one of the builders. I forgot the name.":"Эм, кто-то из разработчиков. Я забыл имя.", "Big audience. Good opportunities.":"Большая аудитория. Хорошие возможности.",
    "A tiny browser dungeon. The save system works now.":"Небольшой браузерный данжен. Система сохранений уже работает.", "My old account was tied to a school email.":"Старый аккаунт был привязан к школьной почте.", "Yep — eleven days of clips on X.":"Да — в X есть одиннадцать дней записей разработки.",
    "Session bug. You know how Discord is.":"Ошибка сессии. Вы же знаете Discord.", "The usual one. You remember.":"Обычный проект. Вы помните.", "Come on. Don't make this weird.":"Да ладно. Не делайте всё странным.",
    "Pretty sure Dili said it on stream.":"Кажется, Dili говорил об этом на стриме.", "A wallet helper. Totally safe.":"Помощник для кошелька. Полностью безопасный.", "The old messages are gone. You'll have to trust me.":"Старых сообщений нет. Придётся мне поверить.",
    "Alex. We're doing the key art after stand-up.":"Alex. После созвона мы делаем ключевой арт.", "Environments, key art, the occasional weird frog.":"Окружение, ключевой арт и иногда странные лягушки.", "They said they'd post in general.":"Он сказал, что напишет в General.",
    "Applications for building permits, estimates, all the paperwork. Then my crew builds the house.":"Заявки на разрешение строительства, сметы и документы. Потом моя бригада строит дом.", "Sure. Foundations, roofing, renovations — full construction service.":"Конечно. Фундаменты, крыши, ремонт — полный набор строительных услуг.", "Not personally. I thought Builder meant construction builder.":"Лично нет. Я думал, Builder означает строителя домов.",
    "Changed numbers yesterday. Support hasn't fixed it.":"Вчера сменил номер. Поддержка ещё не исправила проблему.", "A cozy ruin crawler. I can show the repo.":"Уютный краулер по руинам. Могу показать репозиторий.", "Nobody. Builder call was public.":"Никто. Набор разработчиков был открытым.",
    "I'm not.":"Я не в сети.", "You aren't supposed to ask that in the lobby.":"Вы не должны спрашивать об этом в лобби.", "The other window.":"Из другого окна.",
    "Your clock is slow.":"Ваши часы отстают.", "The last person you'll reject tonight.":"Последний человек, которому вы сегодня откажете.", "You did. Tomorrow.":"Вы. Завтра.",
    "A co-op maze. Proof is public.":"Кооперативный лабиринт. Доказательства открыты.", "Because they know what you expect.":"Потому что они знают, чего вы ждёте.", "Someone completely normal.":"Кто-то совершенно обычный.",
    "A puzzle game about moving shadows.":"Головоломку о перемещении теней.", "I followed the public jam link.":"Я перешёл по публичной ссылке джема.", "No. Should there be?":"Нет. А должно быть?",
    "You, after the shift.":"Вы после смены.", "You're asking the wrong copy.":"Вы спрашиваете не ту копию.", "The queue starts again.":"Очередь начнётся заново.",
    "I saw the community link and wanted to look around.":"Я увидел ссылку сообщества и захотел осмотреться.", "No one. I found the public invite.":"Никто. Я нашёл публичное приглашение.", "Yes. I only made it six days ago.":"Да. Я создал его всего шесть дней назад.",
    "A small browser platformer for the jam.":"Небольшой браузерный платформер для джема.", "I followed the builder call.":"Я пришёл по объявлению для разработчиков.", "The progress posts are public on X.":"Посты о прогрессе открыты в X.",
    "Discord logged me out. Just let me back in.":"Discord меня разлогинил. Просто впустите обратно.", "This one. The other Mogster is fake.":"Этот. Другой Mogster — поддельный.", "You should already know me.":"Вы и так должны меня знать.",
    "A browser roguelite for the jam.":"Браузерный рогалик для джема.", "Three recent posts are on my X profile.":"В моём профиле X есть три свежих поста.", "The public builder announcement.":"Публичное объявление для разработчиков.",
    "I want to help with the jam support queue.":"Я хочу помочь с очередью поддержки джема.", "Retree reviewed my appeal.":"Retree рассмотрел мою апелляцию.", "Yes. I reset everything after the raid.":"Да. После рейда я всё сбросил.",
    "Utilities for jam teams — exports, task boards and build checks.":"Инструменты для команд джема: экспорт, доски задач и проверки сборок.", "First time at the window, not my first Discord account.":"У окна впервые, но это не мой первый аккаунт Discord.", "An old device account has a ban that was cleared on appeal.":"У старого аккаунта на устройстве есть бан, снятый после апелляции.",
    "My Discord was compromised. Those phishing links weren't mine — ask the admins.":"Мой Discord взломали. Фишинговые ссылки были не мои — спросите администраторов.",
    "My Discord was compromised and the hacked account spammed invites. Rex helped me file the appeal.":"Мой Discord взломали, и аккаунт рассылал приглашения. Rex помог подать апелляцию.",
    "That other account is the fake one. Mine is the real profile.":"Другой аккаунт поддельный. Мой профиль настоящий.",
    "I build houses. I thought the Builder role covered that.":"Я строю дома. Думал, роль Builder подходит и для этого.", "They don't show everything I do. I still know the work.":"Они показывают не всю мою работу. Я всё равно умею это делать."
  });

  let locale = localStorage.getItem("dlicom-language") || "en";
  if (!languages.some(language => language.code === locale)) locale = "en";

  function format(template, variables = {}) {
    return String(template).replace(/\{(\w+)\}/g, (_, key) => variables[key] ?? `{${key}}`);
  }

  function t(key, variables = {}) {
    return format(packs[locale]?.[key] ?? en[key] ?? key, variables);
  }

  const englishKeyByValue = new Map(Object.entries(en).map(([key, value]) => [String(value), key]));

  function phrase(text) {
    const source = String(text);
    const custom = phrasePacks[locale]?.[source];
    if (custom) return custom;
    const key = englishKeyByValue.get(source);
    if (key) return t(key);
    if (locale !== "en") {
      const unitMatch = source.match(/^([−-]?\d[\d,]*)\s+(day|days|month|months|year|years)(\s+ago)?$/i);
      if (unitMatch) {
        const amount = Number(unitMatch[1].replace("−", "-").replaceAll(",", ""));
        const unit = unitMatch[2].toLowerCase().startsWith("day") ? "day" : unitMatch[2].toLowerCase().startsWith("month") ? "month" : "year";
        if (unitMatch[3]) return new Intl.RelativeTimeFormat(locale, { numeric:"always" }).format(-amount, unit);
        return new Intl.NumberFormat(locale, { style:"unit", unit, unitDisplay:"long" }).format(amount);
      }
      if (/^[A-Z][a-z]{2}\s+\d{1,2},\s+\d{4}$/.test(source)) {
        const date = new Date(`${source} 00:00:00 UTC`);
        if (!Number.isNaN(date.valueOf())) return new Intl.DateTimeFormat(locale, { day:"numeric", month:"short", year:"numeric", timeZone:"UTC" }).format(date);
      }
      if (/^[A-Z][a-z]{2}\s+\d{4}$/.test(source)) {
        const date = new Date(`${source.replace(" ", " 1, ")} 00:00:00 UTC`);
        if (!Number.isNaN(date.valueOf())) return new Intl.DateTimeFormat(locale, { month:"short", year:"numeric", timeZone:"UTC" }).format(date);
      }
    }
    return source;
  }

  function setText(selector, key, variables) {
    const node = document.querySelector(selector);
    if (node) node.textContent = t(key, variables);
  }

  function applyStatic() {
    document.documentElement.lang = locale;
    document.body.dataset.language = locale;
    setText(".rotate-gate > div > span", "rotateEyebrow");
    setText("#rotateGateTitle", "rotateTitle");
    setText(".rotate-gate p", "rotateText");
    setText(".rotate-gate small", "rotateHint");
    setText("#mobileChatToggle b", "chat"); setText("#mobileRulesToggle b", "rules"); setText("#mobileDecisionToggle b", "decide");
    setText("#mobileEvidenceChip > span", "evidenceSelected"); setText("#mobileEvidenceName", "accountRecord"); setText("#mobileEvidenceHint", "tapMascot");
    setText(".health-stat.safety i", "safety"); setText(".health-stat.trust i", "trust"); setText(".health-stat.activity i", "activity");
    const rosterKeys = ["builders","artists","clipmakers","supporters","members"];
    document.querySelectorAll(".community-roster i").forEach((node,index) => { if (rosterKeys[index]) node.textContent = t(rosterKeys[index]); });
    const brandStrong = document.querySelector(".brand-lockup strong");
    if (brandStrong?.childNodes[0]) brandStrong.childNodes[0].textContent = t("lobbyAccess");
    const brandSmall = document.querySelector(".brand-lockup small"); if (brandSmall) brandSmall.textContent = t("dlicomCommunity");
    setText(".talk-hint", "clickQuestion"); setText("#closeQuestions span", "ask");
    const closeQuestions = document.querySelector("#closeQuestions small"); if (closeQuestions) closeQuestions.textContent = `× ${t("close")}`;
    setText(".player-question span", "you");
    setText("#adminReviewButton span", "questionBan"); setText("#adminReviewButton b", "askAdmins");
    const rail = document.querySelectorAll(".window-rail span"); if (rail[0]) rail[0].textContent=t("glass"); if (rail[1]) rail[1].textContent=t("mic");
    const tools = [
      ["[data-tool='search'] b","search","onServer"],["[data-tool='device'] b","device","check"],["[data-tool='account'] b","account","details"],["[data-tool='phone'] b","phone","lookup"],["[data-tool='x'] b","xProfile","recentPosts"]
    ];
    tools.forEach(([selector,main,small]) => { const node=document.querySelector(selector); if(node){ const sub=node.querySelector("small"); node.childNodes[0].textContent=t(main); if(sub)sub.textContent=t(small); } });
    setText(".tool-tray-head span", "modTerminal"); setText("#databaseForm label", "usernameReady"); setText("#databaseForm button", "searchAction"); setText("#xForm label", "xReady"); setText("#xForm button", "openAction");
    const dbInput=document.querySelector("#databaseInput"); if(dbInput)dbInput.placeholder=t("typeUsername"); const xInput=document.querySelector("#xInput"); if(xInput)xInput.placeholder=t("typeHandle");
    setText(".shift-count span", "shift"); setText(".master-volume span", "volume"); setText("#soundLabel", "soundOn"); setText("#chatSoundLabel", "chatOn"); setText(".rules-paper header strong", "shiftRules");
    const memoNote = document.querySelector(".memo-note span"); if (memoNote) memoNote.innerHTML = t("checkAdmins").replace("#admins", "<b>#admins</b>");
    const caseNode = document.querySelector("#caseId"); if (caseNode) caseNode.textContent = `${t("case")} // ${(caseNode.textContent.match(/\d+/) || ["001"])[0]}`;
    setText("#checksCount", "checkRecords");
    setText(".decision-label span", "decision"); setText("#acceptButton b", "letIn"); setText("#acceptButton small", "grantAccess"); setText("#rejectButton b", "reject"); setText("#rejectButton small", "denyEntry");
    const shortcut = document.querySelector(".shortcut-copy"); if (shortcut) shortcut.innerHTML = `<kbd>A</kbd> ${t("letIn")} <kbd>R</kbd> ${t("reject")}`;
    setText("#rejectOverlay header span", "denyAccess"); setText("#rejectTitle", "chooseReason"); setText("#rejectOverlay > div > p", "onlyEvidence");
    setText(".start-card > .eyebrow", "startEyebrow");
    const startTitle=document.querySelector("#startTitle"); if(startTitle)startTitle.innerHTML=`${t("night")}<br><em>${t("shiftWord")}</em>`;
    setText(".start-card > p", "startText");
    const briefing=document.querySelectorAll(".briefing-grid > div");
    if(briefing[0])briefing[0].querySelector("span").textContent=t("shift");
    if(briefing[1]){briefing[1].querySelector("span").textContent=t("queue");briefing[1].querySelector("strong").textContent=t("visitors",{count:20});}
    if(briefing[2]){briefing[2].querySelector("span").textContent=t("firstStep");briefing[2].querySelector("strong").textContent=t("readAdmins");}
    setText(".pool-selector-head span", "applicantPool"); setText("#poolTitle", "chooseRegion");
    setText("#startButton span", "play"); setText("#trainingButton span", "training"); setText(".start-card > small", "headphones");
    setText(".language-selector-head span", "language"); setText("#languageTitle", "chooseLanguage");
    setText(".training-admin header small", "trainingAdmin"); setText("#trainingSkipButton", "skipTraining");
    setText("#trainingSkipConfirm > div > span", "trainingSession"); setText("#trainingSkipTitle", "skipQuestion"); setText("#trainingSkipConfirm p", "progressCleared"); setText("#trainingSkipCancel", "cancel"); setText("#trainingSkipAccept", "skip");
    setText("#trainingComplete > div > .eyebrow", "tutorialComplete"); setText("#trainingCompleteTitle", "trainingComplete"); setText("#trainingComplete > div > p", "youKnow");
    const checklistKeys=["checkAccounts","verifyPhones","searchImpersonators","inspectX","investigateBans","checkDevices","followRules","protectHealth","monitorGeneral","sendAdmin"];
    document.querySelectorAll(".training-checklist span").forEach((node,index)=>{if(checklistKeys[index])node.textContent=`✓ ${t(checklistKeys[index])}`;});
    setText(".training-complete-card > strong", "returnReady"); const menuButton=document.querySelector("#trainingPlayButton"); if(menuButton)menuButton.childNodes[0].textContent=`${t("returnMenu")} `;
    setText("#endTitle", "shiftComplete"); setText(".final-score span", "moderatorScore"); setText("#endMessage", "survived");
    const finalCommunity=["safety","trust","activity"]; document.querySelectorAll(".final-community span").forEach((node,index)=>{if(finalCommunity[index])node.textContent=t(finalCommunity[index]).toUpperCase();});
    const finalRoster=["builders","artists","clipmakers","supporters","members"]; document.querySelectorAll(".final-roster > span").forEach((node,index)=>{const b=node.querySelector("b"); if(finalRoster[index]&&b)node.childNodes[0].textContent=`${t(finalRoster[index])} `;});
    const report=["correctCalls","mistakes","scammersStopped","impostorsCaught","falseRejects","incidentsResolved"]; document.querySelectorAll(".report-stats span").forEach((node,index)=>{if(report[index])node.textContent=t(report[index]);});
    setText("#restartButton", "runAnother");
    document.querySelectorAll(".language-choice").forEach(button => button.classList.toggle("active",button.dataset.language===locale));
  }

  function setLocale(next) {
    if (!languages.some(language => language.code === next)) return;
    locale = next;
    localStorage.setItem("dlicom-language", locale);
    applyStatic();
    document.dispatchEvent(new CustomEvent("dlicom:languagechange", { detail: { locale } }));
  }

  window.DLICOM_I18N = { languages, keys: Object.freeze(Object.keys(en)), t, phrase, applyStatic, setLocale, get locale() { return locale; } };
  applyStatic();
})();
