var LEVEL_STATUS;
function CGfxButton(e, t, n, i) {
    var o, a, s, r, l, c, d, h, u, _ = !1;
    return (
        (this._init = function (e, t, n) {
            (o = new Array()),
                (a = new Array()),
                (r = new Array()),
                (s = createBitmap(n)),
                (s.x = e),
                (s.y = t),
                (l = 1),
                (c = 1),
                (s.regX = n.width / 2),
                (s.regY = n.height / 2),
                s_bMobile || (s.cursor = "pointer"),
                u.addChild(s),
                this._initListener();
        }),
        (this.unload = function () {
            s.off("mousedown", this.buttonDown), s.off("pressup", this.buttonRelease), u.removeChild(s);
        }),
        (this.setVisible = function (e) {
            s.visible = e;
        }),
        (this.setCursorType = function (e) {
            s.cursor = e;
        }),
        (this._initListener = function () {
            s.on("mousedown", this.buttonDown), s.on("pressup", this.buttonRelease);
        }),
        (this.addEventListener = function (e, t, n) {
            (o[e] = t), (a[e] = n);
        }),
        (this.addEventListenerWithParams = function (e, t, n, i) {
            (o[e] = t), (a[e] = n), (r[e] = i);
        }),
        (this.buttonRelease = function () {
            _ || (l > 0 ? (s.scaleX = 1) : (s.scaleX = -1), (s.scaleY = 1), playSound("click", 1, 0), o[ON_MOUSE_UP] && o[ON_MOUSE_UP].call(a[ON_MOUSE_UP], r[ON_MOUSE_UP]));
        }),
        (this.buttonDown = function () {
            _ || (l > 0 ? (s.scaleX = 0.9) : (s.scaleX = -0.9), (s.scaleY = 0.9), o[ON_MOUSE_DOWN] && o[ON_MOUSE_DOWN].call(a[ON_MOUSE_DOWN], r[ON_MOUSE_DOWN]));
        }),
        (this.rotation = function (e) {
            s.rotation = e;
        }),
        (this.getButton = function () {
            return s;
        }),
        (this.setPosition = function (e, t) {
            (s.x = e), (s.y = t);
        }),
        (this.setX = function (e) {
            s.x = e;
        }),
        (this.setY = function (e) {
            s.y = e;
        }),
        (this.getButtonImage = function () {
            return s;
        }),
        (this.block = function (e) {
            (_ = e), (s.scaleX = l), (s.scaleY = c);
        }),
        (this.setScaleX = function (e) {
            (s.scaleX = e), (l = e);
        }),
        (this.getX = function () {
            return s.x;
        }),
        (this.getY = function () {
            return s.y;
        }),
        (this.pulseAnimation = function () {
            h = createjs.Tween.get(s)
                .to({ scaleX: 0.9 * l, scaleY: 0.9 * c }, 850, createjs.Ease.quadOut)
                .to({ scaleX: l, scaleY: c }, 650, createjs.Ease.quadIn)
                .call(function () {
                    d.pulseAnimation();
                });
        }),
        (this.trebleAnimation = function () {
            h = createjs.Tween.get(s)
                .to({ rotation: 5 }, 75, createjs.Ease.quadOut)
                .to({ rotation: -5 }, 140, createjs.Ease.quadIn)
                .to({ rotation: 0 }, 75, createjs.Ease.quadIn)
                .wait(750)
                .call(function () {
                    d.trebleAnimation();
                });
        }),
        (this.removeAllTweens = function () {
            createjs.Tween.removeTweens(s);
        }),
        (u = void 0 !== i ? i : s_oStage),
        this._init(e, t, n),
        (d = this),
        this
    );
}
function TimeSeries(e) {
    (e = e || {}),
        (e.resetBoundsInterval = e.resetBoundsInterval || 3e3),
        (e.resetBounds = void 0 === e.resetBounds ? !0 : e.resetBounds),
        (this.options = e),
        (this.data = []),
        (this.label = e.label || ""),
        (this.maxDataLength = e.maxDataLength || 1e3),
        (this.dataPool = []),
        (this.maxValue = Number.NaN),
        (this.minValue = Number.NaN),
        e.resetBounds &&
            (this.boundsTimer = setInterval(
                (function (e) {
                    return function () {
                        e.resetBounds();
                    };
                })(this),
                e.resetBoundsInterval
            ));
}
function SmoothieChart(e) {
    (e = e || {}),
        (e.grid = e.grid || { fillStyle: "#000000", strokeStyle: "#777777", lineWidth: 1, millisPerLine: 1e3, verticalSections: 2, opacity:0 }),
        (e.millisPerPixel = e.millisPerPixel || 20),
        (e.fps = e.fps || 50),
        (e.maxValueScale = e.maxValueScale || 1),
        (e.minValue = e.minValue),
        (e.maxValue = e.maxValue),
        (e.labels = e.labels || { fillStyle: "#ffffff" }),
        (e.interpolation = e.interpolation || "bezier"),
        (e.scaleSmoothing = e.scaleSmoothing || 0.125),
        (e.maxDataSetLength = e.maxDataSetLength || 2),
        (e.timestampFormatter = e.timestampFormatter || null),
        (this.options = e),
        (this.seriesSet = []),
        (this.currentValueRange = 1),
        (this.currentVisMinValue = 0);
}
function CLaunchBoard(e) {
    var t, n, i, o, a, s, r = e;
    return (
        (this._init = function () {
            (t = { x: CANVAS_WIDTH_HALF + 660, y: CANVAS_HEIGHT - 60 }),
                (a = new createjs.Container()),
                (a.x = t.x),
                (a.y = t.y),
                r.addChild(a),
                (n = new createjs.Text("99" + TEXT_OF + NUM_OF_PENALTY, "50px " + FONT_GAME, TEXT_COLOR)),
                (n.textAlign = "right"),
                (n.y = - 5000),
                a.addChild(n),
                (a.y = t.y),
                r.addChild(a),
                (i = new createjs.Text("99" + TEXT_OF + NUM_OF_PENALTY, "50px " + FONT_GAME, TEXT_COLOR_STROKE)),
                (i.textAlign = "right"),
                (i.y = n.y),
                (i.outline = OUTLINE_WIDTH),
                a.addChild(i);
            var e = s_oSpriteLibrary.getSprite("shot_left");
            (o = createBitmap(e)), (o.x = 1.4 * -n.getBounds().width), (o.regX = 0.5 * e.width - 500), (o.regY = 10), a.addChild(o), (s = a.getBounds()), this.updateCache();
        }),
        (this.updateCache = function () {
            a.cache(-s.width, -s.height, 2 * s.width, 2 * s.height);
        }),
        (this.getStartPos = function () {
            return t;
        }),
        (this.setPos = function (e, t) {
            (a.x = e), (a.y = t);
        }),
        (this.refreshTextLaunch = function (e, t) {
            (n.text = e + TEXT_OF + t), (i.text = n.text), (o.x = 1.4 * -n.getBounds().width), this.updateCache();
        }),
        this._init(),
        this
    );
}
function CPlayer(e, t, n) {
    var i, o, a = new Array(), s = n, r = 0, l = 0;
    return (
        (this._init = function (e, t) {
            (i = { x: e, y: t }), (o = new createjs.Container()), (o.x = i.x), (o.y = i.y), s.addChild(o);
            for (var n = 0; NUM_SPRITE_PLAYER > n; n++) a.push(createBitmap(s_oSpriteLibrary.getSprite("player_" + n))), (a[n].visible = !1), o.addChild(a[n]);
            var r = s_oSpriteLibrary.getSprite("player_0");
            o.cache(0, 0, r.width, r.height), (a[0].visible = !0);
        }),
        (this.setPosition = function (e, t) {
            (o.x = e), (o.y = t);
        }),
        (this.getX = function () {
            return o.x;
        }),
        (this.getY = function () {
            return o.y;
        }),
        (this.getStartPos = function () {
            return i;
        }),
        (this.setVisible = function (e) {
            o.visible = e;
        }),
        (this.animFade = function (e) {
            var t = this;
            createjs.Tween.get(o)
                .to({ alpha: e }, 250)
                .call(function () {
                    0 === e && ((o.visible = !1), t.hideCharacter(NUM_SPRITE_PLAYER - 1), t.viewCharacter(r));
                });
        }),
        (this.viewCharacter = function (e) {
            a[e].visible = !0;
        }),
        (this.hideCharacter = function (e) {
            a[e].visible = !1;
        }),
        (this.getFrame = function () {
            return r;
        }),
        (this.animPlayer = function () {
            if (((l += s_iTimeElaps), l > BUFFER_ANIM_PLAYER)) {
                if ((this.hideCharacter(r), !(NUM_SPRITE_PLAYER > r + 1))) return this.viewCharacter(r), (r = 0), (l = 0), !1;
                this.viewCharacter(r + 1), r++, o.updateCache(), (l = 0);
            }
            return !0;
        }),
        this._init(e, t),
        this
    );
}
function CGame(e) {
    var goalCount = 0;
    var t, n, def, i, o, a, s, r, l, c, d, h, u, _, p, E, f, m, g, T, A, S = null, v = null, b = !1, y = !1, w = !1, x = !1, O = !1, C = !1, L = !1, R = !1, N = !1, M = 1, I = 0, H = 0, P = 0, G = STATE_INIT, D = null;
    (this._init = function () {
        $(s_oMain).trigger("start_session"),
            this.pause(!0),
            $(s_oMain).trigger("start_level", M),
            (_ = 0),
            (g = 1),
            (T = new Array()),
            (s = new createjs.Container()),
            s_oStage.addChild(s),
            (n = createBitmap(s_oSpriteLibrary.getSprite("bg_game")), undefined, undefined, CANVAS_WIDTH, CANVAS_HEIGHT),
            n.cache(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT),
            s.addChild(n),
            (i = new CScenario(M)),
            (D = SHOW_3D_RENDER ? camera : createOrthoGraphicCamera());
        var e = s_oSpriteLibrary.getSprite("goal");
        (u = new CGoal(291, 28, e, s)), 
            (n = createBitmap(s_oSpriteLibrary.getSprite("odd_middle_green")),undefined, undefined, 300, 80),
            (n.x = 371),
                (n.y = 131),
            s.addChild(n), 
            (n = new createjs.Text("3", "15px " + FONT_GAME, TEXT_COLOR)),
            (n.textAlign = "center"),
            (n.y = 80),
            s.addChild(n), 
            (n = createBitmap(s_oSpriteLibrary.getSprite("odds-blue-left")),undefined, undefined, 300, 80),
            (n.x = 308),
            (n.y = 129),
            s.addChild(n),  
            
            (n = createBitmap(s_oSpriteLibrary.getSprite("odds-blue-right")),undefined, undefined, 600, 80),
            (n.x = 999.5),
                (n.y = 129),
            s.addChild(n), 
            (n = createBitmap(s_oSpriteLibrary.getSprite("odd_top_blue")),undefined, undefined, 300, 80),
            (n.x = 370),
                (n.y = 40),
            s.addChild(n),
            (n = createBitmap(s_oSpriteLibrary.getSprite("odd_left_red")),undefined, undefined, 230, 01),
            (n.x = 300),
            (n.y = 45),
            s.addChild(n),
            (n = createBitmap(s_oSpriteLibrary.getSprite("odd_right_red")),undefined, undefined, 940, 01),
            (n.x = 998),
                (n.y = 45),
            s.addChild(n), 
            (def = createBitmap(s_oSpriteLibrary.getSprite("defender")),undefined, undefined, 300, 867),
            (def.x = 320),
                (def.y = 30),
            s.addChild(def), 
            
        // createjs.Ticker.addEventListener("tick", stage);
            //  (n = createBitmap(s_oSpriteLibrary.getSprite("odds-defender")),undefined, undefined, 940, 01),
            // (n.x = 250),
            //     (n.y = 400),
            // s.addChild(n), 
            //  (n = createBitmap(s_oSpriteLibrary.getSprite("odds-gk")),undefined, undefined, 940, 01),
            // (n.x = 998),
            //     (n.y = 45),
            // s.addChild(n),
          
        (S = new CGoalKeeper(CANVAS_WIDTH_HALF - 100, CANVAS_HEIGHT_HALF - 225, s)), T.push(S);
        ////// console.log(S, T, 'goalKeeper');
        var r = s_oSpriteLibrary.getSprite("ball");
        (o = new CBall(0, 0, r, i.ballBody(), s)),
            T.push(o),
            this.ballPosition(),
            o.setVisible(!1),
            (m = MS_TIME_SWIPE_START),
            (a = new CStartBall(CANVAS_WIDTH_HALF + 55, CANVAS_HEIGHT_HALF + 168, s)),
            (d = new CPlayer(CANVAS_WIDTH_HALF - 150, CANVAS_HEIGHT_HALF - 320, s)),
            d.setVisible(!1);
        var l = "cursor";
        s_bMobile && (l = "hand_touch"),
            (h = new CHandSwipeAnim(START_HAND_SWIPE_POS, END_HAND_SWIPE_POS, s_oSpriteLibrary.getSprite(l), s_oStage)),
            h.animAllSwipe(),
            resizeCanvas3D(),
            setVolume(s_oSoundTrack, 0.35),
            (t = new CInterface()),
            t.refreshTextScoreBoard(0, 0, 0, !1),
            t.refreshLaunchBoard(I, NUM_OF_PENALTY),
            (A = new CANNON.Vec3(0, 0, 0)),
            this.onExitHelp();
    }),
        (this.createControl = function () {
            SHOW_3D_RENDER
                ? (window.addEventListener("mousedown", this.onMouseDown), window.addEventListener("mousemove", this.onPressMove), window.addEventListener("mouseup", this.onPressUp))
                : ((c = new createjs.Shape()),
                  c.graphics.beginFill("rgba(255,0,0,0.01)").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT),
                  s.addChild(c),
                  c.on("mousedown", this.onMouseDown),
                  c.on("pressmove", this.onPressMove),
                  c.on("pressup", this.onPressUp));
        }),
        (this.sortDepth = function (e, t) {
            e.getDepthPos() > t.getDepthPos()
                ? s.getChildIndex(e.getObject()) > s.getChildIndex(t.getObject()) && s.swapChildren(e.getObject(), t.getObject())
                : e.getDepthPos() < t.getDepthPos() && s.getChildIndex(t.getObject()) > s.getChildIndex(e.getObject()) && s.swapChildren(t.getObject(), e.getObject());
        }),
        (this.onExitHelp = function () {
            this.createControl(), this.pause(!1);
        }),
        (this.poleCollide = function () {
            (f = TIME_POLE_COLLISION_RESET), (N = !0), playSound("pole", 0.4, 0);
        }),
        (this.fieldCollision = function () {
            null === v &&
                y &&
                ((v = playSound("drop_bounce_grass", 0.3, 0)),
                v.on("complete", function () {
                    v.removeAllEventListeners(), (v = null);
                }));
        }),
        (this.ballPosition = function () {
            var e = i.ballBody(),
                t = this.convert3dPosTo2dScreen(e.position, D),
                n = t.z * (BALL_SCALE_FACTOR - o.getStartScale()) + o.getStartScale();
            o.setPosition(t.x, t.y), o.scale(n), this.refreshShadowCast(o, e, n);
        }),
        (this.onMouseDown = function (e) {
            y || ((m = MS_TIME_SWIPE_START), h.removeTweens(), h.setVisible(!1), (r = { x: s_oStage.mouseX, y: s_oStage.mouseY }));
        }),
        (this.onPressMove = function () {
            (l = { x: s_oStage.mouseX, y: s_oStage.mouseY }), (P += s_iTimeElaps);
        }),
        (this.onPressUp = function () {
            if (!y) {
                // console.log(JSON.stringify({'point': 0, 'r':r, 'l':l}), l, FORCE_RATE, 'original' ,'GK_ODD => ', GK_ODD);
                var position = '';

                if(l){
                    position = 'MIDDLE';
                    if(l.x > 750) {
                        position = 'RIGHT'
                    } else if(l.x < 750){
                        position = 'LEFT'
                    } 
                    if(l.x > 620 && l.x < 750){
                        position = 'MIDDLE';
                    }

                }

                // console.log(l.x > 620 && l.x < 750, l.x > 620, l.x < 750);
                
                var indexVal = AREAS_INFO.findIndex(job => job.value == GK_ODD);

                // console.log('indexVal => ', indexVal);
                arr = [
                    {"point":0,"r":{"x":719.9894514767932,"y":475.45590433482806},"l":{"x":423.5056258790436,"y":44.9626307922272} , color: 'O', pos: 'LEFT'},
                    
                    {"point":1,"r":{"x":684.6642599277978,"y":490.7975460122699},"l":{"x":714.1227436823106,"y":207.1165644171779}, color: 'G', pos: 'MIDDLE'},

                    {"point":2,"r":{"x":653.0414908579465,"y":468.75934230194315},"l":{"x":918.9205344585091,"y":95.66517189835575}, color: 'O', pos: 'RIGHT'},

                {"point":3,"r":{"x":713.2946554149086,"y":457.2795216741405},"l":{"x":521.0583684950773,"y":260.20926756352765} , color: 'B', pos: 'LEFT'},

                {point:4,
                    r: {x: 695.4657039711192, y: 461.3496932515337},
                    l:{x: 667.971119133574, y: 273.8650306748466}, color: 'Y', pos: 'MIDDLE'},


                    {"point":5,"r":{"x":694.1666666666666,"y":446.7563527653213},"l":{"x":870.1441631504922,"y":220.02989536621823}, color: 'B', pos: 'RIGHT'},

                   {"point":6,"r":{"x":713.2946554149086,"y":457.2795216741405},"l":{"x":521.0583684950773,"y":60.20926756352765} , color: 'W', pos: 'MIDDLE'},
                   {"point":7,"r":{"x":713.2946554149086,"y":457.2795216741405},"l":{"x":516.0583684950773,"y":260.20926756352765} , color: 'W', pos: 'LEFT'},
                    {"point":8,"r":{"x":713.2946554149086,"y":457.2795216741405},"l":{"x":918.0583684950773,"y":260.20926756352765} , color: 'W', pos: 'RIGHT'}, 
                    {"point":9,"r":{"x":713.2946554149086,"y":457.2795216741405},"l":{"x":541.0583684950773,"y":260.20926756352765} , color: 'W', pos: 'RIGHT'},



            ];
            var pos = o.getPhysics().position;
            console.log(pos, 'position');
            if(indexVal > -1){
                var indVal = -1;
                if(arr[indexVal].pos !== position){
                    indVal = arr.findIndex((job, ind) => AREAS_INFO[ind] && AREAS_INFO[ind].value == GK_ODD && job.pos == position);
                    if(indVal > -1){
                        indexVal = indVal;
                    }
                }
                // indexVal = 3;
                pos = arr[indexVal].pos;
                console.log(GUARD_HIT, 'GUARD_HIT');

                if(pos == 'LEFT' && !GUARD_HIT){
                    createjs.Tween.get(def, {loop: false})
          .to({x: 950}, 950, createjs.Ease.getPowInOut(4))
       
        createjs.Ticker.setFPS(60);
    } else if(pos == 'RIGHT'){
                    createjs.Tween.get(def, {loop: false})
                    .to({x: 240}, 800, createjs.Ease.getPowInOut(2));
                  createjs.Ticker.setFPS(60);
                }

                if(pos == 'LEFT' && GUARD_HIT){
                    createjs.Tween.get(def, {loop: false})
                    // .to({x: 950}, 950, createjs.Ease.getPowInOut(4))
                  //   .to({alpha: 0, y: 75}, 500, createjs.Ease.getPowInOut(2))
                  //   .to({alpha: 0, y: 125}, 100)
                  //   .to({alpha: 1, y: 100}, 500, createjs.Ease.getPowInOut(2))
                    .to({x: 240}, 800, createjs.Ease.getPowInOut(2));
                  createjs.Ticker.setFPS(60);
                } else if(pos == 'RIGHT'){
                    createjs.Tween.get(def, {loop: false})
          .to({x: 950}, 950, createjs.Ease.getPowInOut(4))
        //   .to({alpha: 0, y: 75}, 500, createjs.Ease.getPowInOut(2))
        //   .to({alpha: 0, y: 125}, 100)
        //   .to({alpha: 1, y: 100}, 500, createjs.Ease.getPowInOut(2))
        //   .to({x: 240}, 800, createjs.Ease.getPowInOut(2));
        createjs.Ticker.setFPS(60);
                }else{
        //             createjs.Tween.get(def, {loop: false})
        //   .to({x: 1000}, 1000, createjs.Ease.getPowInOut(4))
        // //   .to({alpha: 0, y: 75}, 500, createjs.Ease.getPowInOut(2))
        // //   .to({alpha: 0, y: 125}, 100)
        // //   .to({alpha: 1, y: 100}, 500, createjs.Ease.getPowInOut(2))
        //   .to({x: 240}, 800, createjs.Ease.getPowInOut(2));
        // createjs.Ticker.setFPS(60);
                }

                r = arr[indexVal].r;
                l = arr[indexVal].l;
                // console.log(r, l, FORCE_RATE, arr[indexVal].point, 'position => ', position);
            }
                var e = Math.ceil(distanceV2(r, l)) * FORCE_RATE;
                e > FORCE_MAX && (e = FORCE_MAX), P > 1e3 && (P = 1e3);
                var t = new CVector2(r.x - l.x, r.y - l.y);
                t.scalarProduct(e);
                console.log(t.getX(), t.getY(), r.x - l.x, (r.x - l.x)*e, r.y - l.y, (r.y - l.y)* e, e,'t');
                var n = t.length();
                if (n > HIT_BALL_MIN_FORCE) {
                    n > HIT_BALL_MAX_FORCE && (t.normalize(), t.scalarProduct(HIT_BALL_MAX_FORCE)), (O = !0), d.setVisible(!0);
                    var i = P / 10;
                    i > MAX_FORCE_Y ? (i = MAX_FORCE_Y) : MIN_FORCE_Y > i && (i = MIN_FORCE_Y), A.set(-t.getX() * FORCE_MULTIPLIER_AXIS.x, i, t.getY() * FORCE_MULTIPLIER_AXIS.z), (R = s_oGame.goalProbability());
                } else 
                (l.x = 0), (l.y = 0);
               //// console.log("TIRO NULLO");
            }
        }),
        (this.refreshShadowCast = function (e, t, n) {
            var o = i.getFieldBody();
            if (t.position.z < o.position.z) return void e.scaleShadow(0);
            var a = { x: t.position.x, y: t.position.y, z: o.position.z },
                s = this.convert3dPosTo2dScreen(a, D),
                r = (t.position.z - BALL_RADIUS) * (o.position.z - SHADOWN_FACTOR - o.position.z) + o.position.z,
                l = r * n;
            e.scaleShadow(l), 0 > l || (e.setAlphaByHeight(r), e.setPositionShadow(s.x, s.y));
        }),
        (this.addScore = function (e, n) {
            e = GK_ODD;
            (_ += e), t.refreshTextScoreBoard(_, g , n, !0);
            $(s_oMain).trigger("goal_score", GK_ODD)

           //// console.log(e, _, 'score', p);
        }),
        (this.getLevel = function () {
            return M;
        }),
        (this.unload = function () {
            s_oStage.removeAllChildren(), t.unload(), c.removeAllEventListeners(), i.destroyWorld(), (i = null);
        }),
        (this.resetValues = function () {
            (_ = 0), t.refreshTextScoreBoard(0, 0, 0, !1), (I = 0), (g = 1), t.refreshLaunchBoard(I, NUM_OF_PENALTY);
        }),
        (this.wallSoundCollision = function () {
            playSound("ball_collision", 1, 0);
        }),
        (this.areaGoal = function () {
            ////// console.log(b, L, R, 'areaGoal');
            var pos = o.getPhysics().position;
            console.log(pos, 'position, area Goal');
            if(!GOAL_KEEPER_VISIBLE)
            R = true;
            b || L  || (R ? ((b = !0), (E = TIME_RESET_AFTER_GOAL), this.textGoal(), this.calculateScore(), playSound("goal", 1, 0)) : this.goalKeeperSave());
        }),
        (this.goalKeeperSave = function () {
            (L = !0), (E = TIME_RESET_AFTER_SAVE), t.createAnimText(TEXT_SAVED, 80, !1, TEXT_COLOR_1, TEXT_COLOR_STROKE), playSound("ball_saved", 1, 0), this.rejectBall(), (g = 1), (H = 0);
        }),
        (this.rejectBall = function () {
            switch ((o.getPhysics().velocity.negate(o.getPhysics().velocity), p)) {
                case 12:
                    o.getPhysics().velocity = o.getPhysics().velocity.vadd(new CANNON.Vec3(0.4 * o.getPhysics().velocity.x, 0.4 * o.getPhysics().velocity.y, 0.4 * o.getPhysics().velocity.z));
                    break;
                default:
                    o.getPhysics().velocity.vsub(new CANNON.Vec3(0, 50, 0));
            }
        }),
        (this.calculateScore = function () {
            var e = AREAS_INFO[p].value || AREAS_INFO[p].probability;
            console.log(p, 'p', e);
            // var e = AREAS_INFO[p].probability,
             var   t = MAX_PERCENT_PROBABILITY - e,
                n = MAX_PERCENT_PROBABILITY - t;
            this.addScore(n * g, n), (g += MULTIPLIER_STEP);
           console.error('goal awesome fdslkfdsknfkdsnfkdsbf')

        }),
        (this.goalProbability = function () {
            p = -1;
            ////// console.log(GOAL_KEEPER_VISIBLE, 'GOAL_KEEPER_VISIBLE');
            if(!GOAL_KEEPER_VISIBLE){
               //// console.log(CALCULATE_PROBABILITY.length, 'CALCULATE_PROBABILITY.length');
                if(CALCULATE_PROBABILITY.length == 15) {
                    // CALCULATE_PROBABILITY.push( { xMax: 11, xMin: -12, zMax: 7, zMin: 0 },
                    // { xMax: 11, xMin: -12, zMax: 8, zMin: 0 },
                    // { xMax: 11, xMin: -13, zMax: 8, zMin: 0 },
                    // { xMax: 11, xMin: -13, zMax: 8, zMin: 5 });
                }
               //// console.log(CALCULATE_PROBABILITY.length, 'CALCULATE_PROBABILITY');

                for (var e = 0; e < CALCULATE_PROBABILITY.length; e++){
                    A.z < CALCULATE_PROBABILITY[e].zMax && A.z > CALCULATE_PROBABILITY[e].zMin && A.x < CALCULATE_PROBABILITY[e].xMax && A.x > CALCULATE_PROBABILITY[e].xMin && (p = e);
                    if(p > -1){
                       //// console.log(CALCULATE_PROBABILITY[p], AREAS_INFO[p])
                       //// console.log('answer => ',A.z ,' < ', CALCULATE_PROBABILITY[p].zMax,A.z < CALCULATE_PROBABILITY[p].zMax,' && ' ,A.z,' > ',CALCULATE_PROBABILITY[p].zMin, A.z > CALCULATE_PROBABILITY[p].zMin,' && ' ,A.x,' < ',CALCULATE_PROBABILITY[p].xMax, A.x < CALCULATE_PROBABILITY[p].xMax,' && ',A.x,' > ',CALCULATE_PROBABILITY[p].xMin,A.x > CALCULATE_PROBABILITY[p].xMin,' && ');
                        for (var e = 0; e < CALCULATE_PROBABILITY.length; e++){ 
                           //// console.error(A.z ,' < ', CALCULATE_PROBABILITY[e].zMax,A.z < CALCULATE_PROBABILITY[e].zMax,' && ' ,A.z,' > ',CALCULATE_PROBABILITY[e].zMin, A.z > CALCULATE_PROBABILITY[e].zMin,' && ' ,A.x,' < ',CALCULATE_PROBABILITY[e].xMax, A.x < CALCULATE_PROBABILITY[e].xMax,' && ',A.x,' > ',CALCULATE_PROBABILITY[e].xMin,A.x > CALCULATE_PROBABILITY[e].xMin,' && ');
                        }
                        return false;
                    }

                } 

                    if(p !==-1){
    
                       
                    }
                    if(p > -1){
                        return false;
                    }
            
            } else{
                for (var e = 0; e < CALCULATE_PROBABILITY.length; e++) A.z < CALCULATE_PROBABILITY[e].zMax && A.z > CALCULATE_PROBABILITY[e].zMin && A.x < CALCULATE_PROBABILITY[e].xMax && A.x > CALCULATE_PROBABILITY[e].xMin && (p = e);
                
            }
           //// console.warn('goal started fdslkfdsknfkdsnfkdsbf')
           //// console.log(A, 'goalProbability', p, e);
            if(p == -1){
                for (var e = 0; e < CALCULATE_PROBABILITY.length; e++){ 
                   //// console.error(A.z ,' < ', CALCULATE_PROBABILITY[e].zMax,A.z < CALCULATE_PROBABILITY[e].zMax,' && ' ,A.z,' > ',CALCULATE_PROBABILITY[e].zMin, A.z > CALCULATE_PROBABILITY[e].zMin,' && ' ,A.x,' < ',CALCULATE_PROBABILITY[e].xMax, A.x < CALCULATE_PROBABILITY[e].xMax,' && ',A.x,' > ',CALCULATE_PROBABILITY[e].xMin,A.x > CALCULATE_PROBABILITY[e].xMin,' && ');
                }
               //// console.error(CALCULATE_PROBABILITY)
            } else{
               //// console.log(CALCULATE_PROBABILITY[p], AREAS_INFO[p])
               //// console.log(A.z ,' < ', CALCULATE_PROBABILITY[p].zMax,A.z < CALCULATE_PROBABILITY[p].zMax,' && ' ,A.z,' > ',CALCULATE_PROBABILITY[p].zMin, A.z > CALCULATE_PROBABILITY[p].zMin,' && ' ,A.x,' < ',CALCULATE_PROBABILITY[p].xMax, A.x < CALCULATE_PROBABILITY[p].xMax,' && ',A.x,' > ',CALCULATE_PROBABILITY[p].xMin,A.x > CALCULATE_PROBABILITY[p].xMin,' && ');
            }
            if (-1 === p) return !1;
            for (var t = new Array(), e = 0; MAX_PERCENT_PROBABILITY > e; e++) t.push(!1);
            for (var e = 0; e < AREAS_INFO[p].probability; e++) t[e] = !0;
            var n = Math.floor(Math.random() * t.length);
            ////// console.log(CALCULATE_PROBABILITY);
            return t[n];
        }),
        (this.addImpulseToBall = function (e) {
            if (!y && G === STATE_PLAY) {
                var t = i.ballBody();
                i.addImpulse(t, e), i.setElementAngularVelocity(t, { x: 0, y: 0, z: 0 }), (y = !0), o.setVisible(!0), a.setVisible(!1), this.chooseDirectionGoalKeeper(e), playSound("kick", 1, 0);
            }
        }),
        (this.chooseDirectionGoalKeeper = function (e) {
            if (R) {
                var t = S.getAnimType();
                switch (p) {
                    case 2:
                    case 7:
                    case 12:
                        this.chooseWrongDirGK(ANIM_GOAL_KEEPER_FAIL_ALT);
                        break;
                    default:
                        this.chooseWrongDirGK(ANIM_GOAL_KEEPER_FAIL, t);
                }
            } else
                switch (p) {
                    case -1:
                        e.x < GOAL_KEEPER_TOLLERANCE_LEFT ? S.runAnim(LEFT) : e.y > GOAL_KEEPER_TOLLERANCE_RIGHT && S.runAnim(RIGHT);
                        break;
                    default:
                        S.runAnim(AREA_GOALS_ANIM[p]);
                }
            C = !0;
        }),
        (this.chooseWrongDirGK = function (e) {
            for (var t = Math.floor(Math.random() * e.length); t === AREA_GOALS_ANIM[p]; ) t = Math.floor(Math.random() * e.length);
            S.runAnim(e[t]);
        }),
        (this.pause = function (e) {
            (G = e ? STATE_PAUSE : STATE_PLAY), (createjs.Ticker.paused = e);
        }),
        (this.onExit = function () {
            this.unload(), $(s_oMain).trigger("show_interlevel_ad"), $(s_oMain).trigger("end_session"), setVolume(s_oSoundTrack, 1), s_oMain.gotoMenu();
        }),
        (this.restartLevel = function () {
            this.resetValues(), this.resetScene(), (G = STATE_PLAY), this.startOpponentShot(), $(s_oMain).trigger("restart_level", M);
        }),
        (this.resetBallPosition = function () {
            var e = i.ballBody();
            e.position.set(POSITION_BALL.x, POSITION_BALL.y, POSITION_BALL.z),
                i.setElementVelocity(e, { x: 0, y: 0, z: 0 }),
                i.setElementAngularVelocity(e, { x: 0, y: 0, z: 0 }),
                o.fadeAnimation(1, 500, 0),
                o.setVisible(!1),
                a.setVisible(!0),
                a.setAlpha(0),
                a.fadeAnim(1, 500, 0);
        }),
        (this.ballFadeForReset = function () {
            L && b && w && (x || (o.fadeAnimation(0, 300, 10), (x = !0)));
        }),
        (this._updateInit = function () {
            i.update(), this._updateBall2DPosition(), (G = STATE_PLAY);
        }),
        (this.convert2dScreenPosTo3d = function (e) {
            var t = s_iCanvasResizeWidth,
                n = s_iCanvasResizeHeight,
                i = new THREE.Vector3((e.x / t) * 2 - 1, 2 * -(e.y / n) + 1, -1);
            i.unproject(D), i.sub(D.position), i.normalize();
            var o = 0;
            return i.multiply(new THREE.Vector3(o, 1, o)), i;
        }),
        (this.convert3dPosTo2dScreen = function (e, t) {
            var n = new THREE.Vector3(e.x, e.y, e.z),
                i = n.project(t),
                o = 0.5 * Math.floor(s_iCanvasResizeWidth),
                a = 0.5 * Math.floor(s_iCanvasResizeHeight);
            return (i.x = (i.x * o + o) * s_fInverseScaling), (i.y = (-(i.y * a) + a) * s_fInverseScaling), i;
        }),
        (this.timeReset = function () {
            E > 0 ? (E -= s_iTimeElaps) : this.endTurn();
        }),
        (this.restartGame = function () {
            this.resetValues(), this.resetScene(), (G = STATE_PLAY), (y = !1);
        }),
        (this.endTurn = function () {
            I < NUM_OF_PENALTY
                ? (I++, t.refreshLaunchBoard(I, NUM_OF_PENALTY), this.resetScene(), (y = !1), (m = MS_TIME_SWIPE_START))
                : ((G = STATE_FINISH), _ > s_iBestScore && ((s_iBestScore = Math.floor(_)), saveItem(LOCALSTORAGE_STRING[LOCAL_BEST_SCORE], Math.floor(_))), t.createWinPanel(Math.floor(_)), $(s_oMain).trigger("end_level", M));
        }),
        (this.textGoal = function () {
            if (H < TEXT_CONGRATULATION.length) {
                var e = !1;
                H >= TEXT_CONGRATULATION.length - 1 && (e = !0), t.createAnimText(TEXT_CONGRATULATION[H], TEXT_SIZE[H], e, TEXT_COLOR, TEXT_COLOR_STROKE), H++;
            } else {
                var e = !1,
                    n = Math.floor(Math.random() * (TEXT_CONGRATULATION.length - 1)) + 1;
                n >= TEXT_CONGRATULATION.length - 1 && (e = !0), t.createAnimText(TEXT_CONGRATULATION[n], TEXT_SIZE[n], e, TEXT_COLOR, TEXT_COLOR_STROKE);
            }
        }),
        (this.goalAnimation = function (e) {
            console.log(e, 'goalAnimation');
            
            e > FORCE_BALL_DISPLAY_SHOCK[0].min && e < FORCE_BALL_DISPLAY_SHOCK[0].max
                ? this.displayShock(INTENSITY_DISPLAY_SHOCK[0].time, INTENSITY_DISPLAY_SHOCK[0].x, INTENSITY_DISPLAY_SHOCK[0].y)
                : e > FORCE_BALL_DISPLAY_SHOCK[1].min && e < FORCE_BALL_DISPLAY_SHOCK[1].max
                ? this.displayShock(INTENSITY_DISPLAY_SHOCK[1].time, INTENSITY_DISPLAY_SHOCK[1].x, INTENSITY_DISPLAY_SHOCK[1].y)
                : e > FORCE_BALL_DISPLAY_SHOCK[2].min && e < FORCE_BALL_DISPLAY_SHOCK[2].max
                ? this.displayShock(INTENSITY_DISPLAY_SHOCK[2].time, INTENSITY_DISPLAY_SHOCK[2].x, INTENSITY_DISPLAY_SHOCK[2].y)
                : e > FORCE_BALL_DISPLAY_SHOCK[3].min && this.displayShock(INTENSITY_DISPLAY_SHOCK[3].time, INTENSITY_DISPLAY_SHOCK[3].x, INTENSITY_DISPLAY_SHOCK[3].y);
        }),
        (this.displayShock = function (e, t, n) {
            var i = t,
                o = n;
            createjs.Tween.get(s)
                .to({ x: Math.round(Math.random() * i), y: Math.round(Math.random() * o) }, e)
                .call(function () {
                    createjs.Tween.get(s)
                        .to({ x: Math.round(Math.random() * i * 0.8), y: -Math.round(Math.random() * o * 0.8) }, e)
                        .call(function () {
                            createjs.Tween.get(s)
                                .to({ x: Math.round(Math.random() * i * 0.6), y: Math.round(Math.random() * o * 0.6) }, e)
                                .call(function () {
                                    createjs.Tween.get(s)
                                        .to({ x: Math.round(Math.random() * i * 0.4), y: -Math.round(Math.random() * o * 0.4) }, e)
                                        .call(function () {
                                            createjs.Tween.get(s)
                                                .to({ x: Math.round(Math.random() * i * 0.2), y: Math.round(Math.random() * o * 0.2) }, e)
                                                .call(function () {
                                                    createjs.Tween.get(s)
                                                        .to({ y: 0, x: 0 }, e)
                                                        .call(function () {});
                                                });
                                        });
                                });
                        });
                });
        }),
        (this.resetScene = function () {
            console.log('resetSccene');
            (b = !1), (w = !1), (L = !1), (R = !1), (N = !1), (x = !1), S.setAlpha(0), S.fadeAnimation(1), S.runAnim(IDLE), this.resetBallPosition(), this.sortDepth(o, u);
        }),
        (this._onEnd = function () {
            this.onExit();
        }),
        (this.swapChildrenIndex = function () {
            for (var e = 0; e < T.length - 1; e++) for (var t = e + 1; t < T.length; t++) T[e].getObject().visible && T[t].getObject().visible && this.sortDepth(T[e], T[t]);
        }),
        (this.ballOut = function () {
            if (!w && !b && !L) {
                // console.log(w, b, L, 'balloiut');
                var e = o.getPhysics().position;
                var exVal = Math.ceil(e.x)-2;
            //     (e.y > BALL_OUT_Y || e.x > BACK_WALL_GOAL_SIZE.width || e.x < -BACK_WALL_GOAL_SIZE.width) &&
            // ((w = !0),  t.createAnimText(TEXT_BALL_OUT, 90, !1, TEXT_COLOR_1, TEXT_COLOR_STROKE), playSound("ball_saved", 1, 0), (g = 1), (H = 0)); 


            // console.log(e.y,' > ',BALL_OUT_Y ,'|| ',e.x,' > ',BACK_WALL_GOAL_SIZE.width,' || ',exVal,' < ',-BACK_WALL_GOAL_SIZE.width),
            // console.log(e.y > BALL_OUT_Y, e.x > BACK_WALL_GOAL_SIZE.width, Math.ceil(e.x)-2, Math.ceil(e.x)+2, exVal < -BACK_WALL_GOAL_SIZE.width,(E = TIME_RESET_AFTER_BALL_OUT)), 
            // console.log('resetPoleCollision');
            // if(w = !0){
                if(e.x < -DEFENDER_GOAL_SIZE.width) {
                    // console.log('pos--', e, DEFENDER_GOAL_SIZE.width);
                    p = 9;
                    
                    this.areaGoal()
                    //  playSound("goal", 1, 0);
                    // setTimeout(()=>{
                        // var e = AREAS_INFO[p].value || AREAS_INFO[p].probability;
                        // console.log(p, 'p', e);
                        // var e = AREAS_INFO[p].probability,
                        //  var   t = MAX_PERCENT_PROBABILITY - e,
                            // n = MAX_PERCENT_PROBABILITY - t;
                        // this.addScore(n * g, n), (g += MULTIPLIER_STEP);

                    // })
                }
                if(exVal < -BACK_WALL_GOAL_SIZE.width && (w = !0)) {
                    console.log('pos--', e);
                    p = 6;
                    this.resetPoleCollision();
                    this.calculateScore(), playSound("goal", 1, 0);
                    alert('d')
                } else if( (e.y > BALL_OUT_Y || e.x > BACK_WALL_GOAL_SIZE.width || e.x < -BACK_WALL_GOAL_SIZE.width) &&
                ((w = !0))){
                    console.log(exVal, '<', -BACK_WALL_GOAL_SIZE.width );
                    console.log('dfsdf');
                    t.createAnimText(TEXT_BALL_OUT, 90, !1, TEXT_COLOR_1, TEXT_COLOR_STROKE), playSound("ball_saved", 1, 0), (g = 1), (H = 0);
                    alert('else')

    
                }
            // }
            }
        }),
        (this.animPlayer = function () {
            return O ? ((O = d.animPlayer()), void (d.getFrame() === SHOOT_FRAME && (this.addImpulseToBall({ x: A.x, y: A.y, z: A.z }), (P = 0), this.goalAnimation(A.y), t.unloadHelpText()))) : void d.setVisible(!1);
        }),
        (this.animGoalKeeper = function () {
            if(GOAL_KEEPER_VISIBLE) {
                y ? C && ((C = S.update()), C || (S.viewFrame(S.getAnimArray(), S.getAnimArray().length - 1), S.hideFrame(S.getAnimArray(), 0), S.fadeAnimation(0))) : S.update();
            } 
        }),
        (this.resetPoleCollision = function () {
            console.log('resetPoleCollision');
            console.log(f, s_iTimeElaps, b, L);
            f > 0 ? (f -= s_iTimeElaps) : (b && L) || (t.createAnimText('ds', 80, !1, TEXT_COLOR_1, TEXT_COLOR_STROKE), (g = 1), (H = 0), playSound("ball_saved", 1, 0), this.endTurn(), (f = TIME_POLE_COLLISION_RESET));
        }),
        (this.handSwipeAnim = function () {
            h.isAnimate() || y || (m > 0 ? (m -= s_iTimeElaps) : (h.animAllSwipe(), h.setVisible(!0), (m = MS_TIME_SWIPE_START)));
        }),
        (this.swapGoal = function () {
            o.getPhysics().position.z > GOAL_SPRITE_SWAP_Z && this.sortDepth(o, u);
        }),
        (this._updatePlay = function () {
            for (var e = 0; PHYSICS_ACCURACY > e; e++) i.update();
            this.ballOut(), b || w || L ? this.timeReset() : N && this.resetPoleCollision(), this.animGoalKeeper(), this.animPlayer(), this._updateBall2DPosition(), this.handSwipeAnim(), this.swapChildrenIndex(), this.swapGoal();
        }),
        (this.update = function () {
            switch (G) {
                case STATE_INIT:
                    this._updateInit();
                    break;
                case STATE_PLAY:
                    this._updatePlay();
                    break;
                case STATE_FINISH:
                    break;
                case STATE_PAUSE:
            }
        }),
        (this._updateBall2DPosition = function () {
            this.ballPosition(), o.rolls(), D.updateProjectionMatrix(), D.updateMatrixWorld();
        }),
        (s_oGame = this),
        (AREAS_INFO = e.area_goal_prop),
        (LEVEL_STATUS = e.Level_status),
        (GK_ODD = e.gkOdd),
        (GUARD_HIT = e.guardHit),
        (GOAL_KEEPER_VISIBLE = e.goalKeeperVisible),
        (NUM_OF_PENALTY = e.num_of_penalty),
        (MULTIPLIER_STEP = e.multiplier_step),
        (NUM_LEVEL_FOR_ADS = e.num_levels_for_ads),
        (ENABLE_FULLSCREEN = e.fullscreen),
        this._init();
}
function CWinPanel(e) {
    var t, n, i, o, a, s, r, l, c, d, h;
    return (
        (this._init = function (e) {
            var u = 50;
            (l = new createjs.Container()), (l.alpha = 0), (l.visible = !1);
            var _ = new createjs.Shape();
            _.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT),
                (_.alpha = 0.5),
                l.addChild(_),
                (t = createBitmap(e)),
                (t.x = CANVAS_WIDTH_HALF),
                (t.y = CANVAS_HEIGHT_HALF),
                (t.regX = 0.5 * e.width),
                (t.regY = 0.5 * e.height),
                l.addChild(t),
                (n = new createjs.Text("", "80px " + FONT_GAME, TEXT_COLOR_STROKE)),
                (n.x = CANVAS_WIDTH / 2),
                (n.y = CANVAS_HEIGHT_HALF - 170),
                (n.textAlign = "center"),
                (n.outline = 5),
                l.addChild(n),
                (i = new createjs.Text("", "80px " + FONT_GAME, TEXT_COLOR)),
                (i.x = CANVAS_WIDTH / 2),
                (i.y = n.y),
                (i.textAlign = "center"),
                l.addChild(i),
                (o = new createjs.Text("", u + "px " + FONT_GAME, TEXT_COLOR_STROKE)),
                (o.x = CANVAS_WIDTH / 2),
                (o.y = CANVAS_HEIGHT_HALF - 50),
                (o.textAlign = "center"),
                (o.outline = 5),
                l.addChild(o),
                (a = new createjs.Text("", u + "px " + FONT_GAME, TEXT_COLOR)),
                (a.x = CANVAS_WIDTH / 2),
                (a.y = o.y),
                (a.textAlign = "center"),
                l.addChild(a),
                (s = new createjs.Text("", u + "px " + FONT_GAME, TEXT_COLOR_STROKE)),
                (s.x = CANVAS_WIDTH / 2),
                (s.y = CANVAS_HEIGHT_HALF + 50),
                (s.textAlign = "center"),
                (s.outline = 5),
                l.addChild(s),
                (r = new createjs.Text("", u + "px " + FONT_GAME, TEXT_COLOR)),
                (r.x = CANVAS_WIDTH / 2),
                (r.y = s.y),
                (r.textAlign = "center"),
                l.addChild(r);
            var p = s_oSpriteLibrary.getSprite("but_restart");
            (d = new CGfxButton(0.5 * CANVAS_WIDTH + 250, 0.5 * CANVAS_HEIGHT + 120, p, l)), d.pulseAnimation(), d.addEventListener(ON_MOUSE_DOWN, this._onRestart, this);
            var E = s_oSpriteLibrary.getSprite("but_home");
            (c = new CGfxButton(0.5 * CANVAS_WIDTH - 250, 0.5 * CANVAS_HEIGHT + 120, E, l)),
                c.addEventListener(ON_MOUSE_DOWN, this._onExit, this),
                (h = new createjs.Container()),
                l.addChild(h),
                l.on("click", function () {}),
                s_oStage.addChild(l);
        }),
        (this.unload = function () {
            l.removeAllEventListeners(), s_oStage.removeChild(l), c && (c.unload(), (c = null)), d && (d.unload(), (d = null));
        }),
        (this.show = function (e) {
            (n.text = TEXT_GAMEOVER),
                (i.text = TEXT_GAMEOVER),
                (o.text = TEXT_SCORE + ": " + e),
                (a.text = TEXT_SCORE + ": " + e),
                (s.text = TEXT_BEST_SCORE + ": " + s_iBestScore),
                (r.text = TEXT_BEST_SCORE + ": " + s_iBestScore),
                (l.visible = !0),
                createjs.Tween.get(l)
                    .wait(MS_WAIT_SHOW_GAME_OVER_PANEL)
                    .to({ alpha: 1 }, 1250, createjs.Ease.cubicOut)
                    .call(function () {
                        s_iAdsLevel === NUM_LEVEL_FOR_ADS ? ($(s_oMain).trigger("show_interlevel_ad"), (s_iAdsLevel = 1)) : s_iAdsLevel++;
                    }),
                $(s_oMain).trigger("save_score", e),
                $(s_oMain).trigger("share_event", e);
                ////// console.log(o.text, e, 'text score');
        }),
        (this._onContinue = function () {
            var e = this;
            createjs.Tween.get(l, { override: !0 })
                .to({ alpha: 0 }, 750, createjs.Ease.cubicOut)
                .call(function () {
                    e.unload();
                }),
                _oButContinue.block(!0),
                c.block(!0),
                s_oGame.onContinue();
        }),
        (this._onRestart = function () {
            d.block(!0), this.unload(), s_oGame.restartGame();
        }),
        (this._onExit = function () {
            this.unload(), s_oGame.onExit();
        }),
        this._init(e),
        this
    );
}
function CToggle(e, t, n, i, o) {
    var a, s, r, l, c;
    (this._init = function (e, t, n, i, o) {
        (c = void 0 !== o ? o : s_oStage), (s = new Array()), (r = new Array());
        var d = { images: [n], frames: { width: n.width / 2, height: n.height, regX: n.width / 2 / 2, regY: n.height / 2 }, animations: { state_true: [0], state_false: [1] } },
            h = new createjs.SpriteSheet(d);
        (a = i), (l = createSprite(h, "state_" + a, n.width / 2 / 2, n.height / 2, n.width / 2, n.height)), (l.x = e), (l.y = t), l.stop(), s_bMobile || (l.cursor = "pointer"), c.addChild(l), this._initListener();
    }),
        (this.unload = function () {
            l.off("mousedown", this.buttonDown), l.off("pressup", this.buttonRelease), c.removeChild(l);
        }),
        (this._initListener = function () {
            l.on("mousedown", this.buttonDown), l.on("pressup", this.buttonRelease);
        }),
        (this.addEventListener = function (e, t, n) {
            (s[e] = t), (r[e] = n);
        }),
        (this.setCursorType = function (e) {
            l.cursor = e;
        }),
        (this.setActive = function (e) {
            (a = e), l.gotoAndStop("state_" + a);
        }),
        (this.buttonRelease = function () {
            (l.scaleX = 1), (l.scaleY = 1), playSound("click", 1, 0), (a = !a), l.gotoAndStop("state_" + a), s[ON_MOUSE_UP] && s[ON_MOUSE_UP].call(r[ON_MOUSE_UP], a);
        }),
        (this.buttonDown = function () {
            (l.scaleX = 0.9), (l.scaleY = 0.9), s[ON_MOUSE_DOWN] && s[ON_MOUSE_DOWN].call(r[ON_MOUSE_DOWN]);
        }),
        (this.setPosition = function (e, t) {
            (l.x = e), (l.y = t);
        }),
        this._init(e, t, n, i, o);
}
function CAreYouSurePanel(e) {
    var t, n, i, o, a, s, r;
    (this._init = function () {
        (a = new createjs.Container()), (a.alpha = 0), s.addChild(a), (r = new createjs.Shape()), r.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT), (r.alpha = 0.5), r.on("click", function () {}), a.addChild(r);
        var e = s_oSpriteLibrary.getSprite("msg_box");
        (t = createBitmap(e)),
            (t.x = CANVAS_WIDTH_HALF),
            (t.y = CANVAS_HEIGHT_HALF),
            (t.regX = 0.5 * e.width),
            (t.regY = 0.5 * e.height),
            a.addChild(t),
            (n = new createjs.Text(TEXT_ARE_SURE, "70px " + FONT_GAME, "#ffffff")),
            (n.x = CANVAS_WIDTH / 2),
            (n.y = CANVAS_HEIGHT_HALF - 50),
            (n.textAlign = "center"),
            (n.textBaseline = "middle"),
            a.addChild(n),
            (i = new CGfxButton(CANVAS_WIDTH / 2 + 250, 0.5 * CANVAS_HEIGHT + 120, s_oSpriteLibrary.getSprite("but_yes"), a)),
            i.addEventListener(ON_MOUSE_UP, this._onButYes, this),
            (o = new CGfxButton(CANVAS_WIDTH / 2 - 250, 0.5 * CANVAS_HEIGHT + 120, s_oSpriteLibrary.getSprite("but_no"), a)),
            o.addEventListener(ON_MOUSE_UP, this._onButNo, this);
    }),
        (this.show = function () {
            createjs.Tween.get(a)
                .to({ alpha: 1 }, 150, createjs.quartOut)
                .call(function () {
                    s_oGame.pause(!0);
                });
        }),
        (this.unload = function () {
            createjs.Tween.get(a)
                .to({ alpha: 0 }, 150, createjs.quartOut)
                .call(function () {
                    s.removeChild(a, r);
                });
        }),
        (this._onButYes = function () {
            (createjs.Ticker.paused = !1), this.unload(), s_oGame.onExit(), r.removeAllEventListeners();
        }),
        (this._onButNo = function () {
            s_oGame.pause(!1), this.unload(), (a.visible = !1), r.removeAllEventListeners();
        }),
        (s = e),
        this._init();
}
function CSpriteLibrary() {
    var e, t, n, i, o, a;
    (this.init = function (s, r, l) {
        (t = 0), (n = 0), (i = s), (o = r), (a = l), (e = {});
    }),
        (this.addSprite = function (n, i) {
            e.hasOwnProperty(n) || ((e[n] = { szPath: i, oSprite: new Image() }), t++);
        }),
        (this.getSprite = function (t) {
            return e.hasOwnProperty(t) ? e[t].oSprite : null;
        }),
        (this._onSpritesLoaded = function () {
            o.call(a);
        }),
        (this._onSpriteLoaded = function () {
            i.call(a), ++n == t && this._onSpritesLoaded();
        }),
        (this.loadSprites = function () {
            for (var t in e)
                (e[t].oSprite.oSpriteLibrary = this),
                    (e[t].oSprite.onload = function () {
                        this.oSpriteLibrary._onSpriteLoaded();
                    }),
                    (e[t].oSprite.src = e[t].szPath);
        }),
        (this.getNumSprites = function () {
            return t;
        });
}
function CGoalKeeper(e, t, n) {
    var i, o, a, s, r, l = 0, c = 0, d = IDLE;
    return (
        (this._init = function (e, t, n) {
            (s = n), (i = { x: e, y: t }), (o = new createjs.Container()), (o.x = i.x), (o.y = i.y), s.addChild(o), (o.tickChildren = !1), (r = new Array()), (a = new Array());
            for (var l = 0, c = 0, d = 0; d < NUM_SPRITE_GOALKEEPER.length; d++) {
                (a[d] = new createjs.Container()), (a[d].x = OFFSET_CONTAINER_GOALKEEPER[d].x), (a[d].y = OFFSET_CONTAINER_GOALKEEPER[d].y), r.push(this.loadAnim(SPRITE_NAME_GOALKEEPER[d], NUM_SPRITE_GOALKEEPER[d], a[d])), o.addChild(a[d]);
                var h = s_oSpriteLibrary.getSprite(SPRITE_NAME_GOALKEEPER[d] + 0);
                h.width > l && (l = h.width), h.height > c && (c = h.height);
            }
            o.cache(-l, -c, 2 * l, 2 * c), (r[IDLE][0].visible = !0);
        }),
        (this.getAnimType = function () {
            return d;
        }),
        (this.getAnimArray = function () {
            return r[d];
        }),
        (this.loadAnim = function (e, t, n) {
            for (var i = new Array(), o = 0; t > o; o++) i.push(createBitmap(s_oSpriteLibrary.getSprite(e + o))), (i[o].visible = !1), n.addChild(i[o]);
            return i;
        }),
        (this.getX = function () {
            return o.x;
        }),
        (this.getY = function () {
            return o.y;
        }),
        (this.disableAllAnim = function () {
            for (var e = 0; e < a.length; e++) a[e].visible = !1;
        }),
        (this.setPosition = function (e, t) {
            (o.x = e), (o.y = t);
        }),
        (this.setVisible = function (e) {
            o.visible = e;
        }),
        (this.fadeAnimation = function (e) {
            createjs.Tween.get(o, { override: !0 }).to({ alpha: e }, 500);
        }),
        (this.setAlpha = function (e) {
            o.alpha = e;
        }),
        (this.getObject = function () {
            return o;
        }),
        (this.getFrame = function () {
            return c;
        }),
        (this.viewFrame = function (e, t) {
            e[t].visible = !0;
        }),
        (this.hideFrame = function (e, t) {
            e[t].visible = !1;
            ////// console.log(e,t, 'hideframe');
        }),
        (this.getDepthPos = function () {
            return GOAL_KEEPER_DEPTH_Y;
        }),
        (this.animGoalKeeper = function (e, t) {
            if (((l += s_iTimeElaps), l > BUFFER_ANIM_PLAYER)) {
                if ((this.hideFrame(e, c), !(t > c + 1))) return (c = 0), (l = 0), this.viewFrame(e, c), !1;
                this.viewFrame(e, c + 1), c++, (l = 0), o.updateCache();
            }
            return !0;
        }),
        (this.resetAnimation = function (e) {
            this.resetAnimFrame(r[e], NUM_SPRITE_GOALKEEPER[e]);
        }),
        (this.resetAnimFrame = function (e, t) {
            for (var n = 1; t > n; n++) e[n].visible = !1;
            e[0].visible = !0;
        }),
        (this.setVisibleContainer = function (e, t) {
            a[e].visible = t;
        }),
        (this.runAnim = function (e) {
            this.disableAllAnim(), this.resetAnimation(e), this.setVisibleContainer(e, !0), (d = e), (c = 0);
        }),
        (this.update = function () {
            return this.animGoalKeeper(r[d], NUM_SPRITE_GOALKEEPER[d]);
        }),
        this._init(e, t, n),
        this
    );
}
function CRollingScore() {
    var e = null,
        t = null;
    return (
        (this.rolling = function (n, i, o) {
            (e = createjs.Tween.get(n, { override: !0 })
                .to({ text: o }, MS_ROLLING_SCORE, createjs.Ease.cubicOut)
                .addEventListener("change", function () {
                    n.text = parseFloat(n.text.toFixed(1));
                    // n.text = Math.floor(n.text);

                })
                .call(function () {
                    createjs.Tween.removeTweens(e);
                })),
                null !== i &&
                    (t = createjs.Tween.get(i, { override: !0 })
                        .to({ text: o }, MS_ROLLING_SCORE, createjs.Ease.cubicOut)
                        .addEventListener("change", function () {
                            i.text = parseFloat(i.text.toFixed(1));
                            // i.text = Math.floor(i.text);

                        })
                        .call(function () {
                            createjs.Tween.removeTweens(t);
                        }));
        }),
        this
    );
}
function trace(e) {
    ////// console.log(e);
}
function isIOS() {
    for (var e = ["iPad Simulator", "iPhone Simulator", "iPod Simulator", "iPad", "iPhone", "iPod"]; e.length; ) if (navigator.platform === e.pop()) return (s_bIsIphone = !0), !0;
    return (s_bIsIphone = !1), !1;
}
function onOrientationChange() {
    window.matchMedia("(orientation: portrait)").matches && sizeHandler(), window.matchMedia("(orientation: landscape)").matches && sizeHandler();
}
function getSize(e) {
    var t,
        n = e.toLowerCase(),
        i = window.document,
        o = i.documentElement;
    if (void 0 === window["inner" + e]) t = o["client" + e];
    else if (window["inner" + e] != o["client" + e]) {
        var a = i.createElement("body");
        (a.id = "vpw-test-b"), (a.style.cssText = "overflow:scroll");
        var s = i.createElement("div");
        (s.id = "vpw-test-d"),
            (s.style.cssText = "position:absolute;top:-1000px"),
            (s.innerHTML = "<style>@media(" + n + ":" + o["client" + e] + "px){body#vpw-test-b div#vpw-test-d{" + n + ":7px!important}}</style>"),
            a.appendChild(s),
            o.insertBefore(a, i.head),
            (t = 7 == s["offset" + e] ? o["client" + e] : window["inner" + e]),
            o.removeChild(a);
    } else t = window["inner" + e];
    return t;
}
function getIOSWindowHeight() {
    var e = document.documentElement.clientWidth / window.innerWidth;
    return window.innerHeight * e;
}
function getHeightOfIOSToolbars() {
    var e = (0 === window.orientation ? screen.height : screen.width) - getIOSWindowHeight();
    return e > 1 ? e : 0;
}
function sizeHandler() {
    if ((window.scrollTo(0, 1), $("#canvas"))) {
        var e,
            t = !!navigator.userAgent.match(/(iPad|iPhone|iPod)/g);
        e = t ? getIOSWindowHeight() : getSize("Height");
        var n = getSize("Width");
        s_iScaleFactor = Math.min(e / CANVAS_HEIGHT, n / CANVAS_WIDTH);
        var i = CANVAS_WIDTH * s_iScaleFactor,
            o = CANVAS_HEIGHT * s_iScaleFactor,
            a = 0;
        e > o ? ((a = e - o), (o += a), (i += a * (CANVAS_WIDTH / CANVAS_HEIGHT))) : n > i && ((a = n - i), (i += a), (o += a * (CANVAS_HEIGHT / CANVAS_WIDTH)));
        var s = e / 2 - o / 2,
            r = n / 2 - i / 2,
            l = CANVAS_WIDTH / i;
        (-EDGEBOARD_X > r * l || -EDGEBOARD_Y > s * l) &&
            ((s_iScaleFactor = Math.min(e / (CANVAS_HEIGHT - 2 * EDGEBOARD_Y), n / (CANVAS_WIDTH - 2 * EDGEBOARD_X))),
            (i = CANVAS_WIDTH * s_iScaleFactor),
            (o = CANVAS_HEIGHT * s_iScaleFactor),
            (s = (e - o) / 2),
            (r = (n - i) / 2),
            (l = CANVAS_WIDTH / i)),
            (s_fInverseScaling = l),
            (s_iOffsetX = -1 * r * l),
            (s_iOffsetY = -1 * s * l),
            s >= 0 && (s_iOffsetY = 0),
            r >= 0 && (s_iOffsetX = 0),
            null !== s_oInterface && s_oInterface.refreshButtonPos(s_iOffsetX, s_iOffsetY),
            null !== s_oMenu && s_oMenu.refreshButtonPos(s_iOffsetX, s_iOffsetY),
            $("#canvas").css("width", i + "px"),
            $("#canvas").css("height", o + "px"),
            0 > s ? ($("#canvas").css("top", s + "px"), (s_iCanvasOffsetHeight = s)) : ($("#canvas").css("top", "0px"), (s_iCanvasOffsetHeight = 0)),
            $("#canvas").css("left", r + "px"),
            resizeCanvas3D(),
            (s_iCanvasResizeWidth = i),
            (s_iCanvasResizeHeight = o),
            (s_iCanvasOffsetWidth = r);
    }
}
function createBitmap(e, t, n) {
    var i = new createjs.Bitmap(e),
        o = new createjs.Shape();
    return t && n ? o.graphics.beginFill("#fff").drawRect(-t / 2, -n / 2, t, n) : o.graphics.beginFill("#ff0").drawRect(0, 0, e.width, e.height), (i.hitArea = o), i;
}
function createSprite(e, t, n, i, o, a) {
    if (null !== t) var s = new createjs.Sprite(e, t);
    else var s = new createjs.Sprite(e);
    var r = new createjs.Shape();
    return r.graphics.beginFill("#000000").drawRect(-n, -i, o, a), (s.hitArea = r), s;
}
function randomFloatBetween(e, t, n) {
    return "undefined" == typeof n && (n = 2), parseFloat(Math.min(e + Math.random() * (t - e), t).toFixed(n));
}
function shuffle(e) {
    for (var t, n, i = e.length; 0 !== i; ) (n = Math.floor(Math.random() * i)), (i -= 1), (t = e[i]), (e[i] = e[n]), (e[n] = t);
    return e;
}
function formatTime(e) {
    e /= 1e3;
    var t = Math.floor(e / 60),
        n = e - 60 * t;
    n = parseFloat(n).toFixed(1);
    var i = "";
    return (i += 10 > t ? "0" + t + ":" : t + ":"), (i += 10 > n ? "0" + n : n);
}
function degreesToRadians(e) {
    return (e * Math.PI) / 180;
}
function checkRectCollision(e, t) {
    var n, i;
    return (n = getBounds(e, 0.9)), (i = getBounds(t, 0.98)), calculateIntersection(n, i);
}
function calculateIntersection(e, t) {
    var n, i, o = {}, a = {};
    return (
        (o.cx = e.x + (o.hw = e.width / 2)),
        (o.cy = e.y + (o.hh = e.height / 2)),
        (a.cx = t.x + (a.hw = t.width / 2)),
        (a.cy = t.y + (a.hh = t.height / 2)),
        (n = Math.abs(o.cx - a.cx) - (o.hw + a.hw)),
        (i = Math.abs(o.cy - a.cy) - (o.hh + a.hh)),
        0 > n && 0 > i ? ((n = Math.min(Math.min(e.width, t.width), -n)), (i = Math.min(Math.min(e.height, t.height), -i)), { x: Math.max(e.x, t.x), y: Math.max(e.y, t.y), width: n, height: i, rect1: e, rect2: t }) : null
    );
}
function getBounds(e, t) {
    var n = { x: 1 / 0, y: 1 / 0, width: 0, height: 0 };
    if (e instanceof createjs.Container) {
        (n.x2 = -(1 / 0)), (n.y2 = -(1 / 0));
        var i,
            o,
            a = e.children,
            s = a.length;
        for (o = 0; s > o; o++) (i = getBounds(a[o], 1)), i.x < n.x && (n.x = i.x), i.y < n.y && (n.y = i.y), i.x + i.width > n.x2 && (n.x2 = i.x + i.width), i.y + i.height > n.y2 && (n.y2 = i.y + i.height);
        n.x == 1 / 0 && (n.x = 0), n.y == 1 / 0 && (n.y = 0), n.x2 == 1 / 0 && (n.x2 = 0), n.y2 == 1 / 0 && (n.y2 = 0), (n.width = n.x2 - n.x), (n.height = n.y2 - n.y), delete n.x2, delete n.y2;
    } else {
        var r, l, c, d, h, u = {};
        if (e instanceof createjs.Bitmap) (h = e.sourceRect || e.image), (u.width = h.width * t), (u.height = h.height * t);
        else if (e instanceof createjs.Sprite)
            if (e.spriteSheet._frames && e.spriteSheet._frames[e.currentFrame] && e.spriteSheet._frames[e.currentFrame].image) {
                var _ = e.spriteSheet.getFrame(e.currentFrame);
                (u.width = _.rect.width), (u.height = _.rect.height), (u.regX = _.regX), (u.regY = _.regY);
            } else (n.x = e.x || 0), (n.y = e.y || 0);
        else (n.x = e.x || 0), (n.y = e.y || 0);
        (u.regX = u.regX || 0),
            (u.width = u.width || 0),
            (u.regY = u.regY || 0),
            (u.height = u.height || 0),
            (n.regX = u.regX),
            (n.regY = u.regY),
            (r = e.localToGlobal(0 - u.regX, 0 - u.regY)),
            (l = e.localToGlobal(u.width - u.regX, u.height - u.regY)),
            (c = e.localToGlobal(u.width - u.regX, 0 - u.regY)),
            (d = e.localToGlobal(0 - u.regX, u.height - u.regY)),
            (n.x = Math.min(Math.min(Math.min(r.x, l.x), c.x), d.x)),
            (n.y = Math.min(Math.min(Math.min(r.y, l.y), c.y), d.y)),
            (n.width = Math.max(Math.max(Math.max(r.x, l.x), c.x), d.x) - n.x),
            (n.height = Math.max(Math.max(Math.max(r.y, l.y), c.y), d.y) - n.y);
    }
    return n;
}
function NoClickDelay(e) {
    (this.element = e), window.Touch && this.element.addEventListener("touchstart", this, !1);
}
function playSound(e, t, n) {
    if (DISABLE_SOUND_MOBILE === !1 || s_bMobile === !1) {
        var i = createjs.Sound.play(e, { loop: n, volume: 0 });
        return i;
    }
    return null;
}
function stopSound(e) {
    (DISABLE_SOUND_MOBILE !== !1 && s_bMobile !== !1) || e.stop();
}
function setVolume(e, t) {
    (DISABLE_SOUND_MOBILE !== !1 && s_bMobile !== !1) || (e.volume = t);
}
function setMute(e, t) {
    (DISABLE_SOUND_MOBILE !== !1 && s_bMobile !== !1) || e.setMute(t);
}
function ctlArcadeResume() {
    null !== s_oMain && s_oMain.startUpdate();
}
function ctlArcadePause() {
    null !== s_oMain && s_oMain.stopUpdate();
}
function getParamValue(e) {
    for (var t = window.location.search.substring(1), n = t.split("&"), i = 0; i < n.length; i++) {
        var o = n[i].split("=");
        if (o[0] == e) return o[1];
    }
}
function rotateVector2D(e, t) {
    var n = t.x * Math.cos(e) + t.y * Math.sin(e),
        i = t.x * -Math.sin(e) + t.y * Math.cos(e);
    return { x: n, y: i };
}
function normalize(e, t) {
    return t > 0 && ((e.x /= t), (e.y /= t)), e;
}
function length(e) {
    return Math.sqrt(e.x * e.x + e.y * e.y);
}
function findNearestIntersectingObject(e, t, n, i) {
    var o = CANVAS_RESIZE_WIDTH + 2 * OFFSET_WIDTH,
        a = CANVAS_RESIZE_HEIGHT + 2 * OFFSET_HEIGHT,
        s = new THREE.Raycaster(),
        r = new THREE.Vector3();
    (r.x = (e / o) * 2 - 1), (r.y = 2 * -(t / a) + 1), (r.z = 0.5), s.setFromCamera(r, n);
    var l = s.intersectObjects(i, !0),
        c = !1;
    return l.length > 0 && (c = l[0]), c;
}
function distance(e, t, n, i) {
    var o = e - n,
        a = t - i;
    return Math.sqrt(o * o + a * a);
}
function distance2(e, t, n, i) {
    var o = e - n,
        a = t - i;
    return o * o + a * a;
}
function resizeCanvas3D() {
    $("canvas").each(function () {
        "#canvas" != $(this).attr("id") &&
            ($(this).css("width", $("#canvas").css("width")),
            $(this).css("height", $("#canvas").css("height")),
            $(this).css("position", $("#canvas").css("position")),
            $(this).css("left", $("#canvas").css("left")),
            $(this).css("top", $("#canvas").css("top")));
    });
}
function createOrthoGraphicCamera() {
    var e = new THREE.PerspectiveCamera(FOV, CANVAS_WIDTH / CANVAS_HEIGHT, NEAR, FAR);
    return (e.rotation.x = 88.6 * (Math.PI / 180)), (e.rotation.y = 0.03 * (Math.PI / 180)), e.position.set(CAMERA_POSITION.x, CAMERA_POSITION.y, CAMERA_POSITION.z), e.updateProjectionMatrix(), e.updateMatrixWorld(), e;
}
function rotateVector2D(e, t) {
    var n = t.x * Math.cos(e) + t.y * Math.sin(e),
        i = t.x * -Math.sin(e) + t.y * Math.cos(e);
    return { x: n, y: i, z: 0 };
}
function distanceV3(e, t, n, i, o, a) {
    var s = e - i,
        r = t - o,
        l = n - a;
    return Math.sqrt(s * s + r * r + l * l);
}
function distanceV2(e, t) {
    var n = e.x - t.x,
        i = e.y - t.y;
    return Math.sqrt(n * n + i * i);
}
function saveItem(e, t) {
    localStorage.setItem(e, t);
}
function getItem(e) {
    return localStorage.getItem(e);
}
function clearAllItem() {
    localStorage.clear();
}
function inIframe() {
    try {
        return window.self !== window.top;
    } catch (e) {
        return !0;
    }
}
function CStartBall(e, t, n) {
    var i, o = n;
    return (
        (this._init = function () {
            var n = s_oSpriteLibrary.getSprite("start_ball");
            (i = createBitmap(n)), (i.regX = 0.5 * n.width), (i.regY = 0.5 * n.height), this.setPosition(e, t), o.addChild(i);
        }),
        (this.setPosition = function (e, t) {
            (i.x = e), (i.y = t);
        }),
        (this.fadeAnim = function (e, t, n) {
            createjs.Tween.get(i, { override: !0 }).wait(n).to({ alpha: e }, t);
        }),
        (this.setAlpha = function (e) {
            i.alpha = e;
        }),
        (this.setVisible = function (e) {
            i.visible = e;
        }),
        this._init(),
        this
    );
}
function CScoreBoard(e) {
    var t, n, i, o, a, s, r, l, c, d, h, u = e;
    return (
        (this._init = function () {
            (t = { x: CANVAS_WIDTH_HALF - 12000, y: CANVAS_HEIGHT - 154 }),
                (d = new createjs.Container()),
                (d.x = t.x),
                (d.y = t.y),
                u.addChild(d),
                (i = new createjs.Text(TEXT_SCORE, "50px " + FONT_GAME, TEXT_COLOR)),
                (i.textAlign = "left"),
                d.addChild(i),
                (o = new createjs.Text(TEXT_SCORE, "50px " + FONT_GAME, TEXT_COLOR_STROKE)),
                (o.textAlign = "left"),
                (o.outline = OUTLINE_WIDTH),
                d.addChild(o),
                (a = new createjs.Text(999999, "50px " + FONT_GAME, TEXT_COLOR)),
                (a.textAlign = "left"),
                (a.x = 150),
                d.addChild(a),
                (s = new createjs.Text(999999, "50px " + FONT_GAME, TEXT_COLOR_STROKE)),
                (s.textAlign = "left"),
                (s.x = a.x),
                (s.outline = OUTLINE_WIDTH),
                d.addChild(s),
                (h = new createjs.Container()),
                (h.x = 50),
                (r = new createjs.Text("+5555 " + TEXT_MULTIPLIER + 1, "36px " + FONT_GAME, TEXT_COLOR)),
                (r.textAlign = "left"),
                h.addChild(r),
                (l = new createjs.Text("+5555 " + TEXT_MULTIPLIER + 1, "36px " + FONT_GAME, TEXT_COLOR_STROKE)),
                (l.textAlign = "left"),
                (l.outline = OUTLINE_WIDTH),
                h.addChild(l),
                (h.y = n = -l.getBounds().height),
                (h.visible = !1),
                d.addChild(h),
                (c = new CRollingScore());
        }),
        (this.getStartPosScore = function () {
            return t;
        }),
        (this.setPosScore = function (e, t) {
            (d.x = e), (d.y = t);
        }),
        (this.refreshTextScore = function (e) {
            ////// console.error(a, s, e, 'rolling');
            c.rolling(a, s, e);
        }),
        (this.effectAddScore = function (e, t) {
            (h.visible = !0),
                (r.text = "+" + e + " " + TEXT_MULTIPLIER + t),
                (l.text = r.text),
                createjs.Tween.get(h)
                    .to({ y: n - 50, alpha: 0 }, MS_EFFECT_ADD, createjs.Ease.cubicOut)
                    .call(function () {
                        (h.visible = !1), (h.alpha = 1), (h.y = n);
                    });
        }),
        this._init(),
        this
    );
}
function CInterface() {
    var e, t, n, i, o, a, s, r, l, c, d, h, u, _, p = null, E = null, f = null;
    return (
        (this._init = function () {
            i = { x: 0, y: 0 };
            var c = s_oSpriteLibrary.getSprite("but_exit");
            (t = { x: CANVAS_WIDTH - c.height / 2 + 100, y: c.height / 2 + 10 }), (a = new CGfxButton(t.x, t.y, c)), a.addEventListener(ON_MOUSE_UP, this._onExit, this);
            var c = s_oSpriteLibrary.getSprite("but_pause");
            if (((n = { x: t.x - c.height + 500, y: t.y }), (s = new CGfxButton(n.x, n.y, c)), s.addEventListener(ON_MOUSE_UP, this.onButPauseRelease, this), DISABLE_SOUND_MOBILE === !1 || s_bMobile === !1)) {
                var c = s_oSpriteLibrary.getSprite("audio_icon");
                (e = { x: n.x - c.height + 500, y: t.y }), (l = new CToggle(e.x, e.y, c, s_bAudioActive)), l.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this);
            }
            var _ = window.document,
                p = _.documentElement;
            (E = p.requestFullscreen || p.mozRequestFullScreen || p.webkitRequestFullScreen || p.msRequestFullscreen),
                (f = _.exitFullscreen || _.mozCancelFullScreen || _.webkitExitFullscreen || _.msExitFullscreen),
                ENABLE_FULLSCREEN === !1 && (E = !1),
                E &&
                    !inIframe() &&
                    ((c = s_oSpriteLibrary.getSprite("but_fullscreen")), (o = { x: c.width / 4, y: c.height / 2 + 10 }), (r = new CToggle(o.x, o.y, c, !1, s_oStage)), r.addEventListener(ON_MOUSE_UP, this._onFullscreen, this)),
                (d = new CScoreBoard(s_oStage)),
                (h = new CLaunchBoard(s_oStage)),
                (u = new CHelpText(s_oStage)),
                u.fadeAnim(1, null),
                this.refreshButtonPos(s_iOffsetX, s_iOffsetY);
        }),
        (this.refreshButtonPos = function (i, c) {
            a.setPosition(t.x - i, c + t.y), s.setPosition(n.x - i, c + n.y), (DISABLE_SOUND_MOBILE !== !1 && s_bMobile !== !1) || l.setPosition(e.x - i, c + e.y);
            var u = d.getStartPosScore();
            d.setPosScore(u.x + i, u.y - c);
            var _ = h.getStartPos();
            h.setPos(_.x - i, _.y - c), E && !inIframe() && r.setPosition(o.x + i, o.y + c);
        }),
        (this.unloadHelpText = function () {
            null !== u && (u.fadeAnim(0, u.unload), (u = null));
        }),
        (this.unload = function () {
            a.unload(), (a = null), (DISABLE_SOUND_MOBILE !== !1 && s_bMobile !== !1) || (l.unload(), (l = null)), E && !inIframe() && (r.unload(), (r = null)), (s_oInterface = null);
        }),
        (this.createWinPanel = function (e) {
            (p = new CWinPanel(s_oSpriteLibrary.getSprite("msg_box"))), p.show(e);
        }),
        (this.refreshTextScoreBoard = function (e, t, n, i) {
            d.refreshTextScore(e), i && d.effectAddScore(n, t);
        }),
        (this._onFullscreen = function () {
            s_bFullscreen ? (f.call(window.document), (s_bFullscreen = !1)) : (E.call(window.document.documentElement), (s_bFullscreen = !0)), sizeHandler();
        }),
        (this.createAnimText = function (e, t, n) {
            var i = new createjs.Container(),
                o = new createjs.Text(e, t + "px " + SECONDARY_FONT, TEXT_COLOR_STROKE);
            (o.x = 0), (o.y = 0), (o.textAlign = "center"), (o.outline = 4), i.addChild(o);
            var a = new createjs.Text(o.text, t + "px " + SECONDARY_FONT, "#ffffff");
            (a.x = 0),
            (a.y = 0),
            (a.textAlign = "center"),
            i.addChild(a),
            (i.x = CANVAS_WIDTH_HALF),
            (i.y = -o.getBounds().height),
            n && s_oInterface.strobeText(a),
            s_oStage.addChild(i),
            createjs.Tween.get(i)
                .to({ y: CANVAS_HEIGHT_HALF }, 500, createjs.Ease.cubicOut)
                .call(function () {
                    createjs.Tween.get(i)
                        .wait(250)
                        .to({ y: CANVAS_HEIGHT + o.getBounds().height }, 500, createjs.Ease.cubicIn)
                        .call(function () {
                            n && createjs.Tween.removeTweens(a), s_oStage.removeChild(i);
                        });
                });
        }),
        (this.strobeText = function (e) {
            createjs.Tween.get(e)
                .wait(30)
                .call(function () {
                    _ < TEXT_EXCELLENT_COLOR.length - 1 ? _++ : (_ = 0), (e.color = TEXT_EXCELLENT_COLOR[_]), s_oInterface.strobeText(e);
                });
        }),
        (this.refreshLaunchBoard = function (e, t) {
            h.refreshTextLaunch(e, t);
        }),
        (this._onAudioToggle = function () {
            createjs.Sound.setMute(s_bAudioActive), (s_bAudioActive = !s_bAudioActive);
        }),
        (this._onExit = function () {
            var e = new CAreYouSurePanel(s_oStage);
            e.show();
        }),
        (this.unloadPause = function () {
            c.unload(), (c = null);
        }),
        (this.onButPauseRelease = function () {
            playSound("click", 1, 0), (c = new CPause());
        }),
        (s_oInterface = this),
        this._init(),
        this
    );
}
function CHelpText(e) {
    var t, n, i, o = e;
    return (
        (this._init = function () {
            (i = new createjs.Container()),
                o.addChild(i),
                (t = new createjs.Text(TEXT_HELP, "42px " + FONT_GAME, TEXT_COLOR)),
                (t.x = CANVAS_WIDTH / 2),
                (t.y = CANVAS_HEIGHT_HALF),
                (t.textAlign = "center"),
                i.addChild(t),
                (n = new createjs.Text(TEXT_HELP, "42px " + FONT_GAME, TEXT_COLOR_STROKE)),
                (n.x = CANVAS_WIDTH / 2),
                (n.y = t.y),
                (n.textAlign = "center"),
                (n.outline = OUTLINE_WIDTH),
                i.addChild(n),
                (i.alpha = 0),

                // point text
                (t = new createjs.Text(AREAS_INFO[1].value, "20px " + FONT_GAME, TEXT_COLOR)),
                (t.x = CANVAS_WIDTH / 2),
                (t.y = 80),
                (t.textAlign = "center"),
                i.addChild(t);

                (t = new createjs.Text(AREAS_INFO[4].value, "20px " + FONT_GAME, TEXT_COLOR)),
                (t.x = CANVAS_WIDTH / 2),
                (t.y = 200),
                (t.textAlign = "center"),
                i.addChild(t);

                (t = new createjs.Text(AREAS_INFO[0].value, "20px " + FONT_GAME, TEXT_COLOR)),
                (t.x = 330),
                (t.y = 80),
                (t.textAlign = "center"),
                i.addChild(t);

                (t = new createjs.Text(AREAS_INFO[2].value, "20px " + FONT_GAME, TEXT_COLOR)),
                (t.x = 1030),
                (t.y = 80),
                (t.textAlign = "center"),
                i.addChild(t);

                (t = new createjs.Text(AREAS_INFO[5].value, "20px " + FONT_GAME, TEXT_COLOR)),
                (t.x = 1030),
                (t.y = 200),
                (t.textAlign = "center"),
                i.addChild(t);

                (t = new createjs.Text(AREAS_INFO[3].value, "20px " + FONT_GAME, TEXT_COLOR)),
                (t.x = 330),
                (t.y = 200),
                (t.textAlign = "center"),
                i.addChild(t);



               
        }),
        (this.fadeAnim = function (e, t) {
            createjs.Tween.get(i, { override: !0 })
                .to({ alpha: e }, MS_TIME_FADE_HELP_TEXT)
                .call(
                    function () {
                        null !== t && t();
                    },
                    null,
                    this
                );
        }),
        (this.unload = function () {
            createjs.Tween.removeTweens(i), o.removeChild(i);
        }),
        this._init(),
        this
    );
}
function CScenario() {
    var e, t, n, i, o, a, s, r, l, c, d, h, u, _, p, E, f;
    if (SHOW_3D_RENDER) var m = new CANNON.Demo();
    (this.getDemo = function () {
        return m;
    }),
        (this._init = function () {
            (e = SHOW_3D_RENDER ? m.getWorld() : new CANNON.World()),
                (f = new Array()),
                e.gravity.set(0, 0, -9.81),
                (e.broadphase = new CANNON.NaiveBroadphase()),
                (e.solver.iterations = 50),
                (e.solver.tolerance = 1e-5),
                (t = new CANNON.Material()),
                (n = new CANNON.Material()),
                (i = new CANNON.Material());
            var o = new CANNON.ContactMaterial(n, i, { friction: 0.1, restitution: 0.01 }),
                a = new CANNON.ContactMaterial(n, t, { friction: 0.2, restitution: 0.3 });
            e.addContactMaterial(o),
                e.addContactMaterial(a),
                s_oScenario._createBallBody(),
                s_oScenario._createFieldBody(),
                s_oScenario._createGoal(),
                s_oScenario.createBackGoalWall(),
                s_oScenario.createAreasGoal()
                // SHOW_AREAS_GOAL ? s_oScenario.createAreasGoal() : s_oScenario.createAreaGoal(GOAL_LINE_POS, BACK_WALL_GOAL_SIZE, COLOR_AREA_GOAL[0], null);
        }),
        (this.createAreasGoal = function () {
            AREA_GOAL_PROPERTIES.width = 5;
            let mul = 2;
            var mulX = [-18, 0, 19]
            for (var e = 0, t = mulX[o], n = FIRST_AREA_GOAL_POS.z, i = 0; i < NUM_AREA_GOAL.h; i++) {
                AREA_GOAL_PROPERTIES.height = e == 0?2: 5;
                
                n = e == 0? 1.90005: -5;
                for (var o = 0; o < NUM_AREA_GOAL.w; o++){

                    mul = (o == 0 || o == 2 ? 2: 8);
                    AREA_GOAL_PROPERTIES.width = o == 0 || o == 2 ? 2: 17;
                    (t = mulX[o]);
                   //// console.log( '{ x :',t,',y:',FIRST_AREA_GOAL_POS.y, ',z:', n,'}', AREA_GOAL_PROPERTIES);
                    s_oScenario.createAreaGoal({ x: t, y: FIRST_AREA_GOAL_POS.y, z: n }, AREA_GOAL_PROPERTIES, COLOR_AREA_GOAL[e], AREAS_INFO[e]);
                    e++;
                } 
                (n -= 2 * AREA_GOAL_PROPERTIES.height)
            }
        }),
        (this._createFieldBody = function () {
            if (
                ((r = new CANNON.Plane()),
                (l = new CANNON.Body({ mass: 0, material: t })),
                l.addShape(r),
                (l.position.z = -9),
                l.addEventListener("collide", function (e) {
                    s_oScenario.fieldCollision();
                }),
                e.addBody(l),
                SHOW_3D_RENDER)
            ) {
                var n = new THREE.MeshPhongMaterial({ color: 5803568, specular: 1118481, shininess: 10 });
                m.addVisual(l, n);
            }
        }),
        (this._createGoal = function () {
            (c = new CANNON.Cylinder(POLE_RIGHT_LEFT_SIZE.radius_top, POLE_RIGHT_LEFT_SIZE.radius_bottom, POLE_RIGHT_LEFT_SIZE.height, POLE_RIGHT_LEFT_SIZE.segments)),
                (h = new CANNON.Body({ mass: 0 })),
                (d = new CANNON.Cylinder(POLE_UP_SIZE.radius_top, POLE_UP_SIZE.radius_bottom, POLE_UP_SIZE.height, POLE_UP_SIZE.segments));
            var t = new CANNON.Quaternion();
            if (
                (t.setFromAxisAngle(new CANNON.Vec3(0, 1, 0), Math.PI / 2),
                d.transformAllPoints(new CANNON.Vec3(), t),
               //// console.log(POLE_UP_SIZE),
                h.addShape(c, new CANNON.Vec3(0.5 * POLE_UP_SIZE.height, 0, 0)),
                h.addShape(c, new CANNON.Vec3(0.5 * -POLE_UP_SIZE.height, 0, 0)),
                h.addShape(d, new CANNON.Vec3(0, 0, 0.5 * POLE_RIGHT_LEFT_SIZE.height)),
                h.position.set(BACK_WALL_GOAL_POSITION.x, BACK_WALL_GOAL_POSITION.y - UP_WALL_GOAL_SIZE.depth, BACK_WALL_GOAL_POSITION.z),
               //// console.log(BACK_WALL_GOAL_POSITION.x, BACK_WALL_GOAL_POSITION.y - UP_WALL_GOAL_SIZE.depth, BACK_WALL_GOAL_POSITION.z),
                h.addEventListener("collide", function (e) {
                    s_oScenario.poleCollision();
                }),
                e.addBody(h),
                SHOW_3D_RENDER)
            ) {
                var n = new THREE.MeshPhongMaterial({ color: 16777215, specular: 'red', shininess: 50 });
                m.addVisual(h, n);
            }
        }),
        (this.createBackGoalWall = function () {
           //// console.log('BACK_WALL_GOAL_SIZE => ',BACK_WALL_GOAL_SIZE, 'createBackGoalWall');
           //// console.log('UP_WALL_GOAL_SIZE => ',UP_WALL_GOAL_SIZE.width, UP_WALL_GOAL_SIZE.depth, UP_WALL_GOAL_SIZE.height);
           //// console.log('LEFT_RIGHT_WALL_GOAL_SIZE => ',LEFT_RIGHT_WALL_GOAL_SIZE.width, LEFT_RIGHT_WALL_GOAL_SIZE.depth, LEFT_RIGHT_WALL_GOAL_SIZE.height);
            (u = new CANNON.Box(new CANNON.Vec3(BACK_WALL_GOAL_SIZE.width, BACK_WALL_GOAL_SIZE.depth, BACK_WALL_GOAL_SIZE.height))),
                (_ = new CANNON.Box(new CANNON.Vec3(LEFT_RIGHT_WALL_GOAL_SIZE.width, LEFT_RIGHT_WALL_GOAL_SIZE.depth, LEFT_RIGHT_WALL_GOAL_SIZE.height))),
                (p = new CANNON.Box(new CANNON.Vec3(UP_WALL_GOAL_SIZE.width, UP_WALL_GOAL_SIZE.depth, UP_WALL_GOAL_SIZE.height))),
                (E = new CANNON.Body({ mass: 0, material: i })),
                E.addShape(u),
                E.addShape(_, new CANNON.Vec3(BACK_WALL_GOAL_SIZE.width, 0, 0)),
                E.addShape(_, new CANNON.Vec3(-BACK_WALL_GOAL_SIZE.width, 0, 0)),
                E.addShape(p, new CANNON.Vec3(0, 0, BACK_WALL_GOAL_SIZE.height)),
                E.position.set(BACK_WALL_GOAL_POSITION.x, BACK_WALL_GOAL_POSITION.y, BACK_WALL_GOAL_POSITION.z),
                e.addBody(E),
                SHOW_3D_RENDER && m.addVisual(E);
        }),
        (this.createAreaGoal = function (t, n, i, o) {
            ////// console.log(arguments, 'createAreaGoal');
            var a = new CANNON.Box(new CANNON.Vec3(n.width, n.depth, n.height)),
                s = new CANNON.Body({ mass: 0, userData: o });
            if (
                (s.addShape(a),
                s.position.set(t.x, t.y, t.z),
                (s.collisionResponse = 0),
                s.addEventListener("collide", function (e) {
                    s_oScenario.lineGoalCollision(e);
                }),
                e.addBody(s),
                SHOW_3D_RENDER)
            ) {
                var r = new THREE.MeshPhongMaterial({ color: i, specular: 1118481, shininess: 70 });
                m.addVisual(s, r);
            }
            return s;
        }),
        (this._createBallBody = function () {
            (o = new CANNON.Sphere(BALL_RADIUS)), (a = new CANNON.Body({ mass: BALL_MASS, material: n, linearDamping: BALL_LINEAR_DAMPING, angularDamping: 2 * BALL_LINEAR_DAMPING }));
            var t = new CANNON.Vec3(POSITION_BALL.x, POSITION_BALL.y, POSITION_BALL.z);
            if ((a.position.copy(t), a.addShape(o), e.add(a), SHOW_3D_RENDER)) {
                var i = new THREE.MeshPhongMaterial({ color: 16777215, specular: 1118481, shininess: 70 });
                s = m.addVisual(a, i);
            }
        }),
        (this.addImpulse = function (e, t) {
            var n = new CANNON.Vec3(0, 0, BALL_RADIUS),
                i = new CANNON.Vec3(t.x, t.y, t.z);
            e.applyImpulse(i, n);
        }),
        (this.addForce = function (e, t) {
            var n = new CANNON.Vec3(0, 0, 0),
                i = new CANNON.Vec3(t.x, t.y, t.z);
            e.applyForce(i, n);
        }),
        (this.getBodyVelocity = function (e) {
            return e.velocity;
        }),
        (this.ballBody = function () {
            return a;
        }),
        (this.ballMesh = function () {
            return s;
        }),
        (this.getCamera = function () {
            return m.camera();
        }),
        (this.fieldCollision = function () {
            s_oGame.fieldCollision(), s_oGame.ballFadeForReset();
        }),
        (this.setElementAngularVelocity = function (e, t) {
            e.angularVelocity.set(t.x, t.y, t.z);
        }),
        (this.setElementVelocity = function (e, t) {
            var n = new CANNON.Vec3(t.x, t.y, t.z);
            e.velocity = n;
        }),
        (this.setElementLinearDamping = function (e, t) {
            e.linearDamping = t;
        }),
        (this.getFieldBody = function () {
            return l;
        }),
        (this.lineGoalCollision = function (e) {
            console.log('lineGoalCollision');
            s_oGame.areaGoal(e.contact.bj.userData);
        }),
        (this.update = function () {
            e.step(PHYSICS_STEP);
        }),
        (this.getGoalBody = function () {
            return h;
        }),
        (this.poleCollision = function () {
            s_oGame.poleCollide();
        }),
        (this.destroyWorld = function () {
            for (var t = e.bodies, n = 0; n < t.length; n++) e.remove(t[n]);
            e = null;
        }),
        (s_oScenario = this),
        SHOW_3D_RENDER ? (m.addScene("Test", this._init), m.start()) : this._init();
}
function CBall(e, t, n, i, o) {
    var a, s, r, l, c, d = null, h = FOV * BALL_RADIUS, u = h, _ = 0, p = 0, E = null;
    return (
        (this._init = function (e, t, n) {
            (c = new createjs.Container()), s.addChild(c);
            var i = { images: [n], frames: { width: n.width / 7, height: n.height, regX: n.width / 2 / 7, regY: n.height / 2 } },
                o = new createjs.SpriteSheet(i);
            (a = createSprite(o, 0, n.width / 2 / 7, n.height / 2, n.width / 7, n.height / 2)), a.stop(), this.scale(h);
            var r = s_oSpriteLibrary.getSprite("ball_shadow");
            (l = createBitmap(r)), (l.x = e), (l.y = t), (l.regX = 0.5 * r.width), (l.regY = 0.5 * r.height), this.scaleShadow(u), c.addChild(l, a);
        }),
        (this.rolls = function () {
            
            var e = 0.15 * r.velocity.x,
                t = Math.sin(-e);
            a.rotation = Math.degrees(t);
            var n = Math.abs(r.angularVelocity.x),
                i = this._goToPrevFrame;
            r.angularVelocity.x < 0 && (i = this._goToNextFrame),
                n > 7 ? i() : n > 3 ? (_++, _ > 2 / ROLL_BALL_RATE && (i(), (_ = 0))) : n > 1 ? (_++, _ > 3 / ROLL_BALL_RATE && (i(), (_ = 0))) : n > MIN_BALL_VEL_ROTATION && (_++, _ > 4 / ROLL_BALL_RATE && (i(), (_ = 0)));
        }),
        (this._goToPrevFrame = function () {
            0 === p ? ((p = 6), a.gotoAndStop(p)) : (p--, a.gotoAndStop(p));
        }),
        (this._goToNextFrame = function () {
            7 === p ? ((p = 1), a.gotoAndStop(p)) : (p++, a.gotoAndStop(p));
        }),
        (this.unload = function () {
            a.removeAllEventListeners(), s.removeChild(a);
        }),
        (this.setVisible = function (e) {
            c.visible = e;
        }),
        (this.getStartScale = function () {
            return u;
        }),
        (this.startPosShadowY = function (e) {
            d = e;
        }),
        (this.getStartShadowYPos = function () {
            return d;
        }),
        (this.fadeAnimation = function (e, t, n) {
            this.tweenFade(e, t, n);
        }),
        (this.tweenFade = function (e, t, n) {
            E = createjs.Tween.get(c, { override: !0 })
                .wait(n)
                .to({ alpha: e }, t)
                .call(function () {
                    E = null;
                });
        }),
        (this.setPositionShadow = function (e, t) {
            (l.x = e), (l.y = t);
        }),
        (this.setPosition = function (e, t) {
            (a.x = e), (a.y = t);
        }),
        (this.getPhysics = function () {
            return r;
        }),
        (this.setAngle = function (e) {
            a.rotation = e;
        }),
        (this.getX = function () {
            return a.x;
        }),
        (this.getY = function () {
            return a.y;
        }),
        (this.getStartScale = function () {
            return h;
        }),
        (this.scale = function (e) {
            (a.scaleX = e), (a.scaleY = e);
        }),
        (this.scaleShadow = function (e) {
            e > 0.08 ? ((l.scaleX = e), (l.scaleY = e)) : ((l.scaleX = 0.08), (l.scaleY = 0.08));
        }),
        (this.setAlphaByHeight = function (e) {
            l.alpha = e;
        }),
        (this.getScale = function () {
            return a.scaleX;
        }),
        (this.getObject = function () {
            return c;
        }),
        (this.getDepthPos = function () {
            return r.position.y;
        }),
        (r = i),
        (s = o),
        this._init(e, t, n),
        this
    );
}
function CMain(e) {
    var t, n, i, o, a, s, r = 0, l = 0, c = STATE_LOADING;
    (this.initContainer = function () {
        var e = document.getElementById("canvas");
        (s_oStage = new createjs.Stage(e)),
            createjs.Touch.enable(s_oStage),
            (s_oStage.preventSelection = !1),
            (s_bMobile = jQuery.browser.mobile),
            s_bMobile === !1
                ? (s_oStage.enableMouseOver(20),
                  $("body").on("contextmenu", "#canvas", function (e) {
                      return !1;
                  }),
                  (FPS = FPS_DESKTOP),
                  (FPS_TIME = 1 / FPS),
                  (PHYSICS_STEP = 1 / (FPS * STEP_RATE)),
                  (ROLL_BALL_RATE = 60 / FPS))
                : (BALL_VELOCITY_MULTIPLIER = 0.8),
            (s_iPrevTime = new Date().getTime()),
            createjs.Ticker.addEventListener("tick", this._update),
            createjs.Ticker.setFPS(FPS),
            navigator.userAgent.match(/Windows Phone/i) && (DISABLE_SOUND_MOBILE = !0),
            (s_oSpriteLibrary = new CSpriteLibrary()),
            (i = new CPreloader()),
            (t = !0);
    }),
        (this.soundLoaded = function () {
            r++;
            var e = Math.floor((r / l) * 100);
            i.refreshLoader(e), r === l && (i.unload(), (DISABLE_SOUND_MOBILE !== !1 && s_bMobile !== !1) || (s_oSoundTrack = createjs.Sound.play("soundtrack", { loop: -1 })), this.gotoMenu());
        }),
        (this._initSounds = function () {
            createjs.Sound.initializeDefaultPlugins() &&
                (navigator.userAgent.indexOf("Opera") > 0 || navigator.userAgent.indexOf("OPR") > 0
                    ? ((createjs.Sound.alternateExtensions = ["mp3"]),
                      createjs.Sound.addEventListener("fileload", createjs.proxy(this.soundLoaded, this)),
                      createjs.Sound.registerSound("./sounds/click.ogg", "click"),
                      createjs.Sound.registerSound("./sounds/drop_bounce_grass.ogg", "drop_bounce_grass"),
                      createjs.Sound.registerSound("./sounds/soundtrack.ogg", "soundtrack"),
                      createjs.Sound.registerSound("./sounds/goal.ogg", "goal"),
                      createjs.Sound.registerSound("./sounds/ball_saved.ogg", "ball_saved"),
                      createjs.Sound.registerSound("./sounds/kick.ogg", "kick"),
                      createjs.Sound.registerSound("./sounds/pole.ogg", "pole"))
                    : ((createjs.Sound.alternateExtensions = ["ogg"]),
                      createjs.Sound.addEventListener("fileload", createjs.proxy(this.soundLoaded, this)),
                      createjs.Sound.registerSound("./sounds/click.mp3", "click"),
                      createjs.Sound.registerSound("./sounds/drop_bounce_grass.mp3", "drop_bounce_grass"),
                      createjs.Sound.registerSound("./sounds/soundtrack.mp3", "soundtrack"),
                      createjs.Sound.registerSound("./sounds/goal.mp3", "goal"),
                      createjs.Sound.registerSound("./sounds/ball_saved.mp3", "ball_saved"),
                      createjs.Sound.registerSound("./sounds/kick.mp3", "kick"),
                      createjs.Sound.registerSound("./sounds/pole.mp3", "pole")),
                (l += 7));
        }),
        (this._loadImages = function () {
            s_oSpriteLibrary.init(this._onImagesLoaded, this._onAllImagesLoaded, this),
                s_oSpriteLibrary.addSprite("but_play", "./sprites/but_play.png"),
                s_oSpriteLibrary.addSprite("but_exit", "./sprites/but_exit.png"),
                s_oSpriteLibrary.addSprite("bg_menu", "./assets/image/bg_menu.jpg"),
                s_oSpriteLibrary.addSprite("bg_game", "./assets/image/bg_game.jpg"),
                s_oSpriteLibrary.addSprite("odd_middle_green", "./assets/image/level1/green-point.png"),s_oSpriteLibrary.addSprite("defender", "./assets/image/defender@2x.png"),
                s_oSpriteLibrary.addSprite("odds-blue-right", "./assets/image/level1/odds-blue-right.png"),
                s_oSpriteLibrary.addSprite("odds-blue-left", "./assets/image/level1/odds-blue-left.png"),
                s_oSpriteLibrary.addSprite("odd_top_blue", "./assets/image/level1/odds-blue-top.png"),
                s_oSpriteLibrary.addSprite("odd_left_red", "./assets/image/level1/odds-red-left.png"),
                s_oSpriteLibrary.addSprite("odd_right_red", "./assets/image/level1/odds-red-right.png"),
                s_oSpriteLibrary.addSprite("odds-defender", "./assets/image/level1/odds-defender@2x.png"),
                s_oSpriteLibrary.addSprite("odds-gk", "./assets/image/level1/odds-GK@2x.png"),
                s_oSpriteLibrary.addSprite("odds-defender", "./assets/image/level1/odds-defender@2x.png"),
                s_oSpriteLibrary.addSprite("msg_box", "./sprites/msg_box.png"),
                s_oSpriteLibrary.addSprite("audio_icon", "./sprites/audio_icon.png"),
                s_oSpriteLibrary.addSprite("but_home", "./sprites/but_home.png"),
                s_oSpriteLibrary.addSprite("but_restart", "./sprites/but_restart.png"),
                s_oSpriteLibrary.addSprite("but_fullscreen", "./sprites/but_fullscreen.png"),
                s_oSpriteLibrary.addSprite("ball", "./sprites/ball.png"),
                s_oSpriteLibrary.addSprite("but_level", "./sprites/but_level.png"),
                s_oSpriteLibrary.addSprite("but_continue", "./sprites/but_continue.png"),
                s_oSpriteLibrary.addSprite("but_yes", "./sprites/but_yes.png"),
                s_oSpriteLibrary.addSprite("but_no", "./sprites/but_no.png"),
                s_oSpriteLibrary.addSprite("but_info", "./sprites/but_info.png"),
                s_oSpriteLibrary.addSprite("logo_ctl", "./sprites/logo_ctl.png"),
                s_oSpriteLibrary.addSprite("but_pause", "./sprites/but_pause.png"),
                s_oSpriteLibrary.addSprite("arrow_right", "./sprites/arrow_right.png"),
                s_oSpriteLibrary.addSprite("arrow_left", "./sprites/arrow_left.png"),
                s_oSpriteLibrary.addSprite("ball_shadow", "./sprites/ball_shadow.png"),
                s_oSpriteLibrary.addSprite("start_ball", "./sprites/start_ball.png"),
                s_oSpriteLibrary.addSprite("hand_touch", "./sprites/hand_touch.png"),
                s_oSpriteLibrary.addSprite("cursor", "./sprites/cursor.png"),
                s_oSpriteLibrary.addSprite("shot_left", "./sprites/shot_left.png"),
                s_oSpriteLibrary.addSprite("goal", "./sprites/goal.png");
            for (var e = 0; NUM_SPRITE_PLAYER > e; e++) s_oSpriteLibrary.addSprite("player_" + e, "./sprites/player/player_" + e + ".png");
            for (var e = 0; e < NUM_SPRITE_GOALKEEPER[IDLE]; e++) s_oSpriteLibrary.addSprite(SPRITE_NAME_GOALKEEPER[IDLE] + e, "./sprites/goalkeeper_idle/gk_idle_" + e + ".png");
            for (var e = 0; e < NUM_SPRITE_GOALKEEPER[RIGHT]; e++) s_oSpriteLibrary.addSprite(SPRITE_NAME_GOALKEEPER[RIGHT] + e, "./sprites/goalkeeper_save_right/gk_save_right_" + e + ".png");
            for (var e = 0; e < NUM_SPRITE_GOALKEEPER[LEFT]; e++) s_oSpriteLibrary.addSprite(SPRITE_NAME_GOALKEEPER[LEFT] + e, "./sprites/goalkeeper_save_left/gk_save_left_" + e + ".png");
            for (var e = 0; e < NUM_SPRITE_GOALKEEPER[CENTER_DOWN]; e++) s_oSpriteLibrary.addSprite(SPRITE_NAME_GOALKEEPER[CENTER_DOWN] + e, "./sprites/goalkeeper_save_center_down/gk_save_center_down_" + e + ".png");
            for (var e = 0; e < NUM_SPRITE_GOALKEEPER[CENTER_UP]; e++) s_oSpriteLibrary.addSprite(SPRITE_NAME_GOALKEEPER[CENTER_UP] + e, "./sprites/goalkeeper_save_center_up/gk_save_center_up_" + e + ".png");
            for (var e = 0; e < NUM_SPRITE_GOALKEEPER[LEFT_DOWN]; e++) s_oSpriteLibrary.addSprite(SPRITE_NAME_GOALKEEPER[LEFT_DOWN] + e, "./sprites/goalkeeper_save_down_left/gk_save_down_left_" + e + ".png");
            for (var e = 0; e < NUM_SPRITE_GOALKEEPER[RIGHT_DOWN]; e++) s_oSpriteLibrary.addSprite(SPRITE_NAME_GOALKEEPER[RIGHT_DOWN] + e, "./sprites/goalkeeper_save_down_right/gk_save_down_right_" + e + ".png");
            (l += s_oSpriteLibrary.getNumSprites()), s_oSpriteLibrary.loadSprites();
        }),
        (this._onImagesLoaded = function () {
            r++;
            var e = Math.floor((r / l) * 100);
            i.refreshLoader(e), r === l && (i.unload(), (DISABLE_SOUND_MOBILE !== !1 && s_bMobile !== !1) || (s_oSoundTrack = createjs.Sound.play("soundtrack", { loop: -1 })), this.gotoMenu());
        }),
        (this._onAllImagesLoaded = function () {}),
        (this.onAllPreloaderImagesLoaded = function () {
            this._loadImages();
        }),
        (this.preloaderReady = function () {
            (DISABLE_SOUND_MOBILE !== !1 && s_bMobile !== !1) || (this._initSounds(), (s_oSoundTrack = createjs.Sound.play("soundtrack", { loop: -1 }))), this._loadImages(), (t = !0);
        }),
        (this.gotoMenu = function () {
            (o = new CMenu()), (c = STATE_MENU);
        }),
        (this.gotoGame = function () {
            (s = new CGame(n)), (c = STATE_GAME);
        }),
        (this.gotoHelp = function () {
            (a = new CHelp()), (c = STATE_HELP);
        }),
        (this.stopUpdate = function () {
            (t = !1), (createjs.Ticker.paused = !0), $("#block_game").css("display", "block"), createjs.Sound.setMute(!0);
        }),
        (this.startUpdate = function () {
            (s_iPrevTime = new Date().getTime()), (t = !0), (createjs.Ticker.paused = !1), $("#block_game").css("display", "none"), s_bAudioActive && createjs.Sound.setMute(!1);
        }),
        (this._update = function (e) {
            if (t !== !1) {
                var n = new Date().getTime();
                (s_iTimeElaps = n - s_iPrevTime),
                    (s_iCntTime += s_iTimeElaps),
                    s_iCntFps++,
                    (s_iPrevTime = n),
                    s_iCntTime >= 1e3 && ((s_iCurFps = s_iCntFps), (s_iCntTime -= 1e3), (s_iCntFps = 0)),
                    c === STATE_GAME && s.update(),
                    s_oStage.update(e);
            }
        }),
        (s_oMain = this),
        (n = e),
        this.initContainer();
}
function CGoal(e, t, n, i) {
    var o, a;
    return (
        (this._init = function (e, t, n) {
            (o = createBitmap(n)), this.setPosition(e, t), o.cache(0, 0, n.width, n.height), a.addChild(o);
        }),
        (this.unload = function () {
            a.removeChild(o);
        }),
        (this.setPosition = function (e, t) {
            (o.x = e), (o.y = t);
        }),
        (this.getDepthPos = function () {
            return GOAL_SPRITE_SWAP_Y;
        }),
        (this.getObject = function () {
            return o;
        }),
        (a = i),
        this._init(e, t, n),
        this
    );
}
function CPause() {
    var e, t;
    return (
        (this._init = function () {
            (e = new createjs.Container()), (e.alpha = 0), (t = new createjs.Shape()), t.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT), (t.alpha = 0.5), t.on("click", function () {}), e.addChild(t);
            var n = new createjs.Text(TEXT_PAUSE, "70px " + FONT_GAME, TEXT_COLOR);
            (n.x = 0.5 * CANVAS_WIDTH), (n.y = 0.5 * CANVAS_HEIGHT - 100), (n.textAlign = "center"), e.addChild(n);
            var i = new createjs.Text(TEXT_PAUSE, "70px " + FONT_GAME, TEXT_COLOR_STROKE);
            (i.x = 0.5 * CANVAS_WIDTH), (i.y = 0.5 * CANVAS_HEIGHT - 100), (i.outline = OUTLINE_WIDTH), (i.textAlign = "center"), e.addChild(i);
            var o,
                a = s_oSpriteLibrary.getSprite("but_continue");
            (o = new CGfxButton(0.5 * CANVAS_WIDTH, 0.5 * CANVAS_HEIGHT + 70, a, e)), o.addEventListener(ON_MOUSE_UP, this._onLeavePause, this), s_oStage.addChild(e);
            var s = this;
            createjs.Tween.get(e)
                .to({ alpha: 1 }, 150, createjs.quartOut)
                .call(function () {
                    s.onPause(!0);
                });
        }),
        (this.onPause = function (e) {
            s_oGame.pause(e);
        }),
        (this.unload = function () {
            t.off("click", function () {}), s_oStage.removeChild(e);
        }),
        (this._onLeavePause = function () {
            playSound("click", 1, 0), (createjs.Ticker.paused = !1), createjs.Tween.removeTweens(e);
            var t = this;
            createjs.Tween.get(e)
                .to({ alpha: 0 }, 150, createjs.quartIn)
                .call(function () {
                    t.onPause(!1), s_oInterface.unloadPause();
                });
        }),
        this._init(),
        this
    );
}
function CPreloader() {
    var e, t, n, i, o, a, s, r;
    (this._init = function () {
        s_oSpriteLibrary.init(this._onImagesLoaded, this._onAllImagesLoaded, this),
            s_oSpriteLibrary.addSprite("bg_menu", "./assets/image/bg_menu.jpg"),
            s_oSpriteLibrary.addSprite("progress_bar", "./sprites/progress_bar.png"),
            s_oSpriteLibrary.loadSprites(),
            (r = new createjs.Container()),
            s_oStage.addChild(r);
    }),
        (this.unload = function () {
            r.removeAllChildren();
        }),
        (this.hide = function () {
            var e = this;
            setTimeout(function () {
                createjs.Tween.get(s)
                    .to({ alpha: 1 }, 500)
                    .call(function () {
                        e.unload(), s_oMain.gotoMenu();
                    });
            }, 1e3);
        }),
        (this._onImagesLoaded = function () {}),
        (this._onAllImagesLoaded = function () {
            this.attachSprites(), s_oMain.preloaderReady();
        }),
        (this.attachSprites = function () {
            var l = createBitmap(s_oSpriteLibrary.getSprite("bg_menu"));
            r.addChild(l);
            var c = s_oSpriteLibrary.getSprite("progress_bar");
            (o = createBitmap(c)),
                (o.x = CANVAS_WIDTH / 2 - c.width / 2),
                (o.y = CANVAS_HEIGHT - 200),
                r.addChild(o),
                (e = c.width),
                (t = c.height),
                (a = new createjs.Shape()),
                a.graphics.beginFill("rgba(255,255,255,0.01)").drawRect(o.x, o.y, 1, t),
                r.addChild(a),
                (o.mask = a),
                (n = new createjs.Text("", "30px " + FONT_GAME, "#fff")),
                (n.x = CANVAS_WIDTH / 2),
                (n.y = CANVAS_HEIGHT - 200),
                (n.textBaseline = "alphabetic"),
                (n.textAlign = "center"),
                r.addChild(n),
                (i = new createjs.Text("", "30px " + SECONDARY_FONT, "#fff")),
                (i.x = CANVAS_WIDTH + 200),
                (i.y = CANVAS_HEIGHT + 200),
                (i.textBaseline = "alphabetic"),
                (i.textAlign = "center"),
                r.addChild(i),
                (s = new createjs.Shape()),
                s.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT),
                (s.alpha = 0),
                r.addChild(s);
        }),
        (this.refreshLoader = function (s) {
            (n.text = s + "%"), (i.text = s + "%"), a.graphics.clear();
            var r = Math.floor((s * e) / 100);
            a.graphics.beginFill("rgba(255,255,255,0.01)").drawRect(o.x, o.y, r, t);
        }),
        this._init();
}
function CTextButton(e, t, n, i, o, a, s) {
    var r, l, c;
    return (
        (this._init = function (e, t, n, i, o, a, s) {
            (r = new Array()), (l = new Array());
            var d = createBitmap(n),
                h = Math.ceil(s / 20),
                u = new createjs.Text(i, "bold " + s + "px " + o, "#000000");
            (u.textAlign = "center"), (u.textBaseline = "alphabetic");
            var _ = u.getBounds();
            (u.x = n.width / 2 + h), (u.y = Math.floor(n.height / 2) + _.height / 3 + h);
            var p = new createjs.Text(i, "bold " + s + "px " + o, a);
            (p.textAlign = "center"), (p.textBaseline = "alphabetic");
            var _ = p.getBounds();
            (p.x = n.width / 2),
                (p.y = Math.floor(n.height / 2) + _.height / 3),
                (c = new createjs.Container()),
                (c.x = e),
                (c.y = t),
                (c.regX = n.width / 2),
                (c.regY = n.height / 2),
                c.addChild(d, u, p),
                s_bMobile || (c.cursor = "pointer"),
                s_oStage.addChild(c),
                this._initListener();
        }),
        (this.unload = function () {
            c.off("mousedown"), c.off("pressup"), s_oStage.removeChild(c);
        }),
        (this.setVisible = function (e) {
            c.visible = e;
        }),
        (this._initListener = function () {
            (oParent = this), c.on("mousedown", this.buttonDown), c.on("pressup", this.buttonRelease);
        }),
        (this.addEventListener = function (e, t, n) {
            (r[e] = t), (l[e] = n);
        }),
        (this.buttonRelease = function () {
            (c.scaleX = 1), (c.scaleY = 1), playSound("click", 1, 0), r[ON_MOUSE_UP] && r[ON_MOUSE_UP].call(l[ON_MOUSE_UP]);
        }),
        (this.buttonDown = function () {
            (c.scaleX = 0.9), (c.scaleY = 0.9), r[ON_MOUSE_DOWN] && r[ON_MOUSE_DOWN].call(l[ON_MOUSE_DOWN]);
        }),
        (this.setPosition = function (e, t) {
            (c.x = e), (c.y = t);
        }),
        (this.setX = function (e) {
            c.x = e;
        }),
        (this.setY = function (e) {
            c.y = e;
        }),
        (this.getButtonImage = function () {
            return c;
        }),
        (this.getX = function () {
            return c.x;
        }),
        (this.getY = function () {
            return c.y;
        }),
        this._init(e, t, n, i, o, a, s),
        this
    );
}
function CCreditsPanel() {
    var e, t, n, i, o, a, s, r, l, c = 0;
    (this[_0x3619[0]] = function () {
        (l = new createjs.Container()), s_oStage[_0x3619[1]](l);
        var c = s_oSpriteLibrary[_0x3619[3]](_0x3619[2]);
        (a = new createjs.Shape()),
            a[_0x3619[7]][_0x3619[6]](_0x3619[5])[_0x3619[4]](0, 0, CANVAS_WIDTH, CANVAS_HEIGHT),
            (a[_0x3619[8]] = 0.5),
            a[_0x3619[10]](_0x3619[9], this._onLogoButRelease),
            (a[_0x3619[11]] = _0x3619[12]),
            l[_0x3619[1]](a),
            (e = createBitmap(c)),
            (e[_0x3619[13]] = CANVAS_WIDTH_HALF),
            (e[_0x3619[14]] = CANVAS_HEIGHT_HALF),
            (e[_0x3619[15]] = 0.5 * c[_0x3619[16]]),
            (e[_0x3619[17]] = 0.5 * c[_0x3619[18]]),
            l[_0x3619[1]](e),
            (o = new createjs.Shape()),
            o[_0x3619[7]][_0x3619[6]](_0x3619[19])[_0x3619[4]](CANVAS_WIDTH - 2 * EDGEBOARD_X, CANVAS_HEIGHT - 2 * EDGEBOARD_Y, 2 * EDGEBOARD_X, 2 * EDGEBOARD_Y),
            (o[_0x3619[8]] = 0.01),
            o[_0x3619[10]](_0x3619[9], this[_0x3619[20]]),
            (o[_0x3619[11]] = _0x3619[12]),
            l[_0x3619[1]](o);
        var d = s_oSpriteLibrary[_0x3619[3]](_0x3619[21]);
        (r = { x: 0.5 * CANVAS_WIDTH + 270, y: 181 }),
            (n = new CGfxButton(r[_0x3619[13]], r[_0x3619[14]], d, l)),
            n[_0x3619[23]](ON_MOUSE_UP, this[_0x3619[22]], this),
            (i = new createjs.Text(_0x3619[24], _0x3619[25] + FONT_GAME, _0x3619[26])),
            (i[_0x3619[27]] = _0x3619[28]),
            (i[_0x3619[29]] = _0x3619[30]),
            (i[_0x3619[13]] = CANVAS_WIDTH / 2),
            (i[_0x3619[14]] = 230),
            l[_0x3619[1]](i),
            (d = s_oSpriteLibrary[_0x3619[3]](_0x3619[31])),
            (t = createBitmap(d)),
            (t[_0x3619[15]] = d[_0x3619[16]] / 2),
            (t[_0x3619[17]] = d[_0x3619[18]] / 2),
            (t[_0x3619[13]] = CANVAS_WIDTH / 2),
            (t[_0x3619[14]] = 310),
            l[_0x3619[1]](t),
            (s = new createjs.Text(_0x3619[32], _0x3619[33] + FONT_GAME, _0x3619[26])),
            (s[_0x3619[27]] = _0x3619[28]),
            (s[_0x3619[29]] = _0x3619[30]),
            (s[_0x3619[13]] = CANVAS_WIDTH / 2),
            (s[_0x3619[14]] = 420),
            l[_0x3619[1]](s);
    }),
        (this[_0x3619[20]] = function () {
            if (5 === c) {
                var e = new createjs.Text(_0x3619[34], _0x3619[35] + FONT_GAME, TEXT_COLOR);
                (e[_0x3619[27]] = _0x3619[28]), (e[_0x3619[29]] = _0x3619[36]), (e[_0x3619[37]] = 500);
                var t = new createjs.Text(_0x3619[34], _0x3619[35] + FONT_GAME, TEXT_COLOR_STROKE);
                (t[_0x3619[27]] = _0x3619[28]), (t[_0x3619[29]] = _0x3619[36]), (t[_0x3619[37]] = 500), (t[_0x3619[38]] = 1);
                var n = new createjs.Container();
                n[_0x3619[1]](e),
                    n[_0x3619[1]](t),
                    (n[_0x3619[13]] = CANVAS_WIDTH_HALF),
                    (n[_0x3619[14]] = -e[_0x3619[39]]()[_0x3619[18]]),
                    l[_0x3619[1]](n),
                    createjs[_0x3619[48]]
                        [_0x3619[47]](n)
                        [_0x3619[44]]({ y: CANVAS_HEIGHT_HALF + 200 }, 1e3, createjs[_0x3619[43]][_0x3619[46]])
                        [_0x3619[45]](3e3)
                        [_0x3619[44]]({ alpha: 0 }, 1e3, createjs[_0x3619[43]][_0x3619[42]])
                        [_0x3619[41]](function () {
                            l[_0x3619[40]](e), (c = 0);
                        });
            }
            c++;
        }),
        (this[_0x3619[22]] = function () {
            a[_0x3619[49]](_0x3619[9], this._onLogoButRelease), n[_0x3619[22]](), (n = null), o[_0x3619[50]](), s_oStage[_0x3619[40]](l);
        }),
        (this[_0x3619[51]] = function () {
            window[_0x3619[54]](_0x3619[52], _0x3619[53]);
        }),
        this._init();
}
function CLosePanel(e) {
    var t, n, i, o, a, s, r = null, l = !1;
    return (
        (this._init = function (e) {
            (s = new createjs.Shape()),
                s.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT),
                (s.alpha = 0),
                s_oStage.addChild(s),
                (o = new createjs.Container()),
                (o.alpha = 1),
                (o.visible = !1),
                (o.y = CANVAS_HEIGHT),
                (t = createBitmap(e)),
                (t.x = CANVAS_WIDTH_HALF),
                (t.y = CANVAS_HEIGHT_HALF),
                (t.regX = 0.5 * e.width),
                (t.regY = 0.5 * e.height),
                o.addChild(t),
                (n = new createjs.Text("", "45px " + FONT_GAME, "#ffffff")),
                (n.x = CANVAS_WIDTH / 2),
                (n.y = CANVAS_HEIGHT_HALF),
                (n.textAlign = "center"),
                (n.textBaseline = "middle"),
                o.addChild(n),
                (i = new createjs.Text("", "bold 100px " + FONT_GAME, "#ffffff")),
                (i.x = CANVAS_WIDTH / 2),
                (i.y = CANVAS_HEIGHT_HALF - 210),
                (i.textAlign = "center"),
                o.addChild(i),
                s_oStage.addChild(o);
            var l = s_oSpriteLibrary.getSprite("but_home");
            (r = new CGfxButton(0.5 * CANVAS_WIDTH - 360, 0.5 * CANVAS_HEIGHT + 180, l, o)), r.addEventListener(ON_MOUSE_DOWN, this._onExit, this);
            var c = s_oSpriteLibrary.getSprite("but_restart");
            (a = new CGfxButton(0.5 * CANVAS_WIDTH + 360, 0.5 * CANVAS_HEIGHT + 180, c, o)), a.addEventListener(ON_MOUSE_DOWN, this._onRestart, this), a.pulseAnimation();
        }),
        (this.unload = function () {
            createjs.Tween.get(o)
                .to({ alpha: 0 }, 500, createjs.Ease.cubicOut)
                .call(function () {
                    s_oStage.removeChild(o), null !== r && (r.unload(), (r = null)), s.removeAllEventListeners(), a.unload(), (a = null);
                });
        }),
        (this.show = function (e, t) {
            (n.text = TEXT_LOSE_RESULT + " " + e + " " + TEXT_OF + " " + t + " " + TEXT_BALLS),
                (i.text = TEXT_LOSE),
                (o.visible = !0),
                createjs.Tween.get(s).to({ alpha: 0.5 }, 500, createjs.Ease.cubicOut),
                s.on("click", function () {}),
                createjs.Tween.get(o)
                    .wait(250)
                    .to({ y: 0 }, 1250, createjs.Ease.elasticOut)
                    .call(function () {
                        s_iAdsLevel === NUM_LEVEL_FOR_ADS ? ($(s_oMain).trigger("show_interlevel_ad"), (s_iAdsLevel = 1)) : s_iAdsLevel++;
                    });
        }),
        (this._onRestart = function () {
            l ||
                ((l = !0),
                this.unload(),
                createjs.Tween.get(s)
                    .to({ alpha: 0 }, 400, createjs.Ease.cubicOut)
                    .call(function () {
                        s_oStage.removeChild(s);
                    }),
                s_oGame.restartLevel());
        }),
        (this._onExit = function () {
            l || ((l = !0), this.unload(), s_oGame.onExit());
        }),
        this._init(e),
        this
    );
}
function CMenu() {
    var e, t, n, i, o, a, s, r;
    (this._init = function () {
        (i = createBitmap(s_oSpriteLibrary.getSprite("bg_menu"))), s_oStage.addChild(i);
        var l = s_oSpriteLibrary.getSprite("but_play");
        if (
            ((t = { x: CANVAS_WIDTH / 2 + 10, y: CANVAS_HEIGHT /2 }),
            (o = new CGfxButton(t.x, t.y, l)),



            o.addEventListener(ON_MOUSE_UP, this._onButPlayRelease, this),
            
            o.pulseAnimation(),
            (s_iBestScore = getItem(LOCALSTORAGE_STRING[LOCAL_BEST_SCORE])),
            null === s_iBestScore && (s_iBestScore = 0),
            DISABLE_SOUND_MOBILE === !1 || s_bMobile === !1)
        ) {
            setTimeout(()=>{
                const urlParams = new URLSearchParams(window.location.search);
                var status = urlParams.get('status') || false;
                status = status ? Number(status): 0;
                if(status > 1) this._onButPlayRelease();

            });
            var l = s_oSpriteLibrary.getSprite("audio_icon");
            (e = { x: CANVAS_WIDTH - l.height / 2 + 500, y: l.height / 2 + 10 }), (r = new CToggle(e.x, e.y, l, s_bAudioActive)), r.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this);
        }
        var c = s_oSpriteLibrary.getSprite("but_info");
        (n = { x: l.height / 2 - 500, y: l.height / 2 + 10 }),
            (a = new CGfxButton(n.x, n.y, c, s_oStage)),
            a.addEventListener(ON_MOUSE_UP, this._onButInfoRelease, this),
            (s = new createjs.Shape()),
            s.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT),
            s_oStage.addChild(s),
            createjs.Tween.get(s)
                .to({ alpha: 0 }, 1e3)
                .call(function () {
                    s.visible = !1;
                }),
            this.refreshButtonPos(s_iOffsetX, s_iOffsetY);
    }),
        (this.refreshButtonPos = function (t, i) {
            (DISABLE_SOUND_MOBILE !== !1 && s_bMobile !== !1) || r.setPosition(e.x - t, i + e.y), a.setPosition(n.x + t, n.y + i);
        }),
        (this.unload = function () {
            o.unload(), (o = null), (DISABLE_SOUND_MOBILE !== !1 && s_bMobile !== !1) || (r.unload(), (r = null)), s_oStage.removeAllChildren(), (s_oMenu = null);
        }),
        (this._onButPlayRelease = function () {
            this.unload(), playSound("click", 1, 0), s_oMain.gotoGame();
            $(s_oMain).trigger("but_play", e)

        }),
        (this._onAudioToggle = function () {
            createjs.Sound.setMute(s_bAudioActive), (s_bAudioActive = !s_bAudioActive);
        }),
        (this._onButInfoRelease = function () {
            new CCreditsPanel();
        }),
        (s_oMenu = this),
        this._init();
}
function CVector2(e, t) {
    var n, i;
    (this._init = function (e, t) {
        (n = e), (i = t);
    }),
        (this.add = function (e, t) {
            (n += e), (i += t);
        }),
        (this.addV = function (e) {
            (n += e.getX()), (i += e.getY());
        }),
        (this.scalarDivision = function (e) {
            (n /= e), (i /= e);
        }),
        (this.subtract = function (e) {
            (n -= e.getX()), (i -= e.getY());
        }),
        (this.scalarProduct = function (e) {
            (n *= e), (i *= e);
        }),
        (this.invert = function () {
            (n *= -1), (i *= -1);
        }),
        (this.dotProduct = function (e) {
            return n * e.getX() + i * e.getY();
        }),
        (this.set = function (e, t) {
            (n = e), (i = t);
        }),
        (this.setV = function (e) {
            (n = e.getX()), (i = e.getY());
        }),
        (this.length = function () {
            return Math.sqrt(n * n + i * i);
        }),
        (this.length2 = function () {
            return n * n + i * i;
        }),
        (this.normalize = function () {
            var e = this.length();
            e > 0 && ((n /= e), (i /= e));
        }),
        (this.angleBetweenVectors = function (e) {
            var t = Math.acos(this.dotProduct(e) / (this.length() * e.length()));
            return isNaN(t) === !0 ? 0 : t;
        }),
        (this.getNormalize = function (e) {
            this.length();
            e.set(n, i), e.normalize();
        }),
        (this.rot90CCW = function () {
            var e = n;
            (n = -i), (i = e);
        }),
        (this.rot90CW = function () {
            var e = n;
            (n = i), (i = -e);
        }),
        (this.getRotCCW = function (e) {
            e.set(n, i), e.rot90CCW();
        }),
        (this.getRotCW = function (e) {
            e.set(n, i), e.rot90CW();
        }),
        (this.ceil = function () {
            (n = Math.ceil(n)), (i = Math.ceil(i));
        }),
        (this.round = function () {
            (n = Math.round(n)), (i = Math.round(i));
        }),
        (this.toString = function () {
            return "Vector2: " + n + ", " + i;
        }),
        (this.print = function () {
            trace("Vector2: " + n + ", " + i);
        }),
        (this.getX = function () {
            return n;
        }),
        (this.getY = function () {
            return i;
        }),
        (this.rotate = function (e) {
            var t = n,
                o = i;
            (n = t * Math.cos(e) - o * Math.sin(e)), (i = t * Math.sin(e) + o * Math.cos(e));
        }),
        this._init(e, t);
}
function CHandSwipeAnim(e, t, n, i) {
    var o, a, s = i, r = e, l = t, c = !1;
    return (
        (this._init = function (e) {
            (a = new createjs.Container()), (o = createBitmap(e)), (o.x = r.x), (o.y = r.y), (o.regX = 0.5 * e.width), (o.regY = 0.5 * e.height), (o.alpha = 0), s.addChild(a), a.addChild(o);
        }),
        (this.animAllSwipe = function () {
            c = !0;
            var e = this;
            createjs.Tween.get(o)
                .to({ alpha: 1 }, 0.1 * MS_TIME_SWIPE_END)
                .wait(0.3 * MS_TIME_SWIPE_END)
                .to({ alpha: 0 }, 0.5 * MS_TIME_SWIPE_END, createjs.Ease.quartOut),
                createjs.Tween.get(o)
                    .to({ x: l[0].x, y: l[0].y }, MS_TIME_SWIPE_END, createjs.Ease.quartOut)
                    .call(function () {
                        (o.x = r.x),
                            (o.y = r.y),
                            createjs.Tween.get(o)
                                .to({ alpha: 1 }, 0.1 * MS_TIME_SWIPE_END)
                                .wait(0.3 * MS_TIME_SWIPE_END)
                                .to({ alpha: 0 }, 0.5 * MS_TIME_SWIPE_END, createjs.Ease.quartOut),
                            createjs.Tween.get(o)
                                .to({ x: l[1].x, y: l[1].y }, MS_TIME_SWIPE_END, createjs.Ease.quartOut)
                                .call(function () {
                                    (o.x = r.x),
                                        (o.y = r.y),
                                        createjs.Tween.get(o)
                                            .to({ alpha: 1 }, 0.1 * MS_TIME_SWIPE_END)
                                            .wait(0.3 * MS_TIME_SWIPE_END)
                                            .to({ alpha: 0 }, 0.5 * MS_TIME_SWIPE_END, createjs.Ease.quartOut),
                                        createjs.Tween.get(o)
                                            .to({ x: l[2].x, y: l[2].y }, MS_TIME_SWIPE_END, createjs.Ease.quartOut)
                                            .call(function () {
                                                (o.x = r.x), (o.y = r.y), e.animAllSwipe();
                                            });
                                });
                    });
        }),
        (this.fadeAnim = function (e) {
            createjs.Tween.get(a, { override: !0 }).to({ alpha: e }, 250);
        }),
        (this.isAnimate = function () {
            return c;
        }),
        (this.setVisible = function (e) {
            o.visible = e;
        }),
        (this.removeTweens = function () {
            createjs.Tween.removeTweens(o), (c = !1);
        }),
        this._init(n),
        this
    );
}
////// console.error(e.goalKeeperVisible,'fdsfsd')
var CANVAS_WIDTH = 1360,
    CANVAS_HEIGHT = 640,
    CANVAS_WIDTH_HALF = 0.5 * CANVAS_WIDTH,
    CANVAS_HEIGHT_HALF = 0.5 * CANVAS_HEIGHT,
    EDGEBOARD_X = 250,
    EDGEBOARD_Y = 20,
    DISABLE_SOUND_MOBILE = !1,
    FONT_GAME = "blackplotanregular",
    SECONDARY_FONT = "blackplotanregular",
    FPS = 30,
    FPS_DESKTOP = 60,
    FPS_TIME = 1 / FPS,
    ROLL_BALL_RATE = 60 / FPS,
    STATE_LOADING = 0,
    STATE_MENU = 1,
    STATE_HELP = 1,
    STATE_GAME = 3,
    ON_MOUSE_DOWN = 0,
    ON_MOUSE_UP = 1,
    ON_MOUSE_OVER = 2,
    ON_MOUSE_OUT = 3,
    ON_DRAG_START = 4,
    ON_DRAG_END = 5,
    ON_TWEEN_ENDED = 6,
    ON_BUT_NO_DOWN = 7,
    ON_BUT_YES_DOWN = 8,
    STEP_RATE = 1.5,
    TEXT_SIZE = [80, 100, 130],
    LOCAL_BEST_SCORE = 0,
    START_HAND_SWIPE_POS = { x: CANVAS_WIDTH_HALF, y: CANVAS_HEIGHT_HALF + 200 },
    END_HAND_SWIPE_POS = [
        { x: CANVAS_WIDTH_HALF - 250, y: CANVAS_HEIGHT_HALF - 200 },
        { x: CANVAS_WIDTH_HALF, y: CANVAS_HEIGHT_HALF - 200 },
        { x: CANVAS_WIDTH_HALF + 250, y: CANVAS_HEIGHT_HALF - 200 },
    ],
    MS_TIME_SWIPE_END = 1e3,
    MS_TIME_SWIPE_START = 3e3,
    MS_TIME_FADE_HELP_TEXT = 500,
    LOCALSTORAGE_STRING = ["penalty_best_score"],
    TEXT_EXCELLENT_COLOR = ["#fff", "#5d96fe"],
    TEXT_COLOR = "#ffffff",
    TEXT_COLOR_1 = "#ff2222",
    TEXT_COLOR_STROKE = "#002a59",
    OUTLINE_WIDTH = 1.5,
    TIME_INTERVAL_STROBE = 0.2,
    PHYSICS_ACCURACY = 3,
    MOBILE_OFFSET_GLOVES_X = -100,
    BALL_VELOCITY_MULTIPLIER = 1,
    PHYSICS_STEP = 1 / (FPS * STEP_RATE),
    MS_WAIT_SHOW_GAME_OVER_PANEL = 250,
    STATE_INIT = 0,
    STATE_PLAY = 1,
    STATE_FINISH = 2,
    STATE_PAUSE = 3,
    IDLE = 0,
    RIGHT = 1,
    LEFT = 2,
    CENTER_DOWN = 3,
    CENTER_UP = 4,
    LEFT_DOWN = 5,
    RIGHT_DOWN = 6,
    ANIM_GOAL_KEEPER_FAIL = [LEFT, RIGHT, CENTER_DOWN, CENTER_UP, LEFT_DOWN, RIGHT_DOWN],
    ANIM_GOAL_KEEPER_FAIL_ALT = [LEFT, RIGHT, LEFT_DOWN, RIGHT_DOWN],
    NUM_SPRITE_PLAYER = 31,
    SPRITE_NAME_GOALKEEPER = ["gk_idle_", "gk_save_right_", "gk_save_left_", "gk_save_center_down_", "gk_save_center_up_", "gk_save_down_left_", "gk_save_down_right"],
    NUM_SPRITE_GOALKEEPER = [24, 34, 34, 51, 25, 34, 34],
    OFFSET_CONTAINER_GOALKEEPER = [
        { x: 0, y: 0 },
        { x: 15, y: -29 },
        { x: -360, y: -29 },
        { x: -15, y: -15 },
        { x: -20, y: -85 },
        { x: -355, y: 20 },
        { x: 21, y: 20 },
    ],
    BALL_MASS = 0.5,
    BALL_RADIUS = 0.64,
    BALL_LINEAR_DAMPING = 0.2,
    OBJECT,
    TIME_TRY_TO_SHOT_BALL_OPPONENT = 0.7,
    START_POS_FLAG = { x: 277, y: 268 },
    FLAG_ADDED_POS = { x: 61, y: 69 },
    FLAG_LIMIT_POS_X = 690,
    TOT_TEAM = 32,
    MIN_BALL_VEL_ROTATION = 0.1,
    TIME_RESET_AFTER_GOAL = 1e3,
    SHOOT_FRAME = 7,
    HAND_KEEPER_ANGLE_RATE = 0.15,
    TIME_POLE_COLLISION_RESET = 1e3,
    LIMIT_HAND_RANGE_POS = { x: 16.8, zMax: 3.1, zMin: -8.5 },
    BACK_WALL_GOAL_SIZE = { width: 20.5, depth: 1, height: 7.5 },
    DEFENDER_GOAL_SIZE = { width: 3, depth: 1, height: 6.5 },
    LEFT_RIGHT_WALL_GOAL_SIZE = { width: 0.1, depth: 25, height: 7.5 },
    UP_WALL_GOAL_SIZE = { width: 20.5, depth: 25, height: 0.1 },
    BACK_WALL_GOAL_POSITION = { x: 0, y: 155, z: -2.7 },
    GOAL_LINE_POS = { x: 0, y: BACK_WALL_GOAL_POSITION.y - UP_WALL_GOAL_SIZE.depth + 2, z: BACK_WALL_GOAL_POSITION.z },
    POSITION_BALL = { x: 0.05, y: 15.4, z: -9 + BALL_RADIUS },
    NUM_AREA_GOAL = { h: 2, w: 3 },
    AREA_GOALS_ANIM = [LEFT, LEFT, CENTER_UP, RIGHT, RIGHT, LEFT, LEFT, CENTER_UP, RIGHT, RIGHT, LEFT_DOWN, LEFT_DOWN, CENTER_DOWN, RIGHT_DOWN, RIGHT_DOWN],
    GOAL_SPRITE_SWAP_Y = GOAL_LINE_POS.y,
    GOAL_SPRITE_SWAP_Z = BACK_WALL_GOAL_POSITION.z + LEFT_RIGHT_WALL_GOAL_SIZE.height,
    BALL_OUT_Y = BACK_WALL_GOAL_POSITION.y + 3,
    BUFFER_ANIM_PLAYER = FPS,
    MS_EFFECT_ADD = 1500,
    MS_ROLLING_SCORE = 500,
    MAX_PERCENT_PROBABILITY = 100,
    GOAL_KEEPER_TOLLERANCE_LEFT = -4,
    GOAL_KEEPER_TOLLERANCE_RIGHT = 4,
    TIME_RESET_AFTER_BALL_OUT = 250,
    TIME_RESET_AFTER_SAVE = 500,
    AREA_GOAL_PROPERTIES = { width: 4, depth: 1, height: 2.4 },
    FIRST_AREA_GOAL_POS = { x: -14 - 0.5 * AREA_GOAL_PROPERTIES.width, y: BACK_WALL_GOAL_POSITION.y - UP_WALL_GOAL_SIZE.depth + 1.1, z: 3.1 - 0.5 * AREA_GOAL_PROPERTIES.height },
    GOAL_KEEPER_DEPTH_Y = BACK_WALL_GOAL_POSITION.y - UP_WALL_GOAL_SIZE.depth,
    POLE_UP_SIZE = { radius_top: 0.5, radius_bottom: 0.5, height: 40.5, segments: 10 },
    POLE_RIGHT_LEFT_SIZE = { radius_top: 0.5, radius_bottom: 0.5, height: 15, segments: 10 },
    COLOR_AREA_GOAL = [16711680, 65280, 255, 16776960, 16711935, 65535, 15790320, 986895, 16759705, 16777215, 5675280, 10083618, 1056896, 8392736, 9017449],
    OFFSET_FIELD_Y = 35,
    OFFSET_FIELD_X = 35,
    HIT_BALL_MAX_FORCE = 130,
    HIT_BALL_MIN_FORCE = 5,
    FORCE_RATE = 0.0014,
    SHOW_AREAS_GOAL = !1,
    FORCE_MULTIPLIER_AXIS = { x: 0.12, y: 0.4, z: 0.08 },
    FORCE_MAX = 0.5,
    FIELD_POSITION,
    MAX_FORCE_Y = 66,
    MIN_FORCE_Y = 50,
    CALCULATE_PROBABILITY = [
//         { x : -18 ,y: 131.1 ,z: 4 },
// { x : 0 ,y: 131.1 ,z: 4 },
// { x : 19 ,y: 131.1 ,z: 4 },
// { x : -18 ,y: 131.1 ,z: -4 },
// { x : 0 ,y: 131.1 ,z: -4 },
// { x : 19 ,y: 131.1 ,z: -4 }
        { xMax: -10, xMin: -11, zMax: 8, zMin: 7.5 },
        { xMax: 11, xMin: -11, zMax: 11, zMin: 8 },
        { xMax: 19, xMin: 4, zMax: 11, zMin: 7.5},
        { xMax: -10, xMin: -18, zMax: 11, zMin: -4 },
        { xMax: 11, xMin: -18, zMax: 8, zMin: 0 },
        { xMax: 19, xMin: -4, zMax: 9, zMin: 0 },
        // { xMax: -3.6, xMin: -7, zMax: 8, zMin: 5 },
        // { xMax: 3.6, xMin: -3.6, zMax: 8, zMin: 5 },
        // { xMax: 7, xMin: 3.6, zMax: 8, zMin: 5 },
        // { xMax: 11, xMin: 7, zMax: 8, zMin: 5 },
        // { xMax: -7, xMin: -11, zMax: 5, zMin: 0 },
        // { xMax: -3.6, xMin: -7, zMax: 5, zMin: 0 },
        // { xMax: 3.6, xMin: -3.6, zMax: 5, zMin: 0 },
        // { xMax: 7, xMin: 3.6, zMax: 5, zMin: 0 },
        // { xMax: 11, xMin: 7, zMax: 5, zMin: 0 },
        // { xMax: 11, xMin: -12, zMax: 7, zMin: 0 },
        // { xMax: 11, xMin: -12, zMax: 8, zMin: 0 },
        // { xMax: 11, xMin: -13, zMax: 8, zMin: 0 },
        // { xMax: 11, xMin: -13, zMax: 8, zMin: 5 },
    ],
    SHOW_3D_RENDER = !1,
    CAMERA_TEST_TRACKBALL = !1,
    CAMERA_TEST_TRANSFORM = !1,
    CANVAS_3D_OPACITY = 0.6,
    MOUSE_SENSIBILTY = 0.03,
    CAMERA_TEST_LOOK_AT = { x: 0, y: -500, z: -100 },
    BALL_SCALE_FACTOR = 0.07,
    SHADOWN_FACTOR = 1.1,
    INTENSITY_DISPLAY_SHOCK = [
        { x: 10, y: 7.5, time: 50 },
        { x: 20, y: 9, time: 50 },
        { x: 30, y: 12, time: 50 },
        { x: 33, y: 15, time: 50 },
    ],
    FORCE_BALL_DISPLAY_SHOCK = [
        { max: 55, min: MIN_FORCE_Y - 1 },
        { max: 58, min: 55 },
        { max: 62, min: 58 },
        { max: MAX_FORCE_Y, min: 62 },
    ],
    CAMERA_POSITION = { x: 0, y: 0, z: -7 },
    FOV = 15,
    NEAR = 1,
    FAR = 2e3,
    ENABLE_FULLSCREEN;
(TimeSeries.prototype.resetBounds = function () {
    (this.maxValue = Number.NaN), (this.minValue = Number.NaN);
    for (var e = 0; e < this.data.length; e++)
        (this.maxValue = isNaN(this.maxValue) ? this.data[e][1] : Math.max(this.maxValue, this.data[e][1])), (this.minValue = isNaN(this.minValue) ? this.data[e][1] : Math.min(this.minValue, this.data[e][1]));
}),
    (TimeSeries.prototype.append = function (e, t) {
        this.lastTimeStamp = e;
        var n = this.dataPool.length ? this.dataPool.pop() : [e, t];
        for (n[0] = e, n[1] = t, this.data.push(n), this.maxValue = isNaN(this.maxValue) ? t : Math.max(this.maxValue, t), this.minValue = isNaN(this.minValue) ? t : Math.min(this.minValue, t); this.data.length > this.maxDataLength; )
            this.dataPool.push(this.data.shift());
    }),
    (SmoothieChart.prototype.addTimeSeries = function (e, t) {
        this.seriesSet.push({ timeSeries: e, options: t || {} });
    }),
    (SmoothieChart.prototype.removeTimeSeries = function (e) {
        this.seriesSet.splice(this.seriesSet.indexOf(e), 1);
    }),
    (SmoothieChart.prototype.streamTo = function (e, t) {
        var n = this;
        (this.render_on_tick = function () {
            var t = n.seriesSet[0].timeSeries;
            t.data;
            n.render(e, t.lastTimeStamp);
        }),
            this.start();
    }),
    (SmoothieChart.prototype.start = function () {
        this.timer || (this.timer = setInterval(this.render_on_tick, 1e3 / this.options.fps));
    }),
    (SmoothieChart.prototype.stop = function () {
        this.timer && (clearInterval(this.timer), (this.timer = void 0));
    }),
    (SmoothieChart.timeFormatter = function (e) {
        function t(e) {
            return (10 > e ? "0" : "") + e;
        }
        return t(e.getHours()) + ":" + t(e.getMinutes()) + ":" + t(e.getSeconds());
    }),
    (SmoothieChart.prototype.render = function (e, t) {
        var n = e.getContext("2d"),
            i = this.options,
            o = { top: 0, left: 0, width: e.clientWidth, height: e.clientHeight };
        if (
            (n.save(),
            (t -= t % i.millisPerPixel),
            n.translate(o.left, o.top),
            n.beginPath(),
            n.rect(0, 0, o.width, o.height),
            n.clip(),
            n.save(),
            (n.fillStyle = i.grid.fillStyle),
            n.clearRect(0, 0, o.width, o.height),
            n.fillRect(0, 0, o.width, o.height),
            n.restore(),
            n.save(),
            (n.lineWidth = i.grid.lineWidth || 1),
            (n.strokeStyle = i.grid.strokeStyle || "#ffffff"),
            i.grid.millisPerLine > 0)
        )
            for (var a = t - (t % i.grid.millisPerLine); a >= t - o.width * i.millisPerPixel; a -= i.grid.millisPerLine) {
                n.beginPath();
                var s = Math.round(o.width - (t - a) / i.millisPerPixel);
                if ((n.moveTo(s, 0), n.lineTo(s, o.height), n.stroke(), i.timestampFormatter)) {
                    var r = new Date(a),
                        l = i.timestampFormatter(r),
                        c = n.measureText(l).width / 2 + n.measureText(N).width + 4;
                    s < o.width - c && ((n.fillStyle = i.labels.fillStyle), n.fillText(l, s - n.measureText(l).width / 2, o.height - 2));
                }
                n.closePath();
            }
        for (var d = 1; d < i.grid.verticalSections; d++) {
            var h = Math.round((d * o.height) / i.grid.verticalSections);
            n.beginPath(), n.moveTo(0, h), n.lineTo(o.width, h), n.stroke(), n.closePath();
        }
        n.beginPath(), n.strokeRect(0, 0, o.width, o.height), n.closePath(), n.restore();
        for (var u = Number.NaN, _ = Number.NaN, p = 0; p < this.seriesSet.length; p++) {
            var E = this.seriesSet[p].timeSeries;
            isNaN(E.maxValue) || (u = isNaN(u) ? E.maxValue : Math.max(u, E.maxValue)), isNaN(E.minValue) || (_ = isNaN(_) ? E.minValue : Math.min(_, E.minValue));
        }
        if (isNaN(u) && isNaN(_)) return void n.restore();
        null != i.maxValue ? (u = i.maxValue) : (u *= i.maxValueScale), null != i.minValue && (_ = i.minValue);
        var f = u - _;
        (this.currentValueRange += i.scaleSmoothing * (f - this.currentValueRange)), (this.currentVisMinValue += i.scaleSmoothing * (_ - this.currentVisMinValue));
        for (var m = this.currentValueRange, g = this.currentVisMinValue, p = 0; p < this.seriesSet.length; p++) {
            n.save();
            for (var E = this.seriesSet[p].timeSeries, T = E.data, A = this.seriesSet[p].options; T.length >= i.maxDataSetLength && T[1][0] < t - o.width * i.millisPerPixel; ) T.splice(0, 1);
            (n.lineWidth = A.lineWidth || 1), (n.fillStyle = A.fillStyle), (n.strokeStyle = A.strokeStyle || "#ffffff"), n.beginPath();
            for (var S = 0, v = 0, b = 0, y = 0; y < T.length; y++) {
                var w = Math.round(o.width - (t - T[y][0]) / i.millisPerPixel),
                    x = T[y][1],
                    O = x - g,
                    C = o.height - (m ? Math.round((O / m) * o.height) : 0),
                    L = Math.max(Math.min(C, o.height - 1), 1);
                if (0 == y) (S = w), n.moveTo(w, L);
                else
                    switch (i.interpolation) {
                        case "line":
                            n.lineTo(w, L);
                            break;
                        case "bezier":
                        default:
                            n.bezierCurveTo(Math.round((v + w) / 2), b, Math.round(v + w) / 2, L, w, L);
                    }
                (v = w), (b = L);
            }
            T.length > 0 && A.fillStyle && (n.lineTo(o.width + A.lineWidth + 1, b), n.lineTo(o.width + A.lineWidth + 1, o.height + A.lineWidth + 1), n.lineTo(S, o.height + A.lineWidth), n.fill()), n.stroke(), n.closePath(), n.restore();
        }
        if (!i.labels.disabled) {
            i.labelOffsetY || (i.labelOffsetY = 0), (n.fillStyle = i.labels.fillStyle);
            var R = parseFloat(u).toFixed(2),
                N = parseFloat(_).toFixed(2);
            n.fillText(R, o.width - n.measureText(R).width - 2, 10), n.fillText(N, o.width - n.measureText(N).width - 2, o.height - 2);
            for (var y = 0; y < this.seriesSet.length; y++) {
                var E = this.seriesSet[y].timeSeries,
                    M = E.label;
                (n.fillStyle = E.options.fillStyle || "rgb(255,255,255)"), M && n.fillText(M, 2, 10 * (y + 1) + i.labelOffsetY);
            }
        }
        n.restore();
    });
var s_oGame;
CANNON = CANNON || {};
var camera,
    scene,
    renderer,
    controls = null,
    s_oRender;
(CANNON.Demo = function (e) {
    function t() {
        H.restart(), H.hideCached(), P.restart(), P.hideCached(), F.restart(), F.hideCached(), k.restart(), k.hideCached();
    }
    function n() {
        if (w) {
            for (var e in w.__controllers) w.__controllers[e].updateDisplay();
            for (var t in w.__folders) for (var e in w.__folders[t].__controllers) w.__folders[t].__controllers[e].updateDisplay();
        }
    }
    function i(e) {
        function t(e, n) {
            e.material && (e.material = n);
            for (var i = 0; i < e.children.length; i++) t(e.children[i], n);
        }
        if (-1 === K.indexOf(e)) throw new Error("Render mode " + e + " not found!");
        switch (e) {
            case "solid":
                (g.currentMaterial = N), (W.intensity = 1), X.color.setHex(2236962);
                break;
            case "wireframe":
                (g.currentMaterial = M), (W.intensity = 0), X.color.setHex(16777215);
        }
        for (var n = 0; n < b.length; n++) t(b[n], g.currentMaterial);
        A.rendermode = e;
    }
    function o(e, t) {
        if ("string" != typeof e) throw new Error("1st argument of Demo.addScene(title,initfunc) must be a string!");
        if ("function" != typeof t) throw new Error("2nd argument of Demo.addScene(title,initfunc) must be a function!");
        y.push(t);
        var n = y.length - 1;
        (C[e] = function () {
            p(n);
        }),
            T.add(C, e);
    }
    function a() {
        for (var e = v.length, t = 0; e > t; t++) {
            var n = v[t];
            n.position.copy(n.initPosition), n.velocity.copy(n.initVelocity), n.initAngularVelocity && (n.angularVelocity.copy(n.initAngularVelocity), n.quaternion.copy(n.initQuaternion));
        }
    }
    function s(e) {
        0 === e.x && (e.x = 1e-6), 0 === e.y && (e.y = 1e-6), 0 === e.z && (e.z = 1e-6);
    }
    function r() {
        for (var e = v.length, t = 0; e > t; t++) {
            var n = v[t],
                i = b[t];
            i.position.copy(n.position), n.quaternion && i.quaternion.copy(n.quaternion);
        }
        if ((H.restart(), A.contacts))
            for (var o = 0; o < z.contacts.length; o++)
                for (var a = 0; 2 > a; a++) {
                    var r = H.request(),
                        l = z.contacts[o],
                        n = 0 === a ? l.bi : l.bj,
                        c = 0 === a ? l.ri : l.rj;
                    r.position.set(n.position.x + c.x, n.position.y + c.y, n.position.z + c.z);
                }
        if ((H.hideCached(), P.restart(), A.cm2contact))
            for (var o = 0; o < z.contacts.length; o++)
                for (var a = 0; 2 > a; a++) {
                    var d = P.request(),
                        l = z.contacts[o],
                        n = 0 === a ? l.bi : l.bj,
                        c = 0 === a ? l.ri : l.rj;
                    d.scale.set(c.x, c.y, c.z), s(d.scale), d.position.copy(n.position);
                }
        if ((P.hideCached(), F.restart(), V.restart(), A.constraints)) {
            for (var o = 0; o < z.constraints.length; o++) {
                var l = z.constraints[o];
                if (l instanceof CANNON.DistanceConstraint) {
                    var h,
                        u = l.equations.normal,
                        _ = u.bi,
                        p = u.bj,
                        d = F.request(),
                        t = _.id;
                    p.id;
                    (h = p.position ? p.position : p), d.scale.set(h.x - _.position.x, h.y - _.position.y, h.z - _.position.z), s(d.scale), d.position.copy(_.position);
                }
            }
            for (var o = 0; o < z.constraints.length; o++) {
                var l = z.constraints[o];
                if (l instanceof CANNON.PointToPointConstraint) {
                    var E = l.equations.normal,
                        _ = E.bi,
                        p = E.bj,
                        f = V.request(),
                        m = V.request(),
                        g = V.request(),
                        t = _.id;
                    p.id;
                    f.scale.set(E.ri.x, E.ri.y, E.ri.z),
                        m.scale.set(E.rj.x, E.rj.y, E.rj.z),
                        g.scale.set(-E.penetrationVec.x, -E.penetrationVec.y, -E.penetrationVec.z),
                        s(f.scale),
                        s(m.scale),
                        s(g.scale),
                        f.position.copy(_.position),
                        m.position.copy(p.position),
                        E.bj.position.vadd(E.rj, g.position);
                }
            }
        }
        if ((V.hideCached(), F.hideCached(), k.restart(), A.normals))
            for (var o = 0; o < z.contacts.length; o++) {
                var l = z.contacts[o],
                    _ = l.bi,
                    p = l.bj,
                    d = k.request(),
                    t = _.id,
                    E = (p.id, l.ni),
                    n = _;
                d.scale.set(E.x, E.y, E.z), s(d.scale), d.position.copy(n.position), l.ri.vadd(d.position, d.position);
            }
        if ((k.hideCached(), j.restart(), A.axes))
            for (var _ = 0; _ < v.length; _++) {
                var n = v[_],
                    r = j.request();
                r.position.copy(n.position), n.quaternion && r.quaternion.copy(n.quaternion);
            }
        if ((j.hideCached(), B.restart(), A.aabbs))
            for (var t = 0; t < v.length; t++) {
                var n = v[t];
                if (
                    n.computeAABB &&
                    (n.aabbNeedsUpdate && n.computeAABB(),
                    isFinite(n.aabb.lowerBound.x) &&
                        isFinite(n.aabb.lowerBound.y) &&
                        isFinite(n.aabb.lowerBound.z) &&
                        isFinite(n.aabb.upperBound.x) &&
                        isFinite(n.aabb.upperBound.y) &&
                        isFinite(n.aabb.upperBound.z) &&
                        n.aabb.lowerBound.x - n.aabb.upperBound.x != 0 &&
                        n.aabb.lowerBound.y - n.aabb.upperBound.y != 0 &&
                        n.aabb.lowerBound.z - n.aabb.upperBound.z != 0)
                ) {
                    var r = B.request();
                    r.scale.set(n.aabb.lowerBound.x - n.aabb.upperBound.x, n.aabb.lowerBound.y - n.aabb.upperBound.y, n.aabb.lowerBound.z - n.aabb.upperBound.z),
                        r.position.set(0.5 * (n.aabb.lowerBound.x + n.aabb.upperBound.x), 0.5 * (n.aabb.lowerBound.y + n.aabb.upperBound.y), 0.5 * (n.aabb.lowerBound.z + n.aabb.upperBound.z));
                }
            }
        B.hideCached();
    }
    function l() {
        (Z = document.createElement("div")),
            document.body.appendChild(Z),
            CAMERA_TEST_TRACKBALL
                ? ((NEAR = 1),
                  (camera = new THREE.PerspectiveCamera(45, J / ee, NEAR, FAR)),
                  camera.lookAt(new THREE.Vector3(CAMERA_TEST_LOOK_AT.x, CAMERA_TEST_LOOK_AT.y, CAMERA_TEST_LOOK_AT.z)),
                  camera.position.set(0, 500, 500),
                  camera.up.set(0, 0, 1))
                : (camera = createOrthoGraphicCamera()),
            (scene = g.scene = new THREE.Scene()),
            (scene.fog = new THREE.Fog(8306926, 0.5 * FAR, FAR)),
            (X = new THREE.AmbientLight(4473924)),
            scene.add(X),
            (W = new THREE.DirectionalLight(16777181, 1)),
            W.position.set(180, 0, 180),
            W.target.position.set(0, 0, 0),
            (W.castShadow = !0),
            (W.shadow.camera.near = 10),
            (W.shadow.camera.far = 100),
            (W.shadow.camera.fov = FOV),
            (W.shadowMapBias = 0.0139),
            (W.shadowMapDarkness = 0.1),
            (W.shadow.mapSize.width = q),
            (W.shadow.mapSize.height = Q),
            new THREE.CameraHelper(W.shadow.camera),
            scene.add(W),
            scene.add(camera),
            (renderer = SHOW_3D_RENDER ? new THREE.WebGLRenderer({ clearColor: 0, clearAlpha: 0.5, antialias: !0, alpha: !0 }) : new THREE.CanvasRenderer({ clearColor: 0, clearAlpha: 0.5, antialias: !1, alpha: !0 })),
            renderer.setSize(J, ee),
            (renderer.domElement.style.position = "relative"),
            (renderer.domElement.style.top = $ + "px"),
            (renderer.domElement.style.opacity = CANVAS_3D_OPACITY),
            Z.appendChild(renderer.domElement),
            (U = document.createElement("div")),
            (U.style.position = "absolute"),
            (U.style.display = "none"),
            (U.style.top = "10px"),
            (U.style.width = "100%"),
            (U.style.textAlign = "center"),
            (U.innerHTML = '<a href="http://github.com/schteppe/cannon.js">cannon.js</a> - javascript 3d physics'),
            Z.appendChild(U),
            document.addEventListener("mousemove", h),
            window.addEventListener("resize", u),
            renderer.setClearColor(scene.fog.color, 1),
            (renderer.autoClear = !1),
            (O = document.createElement("canvas")),
            (O.width = J),
            (O.height = ee),
            (O.style.opacity = 0.5),
            (O.style.position = "absolute"),
            (O.style.display = "none"),

            (O.style.top = "0px"),
            (O.style.zIndex = 90),
            Z.appendChild(O),
            (x = new SmoothieChart({
                labelOffsetY: 50,
                maxDataSetLength: 100,
                millisPerPixel: 2,
                grid: { strokeStyle: "none", fillStyle: "none", lineWidth: 1, millisPerLine: 250, verticalSections: 6 },
                labels: { fillStyle: "rgb(180, 180, 180)" },
            })),
            x.streamTo(O);
        var e = {},
            t = [
                [255, 0, 0],
                [0, 255, 0],
                [0, 0, 255],
                [255, 255, 0],
                [255, 0, 255],
                [0, 255, 255],
            ],
            n = 0;
        for (var o in z.profile) {
            var a = t[n % t.length];
            (e[o] = new TimeSeries({ label: o, fillStyle: "rgb(" + a[0] + "," + a[1] + "," + a[2] + ")", maxDataLength: 500 })), n++;
        }
        z.addEventListener("postStep", function (t) {
            for (var n in z.profile) e[n].append(1e3 * z.time, z.profile[n]);
        });
        var n = 0;
        for (var o in z.profile) {
            var a = t[n % t.length];
            x.addTimeSeries(e[o], { strokeStyle: "rgb(" + a[0] + "," + a[1] + "," + a[2] + ")", lineWidth: 2 }), n++;
        }
        if (
            ((z.doProfiling = !1),
            x.stop(),
            (O.style.display = "none"),
            (Y = new Stats()),
            (Y.domElement.style.position = "absolute"),
            (Y.domElement.style.top = "0px"),
            (Y.domElement.style.zIndex = 100),
            Z.appendChild(Y.domElement),
            void 0 != window.dat)
        ) {
            (w = new dat.GUI()), (w.domElement.parentNode.style.zIndex = 120);
            var s = w.addFolder("Rendering");
            s.add(A, "rendermode", { Solid: "solid", Wireframe: "wireframe" }).onChange(function (e) {
                i(e);
            }),
                s.add(A, "contacts"),
                s.add(A, "cm2contact"),
                s.add(A, "normals"),
                s.add(A, "constraints"),
                s.add(A, "axes"),
                s
                    .add(A, "particleSize")
                    .min(0)
                    .max(1)
                    .onChange(function (e) {
                        for (var t = 0; t < b.length; t++) v[t] instanceof CANNON.Particle && b[t].scale.set(e, e, e);
                    }),
                s.add(A, "shadows").onChange(function (e) {
                    e ? (renderer.shadowMapAutoUpdate = !0) : ((renderer.shadowMapAutoUpdate = !1), renderer.clearTarget(W.shadowMap));
                }),
                s.add(A, "aabbs"),
                s.add(A, "profiling").onChange(function (e) {
                    e ? ((z.doProfiling = !0), x.start(), (O.style.display = "block")) : ((z.doProfiling = !1), x.stop(), (O.style.display = "none"));
                });
            var r = w.addFolder("World");
            r.add(A, "paused").onChange(function (e) {}), r.add(A, "stepFrequency", 60, 600).step(60);
            var l = 100;
            r.add(A, "gx", -l, l).onChange(function (e) {
                isNaN(e) || z.gravity.set(e, A.gy, A.gz);
            }),
                r.add(A, "gy", -l, l).onChange(function (e) {
                    isNaN(e) || z.gravity.set(A.gx, e, A.gz);
                }),
                r.add(A, "gz", -l, l).onChange(function (e) {
                    isNaN(e) || z.gravity.set(A.gx, A.gy, e);
                }),
                r
                    .add(A, "quatNormalizeSkip", 0, 50)
                    .step(1)
                    .onChange(function (e) {
                        isNaN(e) || (z.quatNormalizeSkip = e);
                    }),
                r.add(A, "quatNormalizeFast").onChange(function (e) {
                    z.quatNormalizeFast = !!e;
                });
            var c = w.addFolder("Solver");
            c
                .add(A, "iterations", 1, 50)
                .step(1)
                .onChange(function (e) {
                    z.solver.iterations = e;
                }),
                c.add(A, "k", 10, 1e7).onChange(function (e) {
                    g.setGlobalSpookParams(A.k, A.d, 1 / A.stepFrequency);
                }),
                c
                    .add(A, "d", 0, 20)
                    .step(0.1)
                    .onChange(function (e) {
                        g.setGlobalSpookParams(A.k, A.d, 1 / A.stepFrequency);
                    }),
                c
                    .add(A, "tolerance", 0, 10)
                    .step(0.01)
                    .onChange(function (e) {
                        z.solver.tolerance = e;
                    }),
                (T = w.addFolder("Scenes")),
                T.open();
        }
        if (CAMERA_TEST_TRACKBALL) {
            (controls = new THREE.TrackballControls(camera, renderer.domElement)),
                (controls.rotateSpeed = 1),
                (controls.zoomSpeed = 1.2),
                (controls.panSpeed = 0.2),
                (controls.noZoom = !1),
                (controls.noPan = !1),
                (controls.staticMoving = !1),
                (controls.dynamicDampingFactor = 0.3);
            var d = 100;
            (controls.minDistance = 0), (controls.maxDistance = 1e3 * d), (controls.keys = [65, 83, 68]), (controls.screen.width = J), (controls.screen.height = ee);
        }
    }
    function c() {
        requestAnimationFrame(c), A.paused || (r(), d()), _(), Y.update();
    }
    function d() {}
    function h(e) {
        (mouseX = e.clientX - te), (mouseY = e.clientY - ne);
    }
    function u(e) {
        (J = s_iCanvasResizeWidth + 2 * s_iCanvasOffsetWidth), (ee = s_iCanvasResizeHeight + 2 * s_iCanvasOffsetHeight), CAMERA_TEST_TRACKBALL && ((controls.screen.width = J), (controls.screen.height = ee));
    }
    function _() {
        (CAMERA_TEST_TRACKBALL || (CAMERA_TEST_TRANSFORM && null !== controls)) && controls.update(), renderer.clear(), renderer.render(g.scene, camera);
    }
    function p(e) {
        g.dispatchEvent({ type: "destroy" }), (A.paused = !1), n(), f(e);
    }
    function E() {
        f(0);
    }
    function f(e) {
        for (var i = b.length, o = 0; i > o; o++) {
            z.remove(v.pop());
            var a = b.pop();
            g.scene.remove(a);
        }
        for (; z.constraints.length; ) z.removeConstraint(z.constraints[0]);
        y[e](), (A.iterations = z.solver.iterations), (A.gx = z.gravity.x + 0), (A.gy = z.gravity.y + 0), (A.gz = z.gravity.z + 0), (A.quatNormalizeSkip = z.quatNormalizeSkip), (A.quatNormalizeFast = z.quatNormalizeFast), n(), t();
    }
    function m(e) {
        var t = [],
            n = [];
        (this.request = function () {
            return t.length ? (geo = t.pop()) : (geo = e()), scene.add(geo), n.push(geo), geo;
        }),
            (this.restart = function () {
                for (; n.length; ) t.push(n.pop());
            }),
            (this.hideCached = function () {
                for (var e = 0; e < t.length; e++) scene.remove(t[e]);
            });
    }
    var g = this;
    (this.addScene = o), (this.restartCurrentScene = a), (this.changeScene = p), (this.start = E);
    var T,
        A = (this.settings = {
            stepFrequency: 60,
            quatNormalizeSkip: 2,
            quatNormalizeFast: !0,
            gx: 0,
            gy: 0,
            gz: 0,
            iterations: 3,
            tolerance: 1e-4,
            k: 1e6,
            d: 3,
            scene: 0,
            paused: !1,
            rendermode: "solid",
            constraints: !1,
            contacts: !1,
            cm2contact: !1,
            normals: !1,
            axes: !1,
            particleSize: 0.1,
            shadows: !1,
            aabbs: !1,
            profiling: !1,
            maxSubSteps: 3,
        });
    e = e || {};
    for (var S in e) S in A && (A[S] = e[S]);
    if (A.stepFrequency % 60 !== 0) throw new Error("stepFrequency must be a multiple of 60.");
    var v = (this.bodies = []),
        b = (this.visuals = []),
        y = [],
        w = null,
        x = null,
        O = null,
        C = {},
        L = new THREE.SphereGeometry(0.1, 6, 6),
        R = ((this.particleGeo = new THREE.SphereGeometry(1, 16, 8)), 21164210),
        N = new THREE.MeshPhongMaterial({ color: R, specular: 1118481, shininess: 50 }),
        M = new THREE.MeshLambertMaterial({ color: 16777215, wireframe: !0 });
    this.currentMaterial = N;
    var I = new THREE.MeshPhongMaterial({ color: 16711680 }),
        H =
            ((this.particleMaterial = new THREE.MeshLambertMaterial({ color: 16711680 })),
            new m(function () {
                return new THREE.Mesh(L, I);
            })),
        P = new m(function () {
            var e = new THREE.Geometry();
            return e.vertices.push(new THREE.Vector3(0, 0, 0)), e.vertices.push(new THREE.Vector3(1, 1, 1)), new THREE.Line(e, new THREE.LineBasicMaterial({ color: 16711680 }));
        }),
        G = new THREE.BoxGeometry(1, 1, 1),
        D = new THREE.MeshBasicMaterial({ color: R, wireframe: !0 }),
        B = new m(function () {
            return new THREE.Mesh(G, D);
        }),
        F = new m(function () {
            var e = new THREE.Geometry();
            return e.vertices.push(new THREE.Vector3(0, 0, 0)), e.vertices.push(new THREE.Vector3(1, 1, 1)), new THREE.Line(e, new THREE.LineBasicMaterial({ color: 16711680 }));
        }),
        V = new m(function () {
            var e = new THREE.Geometry();
            return e.vertices.push(new THREE.Vector3(0, 0, 0)), e.vertices.push(new THREE.Vector3(1, 1, 1)), new THREE.Line(e, new THREE.LineBasicMaterial({ color: 16711680 }));
        }),
        k = new m(function () {
            var e = new THREE.Geometry();
            return e.vertices.push(new THREE.Vector3(0, 0, 0)), e.vertices.push(new THREE.Vector3(1, 1, 1)), new THREE.Line(e, new THREE.LineBasicMaterial({ color: 65280 }));
        }),
        j = new m(function () {
            var e = new THREE.Object3D(),
                t = new THREE.Vector3(0, 0, 0),
                n = new THREE.Geometry(),
                i = new THREE.Geometry(),
                o = new THREE.Geometry();
            n.vertices.push(t), i.vertices.push(t), o.vertices.push(t), n.vertices.push(new THREE.Vector3(1, 0, 0)), i.vertices.push(new THREE.Vector3(0, 1, 0)), o.vertices.push(new THREE.Vector3(0, 0, 1));
            var a = new THREE.Line(n, new THREE.LineBasicMaterial({ color: 16711680 })),
                s = new THREE.Line(i, new THREE.LineBasicMaterial({ color: 65280 })),
                r = new THREE.Line(o, new THREE.LineBasicMaterial({ color: 255 }));
            return e.add(a), e.add(s), e.add(r), e;
        }),
        z = (this.world = new CANNON.World());
    z.broadphase = new CANNON.NaiveBroadphase();
    var W, X, Y, U, K = ["solid", "wireframe"];
    Detector.webgl || Detector.addGetWebGLMessage();
    var Z, q = 1024, Q = 1024, $ = 0, J = s_iCanvasResizeWidth + s_iCanvasOffsetWidth, ee = s_iCanvasResizeHeight + s_iCanvasOffsetHeight, te = J / 2, ne = ee / 2;
    l(), c();
    (s_oRender = _),
        document.addEventListener("keypress", function (e) {
            if (e.keyCode)
                switch (e.keyCode) {
                    case 32:
                        a();
                        break;
                    case 104:
                        "none" == Y.domElement.style.display ? ((Y.domElement.style.display = "block"), (U.style.display = "block")) : ((Y.domElement.style.display = "none"), (U.style.display = "none"));
                        break;
                    case 97:
                        (A.aabbs = !A.aabbs), n();
                        break;
                    case 99:
                        (A.constraints = !A.constraints), n();
                        break;
                    case 112:
                        (A.paused = !A.paused), n();
                        break;
                    case 115:
                        var t = 1 / A.stepFrequency;
                        z.step(t), r();
                        break;
                    case 109:
                        var o = K.indexOf(A.rendermode);
                        o++, (o %= K.length), i(K[o]), n();
                        break;
                    case 49:
                    case 50:
                    case 51:
                    case 52:
                    case 53:
                    case 54:
                    case 55:
                    case 56:
                    case 57:
                        y.length > e.keyCode - 49 && !document.activeElement.localName.match(/input/) && p(e.keyCode - 49);
                }
        });
}),
    (CANNON.Demo.prototype = new CANNON.EventTarget()),
    (CANNON.Demo.constructor = CANNON.Demo),
    (CANNON.Demo.prototype.setGlobalSpookParams = function (e, t, n) {
        for (var i = this.world, o = 0; o < i.constraints.length; o++)
            for (var a = i.constraints[o], s = 0; s < a.equations.length; s++) {
                var r = a.equations[s];
                r.setSpookParams(e, t, n);
            }
        for (var o = 0; o < i.contactmaterials.length; o++) {
            var l = i.contactmaterials[o];
            (l.contactEquationStiffness = e), (l.frictionEquationStiffness = e), (l.contactEquationRelaxation = t), (l.frictionEquationRelaxation = t);
        }
        (i.defaultContactMaterial.contactEquationStiffness = e), (i.defaultContactMaterial.frictionEquationStiffness = e), (i.defaultContactMaterial.contactEquationRelaxation = t), (i.defaultContactMaterial.frictionEquationRelaxation = t);
    }),
    (CANNON.Demo.prototype.createTransformControl = function (e, t) {
        (controls = new THREE.TransformControls(camera, renderer.domElement)),
            scene.add(e),
            controls.attach(e, t),
            scene.add(controls),
            ////// console.log("CREATE"),
            window.addEventListener("keydown", function (e) {
                switch (e.keyCode) {
                    case 81:
                        controls.setSpace("local" === controls.space ? "world" : "local");
                        break;
                    case 17:
                        controls.setTranslationSnap(100), controls.setRotationSnap(THREE.Math.degToRad(15));
                        break;
                    case 87:
                        controls.setMode("translate");
                        break;
                    case 69:
                        controls.setMode("rotate");
                        break;
                    case 82:
                        controls.setMode("scale");
                        break;
                    case 187:
                    case 107:
                        controls.setSize(controls.size + 0.1);
                        break;
                    case 189:
                    case 109:
                        controls.setSize(Math.max(controls.size - 0.1, 0.1));
                }
            }),
            window.addEventListener("keyup", function (e) {
                switch (e.keyCode) {
                    case 17:
                        controls.setTranslationSnap(null), controls.setRotationSnap(null);
                }
            });
    }),
    (CANNON.Demo.prototype.getWorld = function () {
        return this.world;
    }),
    (CANNON.Demo.prototype.addVisual = function (e, t) {
        var n;
        this.settings;
        return e instanceof CANNON.Body && (n = this.shape2mesh(e, t)), n && (this.bodies.push(e), this.visuals.push(n), (e.visualref = n), (e.visualref.visualId = this.bodies.length - 1), this.scene.add(n)), n;
    }),
    (CANNON.Demo.prototype.addVisuals = function (e) {
        for (var t = 0; t < e.length; t++) this.addVisual(e[t]);
    }),
    (CANNON.Demo.prototype.removeVisual = function (e) {
        if (e.visualref) {
            for (var t = this.bodies, n = this.visuals, i = [], o = [], a = t.length, s = 0; a > s; s++) i.unshift(t.pop()), o.unshift(n.pop());
            for (var r = e.visualref.visualId, l = 0; l < i.length; l++)
                if (l !== r) {
                    var s = l > r ? l - 1 : l;
                    (t[s] = i[l]), (n[s] = o[l]), (t[s].visualref = i[l].visualref), (t[s].visualref.visualId = s);
                }
            (e.visualref.visualId = null), this.scene.remove(e.visualref), (e.visualref = null);
        }
    }),
    (CANNON.Demo.prototype.removeAllVisuals = function () {
        for (; this.bodies.length; ) this.removeVisual(this.bodies[0]);
    }),
    (CANNON.Demo.prototype.shape2mesh = function (e, t) {
        for (var n = ("wireframe" === this.settings.renderMode, new THREE.Object3D()), i = 0; i < e.shapes.length; i++) {
            var o,
                a = e.shapes[i];
            switch (a.type) {
                case CANNON.Shape.types.SPHERE:
                    var s = new THREE.SphereGeometry(a.radius, 8, 8);
                    (o = void 0 === t ? new THREE.Mesh(s, this.currentMaterial) : new THREE.Mesh(s, t)), (o.castShadow = !0);
                    break;
                case CANNON.Shape.types.PARTICLE:
                    o = new THREE.Mesh(this.particleGeo, this.particleMaterial);
                    var r = this.settings;
                    o.scale.set(r.particleSize, r.particleSize, r.particleSize);
                    break;
                case CANNON.Shape.types.PLANE:
                    var l = new THREE.PlaneGeometry(10, 10, 4, 4);
                    o = new THREE.Object3D();
                    var c,
                        d = new THREE.Object3D();
                    (c = void 0 === t ? new THREE.Mesh(l, this.currentMaterial) : new THREE.Mesh(l, t)), c.scale.set(100, 100, 100), d.add(c), (c.castShadow = !1), (c.receiveShadow = !0), o.add(d);
                    break;
                case CANNON.Shape.types.BOX:
                    var h = new THREE.BoxGeometry(2 * a.halfExtents.x, 2 * a.halfExtents.y, 2 * a.halfExtents.z);
                    o = void 0 === t ? new THREE.Mesh(h, this.currentMaterial) : new THREE.Mesh(h, t);
                    break;
                case CANNON.Shape.types.CONVEXPOLYHEDRON:
                    for (var u = new THREE.Geometry(), _ = 0; _ < a.vertices.length; _++) {
                        var p = a.vertices[_];
                        u.vertices.push(new THREE.Vector3(p.x, p.y, p.z));
                    }
                    for (var _ = 0; _ < a.faces.length; _++)
                        for (var E = a.faces[_], f = E[0], m = 1; m < E.length - 1; m++) {
                            var g = E[m],
                                T = E[m + 1];
                            u.faces.push(new THREE.Face3(f, g, T));
                        }
                    u.computeBoundingSphere(), u.computeFaceNormals(), (o = void 0 === t ? new THREE.Mesh(u, this.currentMaterial) : new THREE.Mesh(u, t));
                    break;
                case CANNON.Shape.types.HEIGHTFIELD:
                    for (var l = new THREE.Geometry(), A = new CANNON.Vec3(), S = new CANNON.Vec3(), v = new CANNON.Vec3(), b = 0; b < a.data.length - 1; b++)
                        for (var y = 0; y < a.data[b].length - 1; y++)
                            for (var w = 0; 2 > w; w++) {
                                a.getConvexTrianglePillar(b, y, 0 === w),
                                    A.copy(a.pillarConvex.vertices[0]),
                                    S.copy(a.pillarConvex.vertices[1]),
                                    v.copy(a.pillarConvex.vertices[2]),
                                    A.vadd(a.pillarOffset, A),
                                    S.vadd(a.pillarOffset, S),
                                    v.vadd(a.pillarOffset, v),
                                    l.vertices.push(new THREE.Vector3(A.x, A.y, A.z), new THREE.Vector3(S.x, S.y, S.z), new THREE.Vector3(v.x, v.y, v.z));
                                var _ = l.vertices.length - 3;
                                l.faces.push(new THREE.Face3(_, _ + 1, _ + 2));
                            }
                    l.computeBoundingSphere(), l.computeFaceNormals(), (o = void 0 === t ? new THREE.Mesh(l, this.currentMaterial) : new THREE.Mesh(l, t));
                    break;
                case CANNON.Shape.types.TRIMESH:
                    for (var l = new THREE.Geometry(), A = new CANNON.Vec3(), S = new CANNON.Vec3(), v = new CANNON.Vec3(), _ = 0; _ < a.indices.length / 3; _++) {
                        a.getTriangleVertices(_, A, S, v), l.vertices.push(new THREE.Vector3(A.x, A.y, A.z), new THREE.Vector3(S.x, S.y, S.z), new THREE.Vector3(v.x, v.y, v.z));
                        var m = l.vertices.length - 3;
                        l.faces.push(new THREE.Face3(m, m + 1, m + 2));
                    }
                    l.computeBoundingSphere(), l.computeFaceNormals(), (o = void 0 === t ? new THREE.Mesh(l, this.currentMaterial) : new THREE.Mesh(l, t));
                    break;
                default:
                    throw "Visual type not recognized: " + a.type;
            }
            if (((o.receiveShadow = !0), (o.castShadow = !0), o.children))
                for (var _ = 0; _ < o.children.length; _++)
                    if (((o.children[_].castShadow = !0), (o.children[_].receiveShadow = !0), o.children[_]))
                        for (var m = 0; m < o.children[_].length; m++) (o.children[_].children[m].castShadow = !0), (o.children[_].children[m].receiveShadow = !0);
            var x = e.shapeOffsets[i],
                O = e.shapeOrientations[i];
            o.position.set(x.x, x.y, x.z), o.quaternion.set(O.x, O.y, O.z, O.w), n.add(o);
        }
        return (
            (this.camera = function () {
                return camera;
            }),
            (this.getScene = function () {
                return scene;
            }),
            n
        );
    });
var MS_ROLLING_SCORE = 750,
    s_iOffsetX = 0,
    s_iOffsetY = 0,
    s_fInverseScaling = 0;
!(function (e) {
    (jQuery.browser = jQuery.browser || {}).mobile =
        /android|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(ad|hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|symbian|tablet|treo|up\.(browser|link)|vodafone|wap|webos|windows (ce|phone)|xda|xiino/i.test(
            e
        ) ||
        /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|e\-|e\/|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(di|rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|xda(\-|2|g)|yas\-|your|zeto|zte\-/i.test(
            e.substr(0, 4)
        );
})(navigator.userAgent || navigator.vendor || window.opera),
    $(window).resize(function () {
        sizeHandler();
    }),
    window.addEventListener("orientationchange", onOrientationChange),
    (NoClickDelay.prototype = {
        handleEvent: function (e) {
            switch (e.type) {
                case "touchstart":
                    this.onTouchStart(e);
                    break;
                case "touchmove":
                    this.onTouchMove(e);
                    break;
                case "touchend":
                    this.onTouchEnd(e);
            }
        },
        onTouchStart: function (e) {
            e.preventDefault(), (this.moved = !1), this.element.addEventListener("touchmove", this, !1), this.element.addEventListener("touchend", this, !1);
        },
        onTouchMove: function (e) {
            this.moved = !0;
        },
        onTouchEnd: function (e) {
            if ((this.element.removeEventListener("touchmove", this, !1), this.element.removeEventListener("touchend", this, !1), !this.moved)) {
                var t = document.elementFromPoint(e.changedTouches[0].clientX, e.changedTouches[0].clientY);
                3 == t.nodeType && (t = t.parentNode);
                var n = document.createEvent("MouseEvents");
                n.initEvent("click", !0, !0), t.dispatchEvent(n);
            }
        },
    }),
    (function () {
        function e(e) {
            var n = "visible",
                i = "hidden",
                o = { focus: n, focusin: n, pageshow: n, blur: i, focusout: i, pagehide: i };
            (e = e || window.event), e.type in o ? (document.body.className = o[e.type]) : ((document.body.className = this[t] ? "hidden" : "visible"), "hidden" === document.body.className ? s_oMain.stopUpdate() : s_oMain.startUpdate());
        }
        var t = "hidden";
        t in document
            ? document.addEventListener("visibilitychange", e)
            : (t = "mozHidden") in document
            ? document.addEventListener("mozvisibilitychange", e)
            : (t = "webkitHidden") in document
            ? document.addEventListener("webkitvisibilitychange", e)
            : (t = "msHidden") in document
            ? document.addEventListener("msvisibilitychange", e)
            : "onfocusin" in document
            ? (document.onfocusin = document.onfocusout = e)
            : (window.onpageshow = window.onpagehide = window.onfocus = window.onblur = e);
    })(),
    (Math.radians = function (e) {
        return (e * Math.PI) / 180;
    }),
    (Math.degrees = function (e) {
        return (180 * e) / Math.PI;
    }),
    (Detector = {
        canvas: !!window.CanvasRenderingContext2D,
        webgl: (function () {
            try {
                return !!window.WebGLRenderingContext && !!document.createElement("canvas").getContext("experimental-webgl");
            } catch (e) {
                return !1;
            }
        })(),
        workers: !!window.Worker,
        fileapi: window.File && window.FileReader && window.FileList && window.Blob,
        getWebGLErrorMessage: function () {
            var e = document.createElement("div");
            return (
                (e.id = "webgl-error-message"),
                (e.style.fontFamily = "monospace"),
                (e.style.fontSize = "13px"),
                (e.style.fontWeight = "normal"),
                (e.style.textAlign = "center"),
                (e.style.background = "#fff"),
                (e.style.color = "#000"),
                (e.style.padding = "1.5em"),
                (e.style.width = "400px"),
                (e.style.margin = "5em auto 0"),
                this.webgl ||
                    (e.innerHTML = window.WebGLRenderingContext
                        ? [
                              'Your graphics card does not seem to support <a href="http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation" style="color:#000">WebGL</a>.<br />',
                              'Find out how to get it <a href="http://get.webgl.org/" style="color:#000">here</a>.',
                          ].join("\n")
                        : [
                              'Your browser does not seem to support <a href="http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation" style="color:#000">WebGL</a>.<br/>',
                              'Find out how to get it <a href="http://get.webgl.org/" style="color:#000">here</a>.',
                          ].join("\n")),
                e
            );
        },
        addGetWebGLMessage: function (e) {
            var t, n, i;
            (e = e || {}), (t = void 0 !== e.parent ? e.parent : document.body), (n = void 0 !== e.id ? e.id : "oldie"), (i = Detector.getWebGLErrorMessage()), (i.id = n), t.appendChild(i);
        },
    }),
    (THREE.TrackballControls = function (e, t) {
        function n(e) {
            h.enabled !== !1 &&
                (window.removeEventListener("keydown", n),
                (f = E),
                E === u.NONE && (e.keyCode !== h.keys[u.ROTATE] || h.noRotate ? (e.keyCode !== h.keys[u.ZOOM] || h.noZoom ? e.keyCode !== h.keys[u.PAN] || h.noPan || (E = u.PAN) : (E = u.ZOOM)) : (E = u.ROTATE)));
        }
        function i(e) {
            h.enabled !== !1 && ((E = f), window.addEventListener("keydown", n, !1));
        }
        function o(e) {
            h.enabled !== !1 &&
                (e.preventDefault(),
                e.stopPropagation(),
                E === u.NONE && (E = e.button),
                E !== u.ROTATE || h.noRotate ? (E !== u.ZOOM || h.noZoom ? E !== u.PAN || h.noPan || (y.copy(L(e.pageX, e.pageY)), w.copy(y)) : (A.copy(L(e.pageX, e.pageY)), S.copy(A))) : (g.copy(R(e.pageX, e.pageY)), T.copy(g)),
                document.addEventListener("mousemove", a, !1),
                document.addEventListener("mouseup", s, !1),
                h.dispatchEvent(O));
        }
        function a(e) {
            h.enabled !== !1 &&
                (e.preventDefault(), e.stopPropagation(), E !== u.ROTATE || h.noRotate ? (E !== u.ZOOM || h.noZoom ? E !== u.PAN || h.noPan || w.copy(L(e.pageX, e.pageY)) : S.copy(L(e.pageX, e.pageY))) : T.copy(R(e.pageX, e.pageY)));
        }
        function s(e) {
            h.enabled !== !1 && (e.preventDefault(), e.stopPropagation(), (E = u.NONE), document.removeEventListener("mousemove", a), document.removeEventListener("mouseup", s), h.dispatchEvent(C));
        }
        function r(e) {
            if (h.enabled !== !1) {
                e.preventDefault(), e.stopPropagation();
                var t = 0;
                e.wheelDelta ? (t = e.wheelDelta / 40) : e.detail && (t = -e.detail / 3), (A.y += 0.01 * t), h.dispatchEvent(O), h.dispatchEvent(C);
            }
        }
        function l(e) {
            if (h.enabled !== !1) {
                switch (e.touches.length) {
                    case 1:
                        (E = u.TOUCH_ROTATE), g.copy(R(e.touches[0].pageX, e.touches[0].pageY)), T.copy(g);
                        break;
                    case 2:
                        E = u.TOUCH_ZOOM_PAN;
                        var t = e.touches[0].pageX - e.touches[1].pageX,
                            n = e.touches[0].pageY - e.touches[1].pageY;
                        b = v = Math.sqrt(t * t + n * n);
                        var i = (e.touches[0].pageX + e.touches[1].pageX) / 2,
                            o = (e.touches[0].pageY + e.touches[1].pageY) / 2;
                        y.copy(L(i, o)), w.copy(y);
                        break;
                    default:
                        E = u.NONE;
                }
                h.dispatchEvent(O);
            }
        }
        function c(e) {
            if (h.enabled !== !1)
                switch ((e.preventDefault(), e.stopPropagation(), e.touches.length)) {
                    case 1:
                        T.copy(R(e.touches[0].pageX, e.touches[0].pageY));
                        break;
                    case 2:
                        var t = e.touches[0].pageX - e.touches[1].pageX,
                            n = e.touches[0].pageY - e.touches[1].pageY;
                        b = Math.sqrt(t * t + n * n);
                        var i = (e.touches[0].pageX + e.touches[1].pageX) / 2,
                            o = (e.touches[0].pageY + e.touches[1].pageY) / 2;
                        w.copy(L(i, o));
                        break;
                    default:
                        E = u.NONE;
                }
        }
        function d(e) {
            if (h.enabled !== !1) {
                switch (e.touches.length) {
                    case 1:
                        T.copy(R(e.touches[0].pageX, e.touches[0].pageY)), g.copy(T);
                        break;
                    case 2:
                        v = b = 0;
                        var t = (e.touches[0].pageX + e.touches[1].pageX) / 2,
                            n = (e.touches[0].pageY + e.touches[1].pageY) / 2;
                        w.copy(L(t, n)), y.copy(w);
                }
                (E = u.NONE), h.dispatchEvent(C);
            }
        }
        var h = this,
            u = { NONE: -1, ROTATE: 0, ZOOM: 1, PAN: 2, TOUCH_ROTATE: 3, TOUCH_ZOOM_PAN: 4 };
        (this.object = e),
            (this.domElement = void 0 !== t ? t : document),
            (this.enabled = !0),
            (this.screen = { left: 0, top: 0, width: 0, height: 0 }),
            (this.rotateSpeed = 1),
            (this.zoomSpeed = 1.2),
            (this.panSpeed = 0.3),
            (this.noRotate = !1),
            (this.noZoom = !1),
            (this.noPan = !1),
            (this.noRoll = !1),
            (this.staticMoving = !1),
            (this.dynamicDampingFactor = 0.2),
            (this.minDistance = 0),
            (this.maxDistance = 1 / 0),
            (this.keys = [65, 83, 68]),
            (this.target = new THREE.Vector3());
        var _ = 1e-6,
            p = new THREE.Vector3(),
            E = u.NONE,
            f = u.NONE,
            m = new THREE.Vector3(),
            g = new THREE.Vector3(),
            T = new THREE.Vector3(),
            A = new THREE.Vector2(),
            S = new THREE.Vector2(),
            v = 0,
            b = 0,
            y = new THREE.Vector2(),
            w = new THREE.Vector2();
        (this.target0 = this.target.clone()), (this.position0 = this.object.position.clone()), (this.up0 = this.object.up.clone());
        var x = { type: "change" },
            O = { type: "start" },
            C = { type: "end" };
        (this.handleResize = function () {
            if (this.domElement === document) (this.screen.left = 0), (this.screen.top = 0), (this.screen.width = window.innerWidth), (this.screen.height = window.innerHeight);
            else {
                var e = this.domElement.getBoundingClientRect(),
                    t = this.domElement.ownerDocument.documentElement;
                (this.screen.left = e.left + window.pageXOffset - t.clientLeft), (this.screen.top = e.top + window.pageYOffset - t.clientTop), (this.screen.width = e.width), (this.screen.height = e.height);
            }
        }),
            (this.handleEvent = function (e) {
                "function" == typeof this[e.type] && this[e.type](e);
            });
        var L = (function () {
                var e = new THREE.Vector2();
                return function (t, n) {
                    return e.set((t - h.screen.left) / h.screen.width, (n - h.screen.top) / h.screen.height), e;
                };
            })(),
            R = (function () {
                var e = new THREE.Vector3(),
                    t = new THREE.Vector3(),
                    n = new THREE.Vector3();
                return function (i, o) {
                    n.set((i - 0.5 * h.screen.width - h.screen.left) / (0.5 * h.screen.width), (0.5 * h.screen.height + h.screen.top - o) / (0.5 * h.screen.height), 0);
                    var a = n.length();
                    return (
                        h.noRoll ? (a < Math.SQRT1_2 ? (n.z = Math.sqrt(1 - a * a)) : (n.z = 0.5 / a)) : a > 1 ? n.normalize() : (n.z = Math.sqrt(1 - a * a)),
                        m.copy(h.object.position).sub(h.target),
                        e.copy(h.object.up).setLength(n.y),
                        e.add(t.copy(h.object.up).cross(m).setLength(n.x)),
                        e.add(m.setLength(n.z)),
                        e
                    );
                };
            })();
        (this.rotateCamera = (function () {
            var e = new THREE.Vector3(),
                t = new THREE.Quaternion();
            return function () {
                var n = Math.acos(g.dot(T) / g.length() / T.length());
                n &&
                    (e.crossVectors(g, T).normalize(),
                    (n *= h.rotateSpeed),
                    t.setFromAxisAngle(e, -n),
                    m.applyQuaternion(t),
                    h.object.up.applyQuaternion(t),
                    T.applyQuaternion(t),
                    h.staticMoving ? g.copy(T) : (t.setFromAxisAngle(e, n * (h.dynamicDampingFactor - 1)), g.applyQuaternion(t)));
            };
        })()),
            (this.zoomCamera = function () {
                if (E === u.TOUCH_ZOOM_PAN) {
                    var e = v / b;
                    (v = b), m.multiplyScalar(e);
                } else {
                    var e = 1 + (S.y - A.y) * h.zoomSpeed;
                    1 !== e && e > 0 && (m.multiplyScalar(e), h.staticMoving ? A.copy(S) : (A.y += (S.y - A.y) * this.dynamicDampingFactor));
                }
            }),
            (this.panCamera = (function () {
                var e = new THREE.Vector2(),
                    t = new THREE.Vector3(),
                    n = new THREE.Vector3();
                return function () {
                    e.copy(w).sub(y),
                        e.lengthSq() &&
                            (e.multiplyScalar(m.length() * h.panSpeed),
                            n.copy(m).cross(h.object.up).setLength(e.x),
                            n.add(t.copy(h.object.up).setLength(e.y)),
                            h.object.position.add(n),
                            h.target.add(n),
                            h.staticMoving ? y.copy(w) : y.add(e.subVectors(w, y).multiplyScalar(h.dynamicDampingFactor)));
                };
            })()),
            (this.checkDistances = function () {
                (h.noZoom && h.noPan) ||
                    (m.lengthSq() > h.maxDistance * h.maxDistance && h.object.position.addVectors(h.target, m.setLength(h.maxDistance)),
                    m.lengthSq() < h.minDistance * h.minDistance && h.object.position.addVectors(h.target, m.setLength(h.minDistance)));
            }),
            (this.update = function () {
                m.subVectors(h.object.position, h.target),
                    h.noRotate || h.rotateCamera(),
                    h.noZoom || h.zoomCamera(),
                    h.noPan || h.panCamera(),
                    h.object.position.addVectors(h.target, m),
                    h.checkDistances(),
                    h.object.lookAt(h.target),
                    p.distanceToSquared(h.object.position) > _ && (h.dispatchEvent(x), p.copy(h.object.position));
            }),
            (this.reset = function () {
                (E = u.NONE),
                    (f = u.NONE),
                    h.target.copy(h.target0),
                    h.object.position.copy(h.position0),
                    h.object.up.copy(h.up0),
                    m.subVectors(h.object.position, h.target),
                    h.object.lookAt(h.target),
                    h.dispatchEvent(x),
                    p.copy(h.object.position);
            }),
            this.domElement.addEventListener(
                "contextmenu",
                function (e) {
                    e.preventDefault();
                },
                !1
            ),
            this.domElement.addEventListener("mousedown", o, !1),
            this.domElement.addEventListener("mousewheel", r, !1),
            this.domElement.addEventListener("DOMMouseScroll", r, !1),
            this.domElement.addEventListener("touchstart", l, !1),
            this.domElement.addEventListener("touchend", d, !1),
            this.domElement.addEventListener("touchmove", c, !1),
            window.addEventListener("keydown", n, !1),
            window.addEventListener("keyup", i, !1),
            this.handleResize(),
            this.update();
    }),
    (THREE.TrackballControls.prototype = Object.create(THREE.EventDispatcher.prototype));
var s_oInterface = null,
    s_oScenario,
    s_bMobile,
    s_bAudioActive = !0,
    s_bFullscreen = !1,
    s_iCntTime = 0,
    s_iTimeElaps = 0,
    s_iPrevTime = 0,
    s_iCntFps = 0,
    s_iCurFps = 0,
    s_oPhysicsController,
    s_iCanvasResizeHeight,
    s_iCanvasResizeWidth,
    s_iCanvasOffsetHeight,
    s_iCanvasOffsetWidth,
    s_iAdsLevel = 1,
    s_iBestScore = 0,
    s_oDrawLayer,
    s_oStage,
    s_oMain,
    s_oSpriteLibrary,
    s_oSoundTrack,
    dat = dat || {};
(dat.gui = dat.gui || {}),
    (dat.utils = dat.utils || {}),
    (dat.controllers = dat.controllers || {}),
    (dat.dom = dat.dom || {}),
    (dat.color = dat.color || {}),
    (dat.utils.css = (function () {
        return {
            load: function (e, t) {
                t = t || document;
                var n = t.createElement("link");
                (n.type = "text/css"), (n.rel = "stylesheet"), (n.href = e), t.getElementsByTagName("head")[0].appendChild(n);
            },
            inject: function (e, t) {
                t = t || document;
                var n = document.createElement("style");
                (n.type = "text/css"), (n.innerHTML = e), t.getElementsByTagName("head")[0].appendChild(n);
            },
        };
    })()),
    (dat.utils.common = (function () {
        var e = Array.prototype.forEach,
            t = Array.prototype.slice;
        return {
            BREAK: {},
            extend: function (e) {
                return (
                    this.each(
                        t.call(arguments, 1),
                        function (t) {
                            for (var n in t) this.isUndefined(t[n]) || (e[n] = t[n]);
                        },
                        this
                    ),
                    e
                );
            },
            defaults: function (e) {
                return (
                    this.each(
                        t.call(arguments, 1),
                        function (t) {
                            for (var n in t) this.isUndefined(e[n]) && (e[n] = t[n]);
                        },
                        this
                    ),
                    e
                );
            },
            compose: function () {
                var e = t.call(arguments);
                return function () {
                    for (var n = t.call(arguments), i = e.length - 1; i >= 0; i--) n = [e[i].apply(this, n)];
                    return n[0];
                };
            },
            each: function (t, n, i) {
                if (e && t.forEach === e) t.forEach(n, i);
                else if (t.length === t.length + 0) {
                    for (var o = 0, a = t.length; a > o; o++) if (o in t && n.call(i, t[o], o) === this.BREAK) return;
                } else for (var o in t) if (n.call(i, t[o], o) === this.BREAK) return;
            },
            defer: function (e) {
                setTimeout(e, 0);
            },
            toArray: function (e) {
                return e.toArray ? e.toArray() : t.call(e);
            },
            isUndefined: function (e) {
                return void 0 === e;
            },
            isNull: function (e) {
                return null === e;
            },
            isNaN: function (e) {
                return e !== e;
            },
            isArray:
                Array.isArray ||
                function (e) {
                    return e.constructor === Array;
                },
            isObject: function (e) {
                return e === Object(e);
            },
            isNumber: function (e) {
                return e === e + 0;
            },
            isString: function (e) {
                return e === e + "";
            },
            isBoolean: function (e) {
                return e === !1 || e === !0;
            },
            isFunction: function (e) {
                return "[object Function]" === Object.prototype.toString.call(e);
            },
        };
    })()),
    (dat.controllers.Controller = (function (e) {
        var t = function (e, t) {
            (this.initialValue = e[t]), (this.domElement = document.createElement("div")), (this.object = e), (this.property = t), (this.__onChange = void 0), (this.__onFinishChange = void 0);
        };
        return (
            e.extend(t.prototype, {
                onChange: function (e) {
                    return (this.__onChange = e), this;
                },
                onFinishChange: function (e) {
                    return (this.__onFinishChange = e), this;
                },
                setValue: function (e) {
                    return (this.object[this.property] = e), this.__onChange && this.__onChange.call(this, e), this.updateDisplay(), this;
                },
                getValue: function () {
                    return this.object[this.property];
                },
                updateDisplay: function () {
                    return this;
                },
                isModified: function () {
                    return this.initialValue !== this.getValue();
                },
            }),
            t
        );
    })(dat.utils.common)),
    (dat.dom.dom = (function (e) {
        function t(t) {
            if ("0" === t || e.isUndefined(t)) return 0;
            var n = t.match(o);
            return e.isNull(n) ? 0 : parseFloat(n[1]);
        }
        var n = { HTMLEvents: ["change"], MouseEvents: ["click", "mousemove", "mousedown", "mouseup", "mouseover"], KeyboardEvents: ["keydown"] },
            i = {};
        e.each(n, function (t, n) {
            e.each(t, function (e) {
                i[e] = n;
            });
        });
        var o = /(\d+(\.\d+)?)px/,
            a = {
                makeSelectable: function (e, t) {
                    void 0 !== e &&
                        void 0 !== e.style &&
                        ((e.onselectstart = t
                            ? function () {
                                  return !1;
                              }
                            : function () {}),
                        (e.style.MozUserSelect = t ? "auto" : "none"),
                        (e.style.KhtmlUserSelect = t ? "auto" : "none"),
                        (e.unselectable = t ? "on" : "off"));
                },
                makeFullscreen: function (t, n, i) {
                    e.isUndefined(n) && (n = !0), e.isUndefined(i) && (i = !0), (t.style.position = "absolute"), n && ((t.style.left = 0), (t.style.right = 0)), i && ((t.style.top = 0), (t.style.bottom = 0));
                },
                fakeEvent: function (t, n, o, a) {
                    o = o || {};
                    var s = i[n];
                    if (!s) throw new Error("Event type " + n + " not supported.");
                    var r = document.createEvent(s);
                    switch (s) {
                        case "MouseEvents":
                            var l = o.x || o.clientX || 0,
                                c = o.y || o.clientY || 0;
                            r.initMouseEvent(n, o.bubbles || !1, o.cancelable || !0, window, o.clickCount || 1, 0, 0, l, c, !1, !1, !1, !1, 0, null);
                            break;
                        case "KeyboardEvents":
                            var d = r.initKeyboardEvent || r.initKeyEvent;
                            e.defaults(o, { cancelable: !0, ctrlKey: !1, altKey: !1, shiftKey: !1, metaKey: !1, keyCode: void 0, charCode: void 0 }),
                                d(n, o.bubbles || !1, o.cancelable, window, o.ctrlKey, o.altKey, o.shiftKey, o.metaKey, o.keyCode, o.charCode);
                            break;
                        default:
                            r.initEvent(n, o.bubbles || !1, o.cancelable || !0);
                    }
                    e.defaults(r, a), t.dispatchEvent(r);
                },
                bind: function (e, t, n, i) {
                    return (i = i || !1), e.addEventListener ? e.addEventListener(t, n, i) : e.attachEvent && e.attachEvent("on" + t, n), a;
                },
                unbind: function (e, t, n, i) {
                    return (i = i || !1), e.removeEventListener ? e.removeEventListener(t, n, i) : e.detachEvent && e.detachEvent("on" + t, n), a;
                },
                addClass: function (e, t) {
                    if (void 0 === e.className) e.className = t;
                    else if (e.className !== t) {
                        var n = e.className.split(/ +/);
                        -1 == n.indexOf(t) && (n.push(t), (e.className = n.join(" ").replace(/^\s+/, "").replace(/\s+$/, "")));
                    }
                    return a;
                },
                removeClass: function (e, t) {
                    if (t)
                        if (void 0 === e.className);
                        else if (e.className === t) e.removeAttribute("class");
                        else {
                            var n = e.className.split(/ +/),
                                i = n.indexOf(t);
                            -1 != i && (n.splice(i, 1), (e.className = n.join(" ")));
                        }
                    else e.className = void 0;
                    return a;
                },
                hasClass: function (e, t) {
                    return new RegExp("(?:^|\\s+)" + t + "(?:\\s+|$)").test(e.className) || !1;
                },
                getWidth: function (e) {
                    var n = getComputedStyle(e);
                    return t(n["border-left-width"]) + t(n["border-right-width"]) + t(n["padding-left"]) + t(n["padding-right"]) + t(n.width);
                },
                getHeight: function (e) {
                    var n = getComputedStyle(e);
                    return t(n["border-top-width"]) + t(n["border-bottom-width"]) + t(n["padding-top"]) + t(n["padding-bottom"]) + t(n.height);
                },
                getOffset: function (e) {
                    var t = { left: 0, top: 0 };
                    if (e.offsetParent)
                        do (t.left += e.offsetLeft), (t.top += e.offsetTop);
                        while ((e = e.offsetParent));
                    return t;
                },
                isActive: function (e) {
                    return e === document.activeElement && (e.type || e.href);
                },
            };
        return a;
    })(dat.utils.common)),
    (dat.controllers.OptionController = (function (e, t, n) {
        var i = function (e, o, a) {
            i.superclass.call(this, e, o);
            var s = this;
            if (((this.__select = document.createElement("select")), n.isArray(a))) {
                var r = {};
                n.each(a, function (e) {
                    r[e] = e;
                }),
                    (a = r);
            }
            n.each(a, function (e, t) {
                var n = document.createElement("option");
                (n.innerHTML = t), n.setAttribute("value", e), s.__select.appendChild(n);
            }),
                this.updateDisplay(),
                t.bind(this.__select, "change", function () {
                    var e = this.options[this.selectedIndex].value;
                    s.setValue(e);
                }),
                this.domElement.appendChild(this.__select);
        };
        return (
            (i.superclass = e),
            n.extend(i.prototype, e.prototype, {
                setValue: function (e) {
                    var t = i.superclass.prototype.setValue.call(this, e);
                    return this.__onFinishChange && this.__onFinishChange.call(this, this.getValue()), t;
                },
                updateDisplay: function () {
                    return (this.__select.value = this.getValue()), i.superclass.prototype.updateDisplay.call(this);
                },
            }),
            i
        );
    })(dat.controllers.Controller, dat.dom.dom, dat.utils.common)),
    (dat.controllers.NumberController = (function (e, t) {
        function n(e) {
            return (e = e.toString()), e.indexOf(".") > -1 ? e.length - e.indexOf(".") - 1 : 0;
        }
        var i = function (e, o, a) {
            i.superclass.call(this, e, o),
                (a = a || {}),
                (this.__min = a.min),
                (this.__max = a.max),
                (this.__step = a.step),
                t.isUndefined(this.__step) ? (0 == this.initialValue ? (this.__impliedStep = 1) : (this.__impliedStep = Math.pow(10, Math.floor(Math.log(this.initialValue) / Math.LN10)) / 10)) : (this.__impliedStep = this.__step),
                (this.__precision = n(this.__impliedStep));
        };
        return (
            (i.superclass = e),
            t.extend(i.prototype, e.prototype, {
                setValue: function (e) {
                    return (
                        void 0 !== this.__min && e < this.__min ? (e = this.__min) : void 0 !== this.__max && e > this.__max && (e = this.__max),
                        void 0 !== this.__step && e % this.__step != 0 && (e = Math.round(e / this.__step) * this.__step),
                        i.superclass.prototype.setValue.call(this, e)
                    );
                },
                min: function (e) {
                    return (this.__min = e), this;
                },
                max: function (e) {
                    return (this.__max = e), this;
                },
                step: function (e) {
                    return (this.__step = e), this;
                },
            }),
            i
        );
    })(dat.controllers.Controller, dat.utils.common)),
    (dat.controllers.NumberControllerBox = (function (e, t, n) {
        function i(e, t) {
            var n = Math.pow(10, t);
            return Math.round(e * n) / n;
        }
        var o = function (e, i, a) {
            function s() {
                var e = parseFloat(u.__input.value);
                n.isNaN(e) || u.setValue(e);
            }
            function r() {
                s(), u.__onFinishChange && u.__onFinishChange.call(u, u.getValue());
            }
            function l(e) {
                t.bind(window, "mousemove", c), t.bind(window, "mouseup", d), (h = e.clientY);
            }
            function c(e) {
                var t = h - e.clientY;
                u.setValue(u.getValue() + t * u.__impliedStep), (h = e.clientY);
            }
            function d() {
                t.unbind(window, "mousemove", c), t.unbind(window, "mouseup", d);
            }
            (this.__truncationSuspended = !1), o.superclass.call(this, e, i, a);
            var h,
                u = this;
            (this.__input = document.createElement("input")),
                this.__input.setAttribute("type", "text"),
                t.bind(this.__input, "change", s),
                t.bind(this.__input, "blur", r),
                t.bind(this.__input, "mousedown", l),
                t.bind(this.__input, "keydown", function (e) {
                    13 === e.keyCode && ((u.__truncationSuspended = !0), this.blur(), (u.__truncationSuspended = !1));
                }),
                this.updateDisplay(),
                this.domElement.appendChild(this.__input);
        };
        return (
            (o.superclass = e),
            n.extend(o.prototype, e.prototype, {
                updateDisplay: function () {
                    return (this.__input.value = this.__truncationSuspended ? this.getValue() : i(this.getValue(), this.__precision)), o.superclass.prototype.updateDisplay.call(this);
                },
            }),
            o
        );
    })(dat.controllers.NumberController, dat.dom.dom, dat.utils.common)),
    (dat.controllers.NumberControllerSlider = (function (e, t, n, i, o) {
        function a(e, t, n, i, o) {
            return i + (o - i) * ((e - t) / (n - t));
        }
        var s = function (e, n, i, o, r) {
            function l(e) {
                t.bind(window, "mousemove", c), t.bind(window, "mouseup", d), c(e);
            }
            function c(e) {
                e.preventDefault();
                var n = t.getOffset(h.__background),
                    i = t.getWidth(h.__background);
                return h.setValue(a(e.clientX, n.left, n.left + i, h.__min, h.__max)), !1;
            }
            function d() {
                t.unbind(window, "mousemove", c), t.unbind(window, "mouseup", d), h.__onFinishChange && h.__onFinishChange.call(h, h.getValue());
            }
            s.superclass.call(this, e, n, { min: i, max: o, step: r });
            var h = this;
            (this.__background = document.createElement("div")),
                (this.__foreground = document.createElement("div")),
                t.bind(this.__background, "mousedown", l),
                t.addClass(this.__background, "slider"),
                t.addClass(this.__foreground, "slider-fg"),
                this.updateDisplay(),
                this.__background.appendChild(this.__foreground),
                this.domElement.appendChild(this.__background);
        };
        return (
            (s.superclass = e),
            (s.useDefaultStyles = function () {
                n.inject(o);
            }),
            i.extend(s.prototype, e.prototype, {
                updateDisplay: function () {
                    var e = (this.getValue() - this.__min) / (this.__max - this.__min);
                    return (this.__foreground.style.width = 100 * e + "%"), s.superclass.prototype.updateDisplay.call(this);
                },
            }),
            s
        );
    })(
        dat.controllers.NumberController,
        dat.dom.dom,
        dat.utils.css,
        dat.utils.common,
        ".slider {\n  box-shadow: inset 0 2px 4px rgba(0,0,0,0.15);\n  height: 1em;\n  border-radius: 1em;\n  background-color: #eee;\n  padding: 0 0.5em;\n  overflow: hidden;\n}\n\n.slider-fg {\n  padding: 1px 0 2px 0;\n  background-color: #aaa;\n  height: 1em;\n  margin-left: -0.5em;\n  padding-right: 0.5em;\n  border-radius: 1em 0 0 1em;\n}\n\n.slider-fg:after {\n  display: inline-block;\n  border-radius: 1em;\n  background-color: #fff;\n  border:  1px solid #aaa;\n  content: '';\n  float: right;\n  margin-right: -1em;\n  margin-top: -1px;\n  height: 0.9em;\n  width: 0.9em;\n}"
    )),
    (dat.controllers.FunctionController = (function (e, t, n) {
        var i = function (e, n, o) {
            i.superclass.call(this, e, n);
            var a = this;
            (this.__button = document.createElement("div")),
                (this.__button.innerHTML = void 0 === o ? "Fire" : o),
                t.bind(this.__button, "click", function (e) {
                    return e.preventDefault(), a.fire(), !1;
                }),
                t.addClass(this.__button, "button"),
                this.domElement.appendChild(this.__button);
        };
        return (
            (i.superclass = e),
            n.extend(i.prototype, e.prototype, {
                fire: function () {
                    this.__onChange && this.__onChange.call(this), this.__onFinishChange && this.__onFinishChange.call(this, this.getValue()), this.getValue().call(this.object);
                },
            }),
            i
        );
    })(dat.controllers.Controller, dat.dom.dom, dat.utils.common)),
    (dat.controllers.BooleanController = (function (e, t, n) {
        var i = function (e, n) {
            function o() {
                a.setValue(!a.__prev);
            }
            i.superclass.call(this, e, n);
            var a = this;
            (this.__prev = this.getValue()),
                (this.__checkbox = document.createElement("input")),
                this.__checkbox.setAttribute("type", "checkbox"),
                t.bind(this.__checkbox, "change", o, !1),
                this.domElement.appendChild(this.__checkbox),
                this.updateDisplay();
        };
        return (
            (i.superclass = e),
            n.extend(i.prototype, e.prototype, {
                setValue: function (e) {
                    var t = i.superclass.prototype.setValue.call(this, e);
                    return this.__onFinishChange && this.__onFinishChange.call(this, this.getValue()), (this.__prev = this.getValue()), t;
                },
                updateDisplay: function () {
                    return this.getValue() === !0 ? (this.__checkbox.setAttribute("checked", "checked"), (this.__checkbox.checked = !0)) : (this.__checkbox.checked = !1), i.superclass.prototype.updateDisplay.call(this);
                },
            }),
            i
        );
    })(dat.controllers.Controller, dat.dom.dom, dat.utils.common)),
    (dat.color.toString = (function (e) {
        return function (t) {
            if (1 == t.a || e.isUndefined(t.a)) {
                for (var n = t.hex.toString(16); n.length < 6; ) n = "0" + n;
                return "#" + n;
            }
            return "rgba(" + Math.round(t.r) + "," + Math.round(t.g) + "," + Math.round(t.b) + "," + t.a + ")";
        };
    })(dat.utils.common)),
    (dat.color.interpret = (function (e, t) {
        var n,
            i,
            o = function () {
                i = !1;
                var e = arguments.length > 1 ? t.toArray(arguments) : arguments[0];
                return (
                    t.each(a, function (o) {
                        return o.litmus(e)
                            ? (t.each(o.conversions, function (o, a) {
                                  return (n = o.read(e)), i === !1 && n !== !1 ? ((i = n), (n.conversionName = a), (n.conversion = o), t.BREAK) : void 0;
                              }),
                              t.BREAK)
                            : void 0;
                    }),
                    i
                );
            },
            a = [
                {
                    litmus: t.isString,
                    conversions: {
                        THREE_CHAR_HEX: {
                            read: function (e) {
                                var t = e.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);
                                return null === t ? !1 : { space: "HEX", hex: parseInt("0x" + t[1].toString() + t[1].toString() + t[2].toString() + t[2].toString() + t[3].toString() + t[3].toString()) };
                            },
                            write: e,
                        },
                        SIX_CHAR_HEX: {
                            read: function (e) {
                                var t = e.match(/^#([A-F0-9]{6})$/i);
                                return null === t ? !1 : { space: "HEX", hex: parseInt("0x" + t[1].toString()) };
                            },
                            write: e,
                        },
                        CSS_RGB: {
                            read: function (e) {
                                var t = e.match(/^rgb\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\)/);
                                return null === t ? !1 : { space: "RGB", r: parseFloat(t[1]), g: parseFloat(t[2]), b: parseFloat(t[3]) };
                            },
                            write: e,
                        },
                        CSS_RGBA: {
                            read: function (e) {
                                var t = e.match(/^rgba\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\,\s*(.+)\s*\)/);
                                return null === t ? !1 : { space: "RGB", r: parseFloat(t[1]), g: parseFloat(t[2]), b: parseFloat(t[3]), a: parseFloat(t[4]) };
                            },
                            write: e,
                        },
                    },
                },
                {
                    litmus: t.isNumber,
                    conversions: {
                        HEX: {
                            read: function (e) {
                                return { space: "HEX", hex: e, conversionName: "HEX" };
                            },
                            write: function (e) {
                                return e.hex;
                            },
                        },
                    },
                },
                {
                    litmus: t.isArray,
                    conversions: {
                        RGB_ARRAY: {
                            read: function (e) {
                                return 3 != e.length ? !1 : { space: "RGB", r: e[0], g: e[1], b: e[2] };
                            },
                            write: function (e) {
                                return [e.r, e.g, e.b];
                            },
                        },
                        RGBA_ARRAY: {
                            read: function (e) {
                                return 4 != e.length ? !1 : { space: "RGB", r: e[0], g: e[1], b: e[2], a: e[3] };
                            },
                            write: function (e) {
                                return [e.r, e.g, e.b, e.a];
                            },
                        },
                    },
                },
                {
                    litmus: t.isObject,
                    conversions: {
                        RGBA_OBJ: {
                            read: function (e) {
                                return t.isNumber(e.r) && t.isNumber(e.g) && t.isNumber(e.b) && t.isNumber(e.a) ? { space: "RGB", r: e.r, g: e.g, b: e.b, a: e.a } : !1;
                            },
                            write: function (e) {
                                return { r: e.r, g: e.g, b: e.b, a: e.a };
                            },
                        },
                        RGB_OBJ: {
                            read: function (e) {
                                return t.isNumber(e.r) && t.isNumber(e.g) && t.isNumber(e.b) ? { space: "RGB", r: e.r, g: e.g, b: e.b } : !1;
                            },
                            write: function (e) {
                                return { r: e.r, g: e.g, b: e.b };
                            },
                        },
                        HSVA_OBJ: {
                            read: function (e) {
                                return t.isNumber(e.h) && t.isNumber(e.s) && t.isNumber(e.v) && t.isNumber(e.a) ? { space: "HSV", h: e.h, s: e.s, v: e.v, a: e.a } : !1;
                            },
                            write: function (e) {
                                return { h: e.h, s: e.s, v: e.v, a: e.a };
                            },
                        },
                        HSV_OBJ: {
                            read: function (e) {
                                return t.isNumber(e.h) && t.isNumber(e.s) && t.isNumber(e.v) ? { space: "HSV", h: e.h, s: e.s, v: e.v } : !1;
                            },
                            write: function (e) {
                                return { h: e.h, s: e.s, v: e.v };
                            },
                        },
                    },
                },
            ];
        return o;
    })(dat.color.toString, dat.utils.common)),
    (dat.GUI = dat.gui.GUI = (function (e, t, n, i, o, a, s, r, l, c, d, h, u, _, p) {
        function E(e, t, n, a) {
            if (void 0 === t[n]) throw new Error("Object " + t + ' has no property "' + n + '"');
            var s;
            if (a.color) s = new d(t, n);
            else {
                var r = [t, n].concat(a.factoryArgs);
                s = i.apply(e, r);
            }
            a.before instanceof o && (a.before = a.before.__li), g(e, s), _.addClass(s.domElement, "c");
            var l = document.createElement("span");
            _.addClass(l, "property-name"), (l.innerHTML = s.property);
            var c = document.createElement("div");
            c.appendChild(l), c.appendChild(s.domElement);
            var h = f(e, c, a.before);
            return _.addClass(h, B.CLASS_CONTROLLER_ROW), _.addClass(h, typeof s.getValue()), m(e, h, s), e.__controllers.push(s), s;
        }
        function f(e, t, n) {
            var i = document.createElement("li");
            return t && i.appendChild(t), n ? e.__ul.insertBefore(i, params.before) : e.__ul.appendChild(i), e.onResize(), i;
        }
        function m(e, t, n) {
            if (
                ((n.__li = t),
                (n.__gui = e),
                p.extend(n, {
                    options: function (t) {
                        return arguments.length > 1
                            ? (n.remove(), E(e, n.object, n.property, { before: n.__li.nextElementSibling, factoryArgs: [p.toArray(arguments)] }))
                            : p.isArray(t) || p.isObject(t)
                            ? (n.remove(), E(e, n.object, n.property, { before: n.__li.nextElementSibling, factoryArgs: [t] }))
                            : void 0;
                    },
                    name: function (e) {
                        return (n.__li.firstElementChild.firstElementChild.innerHTML = e), n;
                    },
                    listen: function () {
                        return n.__gui.listen(n), n;
                    },
                    remove: function () {
                        return n.__gui.remove(n), n;
                    },
                }),
                n instanceof l)
            ) {
                var i = new r(n.object, n.property, { min: n.__min, max: n.__max, step: n.__step });
                p.each(["updateDisplay", "onChange", "onFinishChange"], function (e) {
                    var t = n[e],
                        o = i[e];
                    n[e] = i[e] = function () {
                        var e = Array.prototype.slice.call(arguments);
                        return t.apply(n, e), o.apply(i, e);
                    };
                }),
                    _.addClass(t, "has-slider"),
                    n.domElement.insertBefore(i.domElement, n.domElement.firstElementChild);
            } else if (n instanceof r) {
                var o = function (t) {
                    return p.isNumber(n.__min) && p.isNumber(n.__max) ? (n.remove(), E(e, n.object, n.property, { before: n.__li.nextElementSibling, factoryArgs: [n.__min, n.__max, n.__step] })) : t;
                };
                (n.min = p.compose(o, n.min)), (n.max = p.compose(o, n.max));
            } else
                n instanceof a
                    ? (_.bind(t, "click", function () {
                          _.fakeEvent(n.__checkbox, "click");
                      }),
                      _.bind(n.__checkbox, "click", function (e) {
                          e.stopPropagation();
                      }))
                    : n instanceof s
                    ? (_.bind(t, "click", function () {
                          _.fakeEvent(n.__button, "click");
                      }),
                      _.bind(t, "mouseover", function () {
                          _.addClass(n.__button, "hover");
                      }),
                      _.bind(t, "mouseout", function () {
                          _.removeClass(n.__button, "hover");
                      }))
                    : n instanceof d &&
                      (_.addClass(t, "color"),
                      (n.updateDisplay = p.compose(function (e) {
                          return (t.style.borderLeftColor = n.__color.toString()), e;
                      }, n.updateDisplay)),
                      n.updateDisplay());
            n.setValue = p.compose(function (t) {
                return e.getRoot().__preset_select && n.isModified() && x(e.getRoot(), !0), t;
            }, n.setValue);
        }
        function g(e, t) {
            var n = e.getRoot(),
                i = n.__rememberedObjects.indexOf(t.object);
            if (-1 != i) {
                var o = n.__rememberedObjectIndecesToControllers[i];
                if ((void 0 === o && ((o = {}), (n.__rememberedObjectIndecesToControllers[i] = o)), (o[t.property] = t), n.load && n.load.remembered)) {
                    var a,
                        s = n.load.remembered;
                    if (s[e.preset]) a = s[e.preset];
                    else {
                        if (!s[I]) return;
                        a = s[I];
                    }
                    if (a[i] && void 0 !== a[i][t.property]) {
                        var r = a[i][t.property];
                        (t.initialValue = r), t.setValue(r);
                    }
                }
            }
        }
        function T(e, t) {
            return document.location.href + "." + t;
        }
        function A(e) {
            function t() {
                c.style.display = e.useLocalStorage ? "block" : "none";
            }
            var n = (e.__save_row = document.createElement("li"));
            _.addClass(e.domElement, "has-save"), e.__ul.insertBefore(n, e.__ul.firstChild), _.addClass(n, "save-row");
            var i = document.createElement("span");
            (i.innerHTML = "&nbsp;"), _.addClass(i, "button gears");
            var o = document.createElement("span");
            (o.innerHTML = "Save"), _.addClass(o, "button"), _.addClass(o, "save");
            var a = document.createElement("span");
            (a.innerHTML = "New"), _.addClass(a, "button"), _.addClass(a, "save-as");
            var s = document.createElement("span");
            (s.innerHTML = "Revert"), _.addClass(s, "button"), _.addClass(s, "revert");
            var r = (e.__preset_select = document.createElement("select"));
            if (
                (e.load && e.load.remembered
                    ? p.each(e.load.remembered, function (t, n) {
                          y(e, n, n == e.preset);
                      })
                    : y(e, I, !1),
                _.bind(r, "change", function () {
                    for (var t = 0; t < e.__preset_select.length; t++) e.__preset_select[t].innerHTML = e.__preset_select[t].value;
                    e.preset = this.value;
                }),
                n.appendChild(r),
                n.appendChild(i),
                n.appendChild(o),
                n.appendChild(a),
                n.appendChild(s),
                H)
            ) {
                var l = document.getElementById("dg-save-locally"),
                    c = document.getElementById("dg-local-explain");
                l.style.display = "block";
                var d = document.getElementById("dg-local-storage");
                "true" === localStorage.getItem(T(e, "isLocal")) && d.setAttribute("checked", "checked"),
                    t(),
                    _.bind(d, "change", function () {
                        (e.useLocalStorage = !e.useLocalStorage), t();
                    });
            }
            var h = document.getElementById("dg-new-constructor");
            _.bind(h, "keydown", function (e) {
                !e.metaKey || (67 !== e.which && 67 != e.keyCode) || C.hide();
            }),
                _.bind(i, "click", function () {
                    (h.innerHTML = JSON.stringify(e.getSaveObject(), void 0, 2)), C.show(), h.focus(), h.select();
                }),
                _.bind(o, "click", function () {
                    e.save();
                }),
                _.bind(a, "click", function () {
                    var t = prompt("Enter a new preset name.");
                    t && e.saveAs(t);
                }),
                _.bind(s, "click", function () {
                    e.revert();
                });
        }
        function S(e) {
            function t(t) {
                return t.preventDefault(), (o = t.clientX), _.addClass(e.__closeButton, B.CLASS_DRAG), _.bind(window, "mousemove", n), _.bind(window, "mouseup", i), !1;
            }
            function n(t) {
                return t.preventDefault(), (e.width += o - t.clientX), e.onResize(), (o = t.clientX), !1;
            }
            function i() {
                _.removeClass(e.__closeButton, B.CLASS_DRAG), _.unbind(window, "mousemove", n), _.unbind(window, "mouseup", i);
            }
            (e.__resize_handle = document.createElement("div")), p.extend(e.__resize_handle.style, { width: "6px", marginLeft: "-3px", height: "200px", cursor: "ew-resize", position: "absolute" });
            var o;
            _.bind(e.__resize_handle, "mousedown", t), _.bind(e.__closeButton, "mousedown", t), e.domElement.insertBefore(e.__resize_handle, e.domElement.firstElementChild);
        }
        function v(e, t) {
            (e.domElement.style.width = t + "px"), e.__save_row && e.autoPlace && (e.__save_row.style.width = t + "px"), e.__closeButton && (e.__closeButton.style.width = t + "px");
        }
        function b(e, t) {
            var n = {};
            return (
                p.each(e.__rememberedObjects, function (i, o) {
                    var a = {},
                        s = e.__rememberedObjectIndecesToControllers[o];
                    p.each(s, function (e, n) {
                        a[n] = t ? e.initialValue : e.getValue();
                    }),
                        (n[o] = a);
                }),
                n
            );
        }
        function y(e, t, n) {
            var i = document.createElement("option");
            (i.innerHTML = t), (i.value = t), e.__preset_select.appendChild(i), n && (e.__preset_select.selectedIndex = e.__preset_select.length - 1);
        }
        function w(e) {
            for (var t = 0; t < e.__preset_select.length; t++) e.__preset_select[t].value == e.preset && (e.__preset_select.selectedIndex = t);
        }
        function x(e, t) {
            var n = e.__preset_select[e.__preset_select.selectedIndex];
            t ? (n.innerHTML = n.value + "*") : (n.innerHTML = n.value);
        }
        function O(e) {
            0 != e.length &&
                h(function () {
                    O(e);
                }),
                p.each(e, function (e) {
                    e.updateDisplay();
                });
        }
        e.inject(n);
        var C, L, R = "dg", N = 72, M = 20, I = "Default",
            H = (function () {
                try {
                    return "localStorage" in window && null !== window.localStorage;
                } catch (e) {
                    return !1;
                }
            })(),
            P = !0, G = !1, D = [],
            B = function (e) {
                function t() {
                    localStorage.setItem(T(i, "gui"), JSON.stringify(i.getSaveObject()));
                }
                function n() {
                    var e = i.getRoot();
                    (e.width += 1),
                        p.defer(function () {
                            e.width -= 1;
                        });
                }
                var i = this;
                (this.domElement = document.createElement("div")),
                    (this.__ul = document.createElement("ul")),
                    this.domElement.appendChild(this.__ul),
                    _.addClass(this.domElement, R),
                    (this.__folders = {}),
                    (this.__controllers = []),
                    (this.__rememberedObjects = []),
                    (this.__rememberedObjectIndecesToControllers = []),
                    (this.__listening = []),
                    (e = e || {}),
                    (e = p.defaults(e, { autoPlace: !0, width: B.DEFAULT_WIDTH })),
                    (e = p.defaults(e, { resizable: e.autoPlace, hideable: e.autoPlace })),
                    p.isUndefined(e.load) ? (e.load = { preset: I }) : e.preset && (e.load.preset = e.preset),
                    p.isUndefined(e.parent) && e.hideable && D.push(this),
                    (e.resizable = p.isUndefined(e.parent) && e.resizable),
                    e.autoPlace && p.isUndefined(e.scrollable) && (e.scrollable = !0);
                var o = H && "true" === localStorage.getItem(T(this, "isLocal"));
                if (
                    (Object.defineProperties(this, {
                        parent: {
                            get: function () {
                                return e.parent;
                            },
                        },
                        scrollable: {
                            get: function () {
                                return e.scrollable;
                            },
                        },
                        autoPlace: {
                            get: function () {
                                return e.autoPlace;
                            },
                        },
                        preset: {
                            get: function () {
                                return i.parent ? i.getRoot().preset : e.load.preset;
                            },
                            set: function (t) {
                                i.parent ? (i.getRoot().preset = t) : (e.load.preset = t), w(this), i.revert();
                            },
                        },
                        width: {
                            get: function () {
                                return e.width;
                            },
                            set: function (t) {
                                (e.width = t), v(i, t);
                            },
                        },
                        name: {
                            get: function () {
                                return e.name;
                            },
                            set: function (t) {
                                (e.name = t), s && (s.innerHTML = e.name);
                            },
                        },
                        closed: {
                            get: function () {
                                return e.closed;
                            },
                            set: function (t) {
                                (e.closed = t), e.closed ? _.addClass(i.__ul, B.CLASS_CLOSED) : _.removeClass(i.__ul, B.CLASS_CLOSED), this.onResize(), i.__closeButton && (i.__closeButton.innerHTML = t ? B.TEXT_OPEN : B.TEXT_CLOSED);
                            },
                        },
                        load: {
                            get: function () {
                                return e.load;
                            },
                        },
                        useLocalStorage: {
                            get: function () {
                                return o;
                            },
                            set: function (e) {
                                H && ((o = e), e ? _.bind(window, "unload", t) : _.unbind(window, "unload", t), localStorage.setItem(T(i, "isLocal"), e));
                            },
                        },
                    }),
                    p.isUndefined(e.parent))
                ) {
                    if (((e.closed = !1), _.addClass(this.domElement, B.CLASS_MAIN), _.makeSelectable(this.domElement, !1), H && o)) {
                        i.useLocalStorage = !0;
                        var a = localStorage.getItem(T(this, "gui"));
                        a && (e.load = JSON.parse(a));
                    }
                    (this.__closeButton = document.createElement("div")),
                        (this.__closeButton.innerHTML = B.TEXT_CLOSED),
                        _.addClass(this.__closeButton, B.CLASS_CLOSE_BUTTON),
                        this.domElement.appendChild(this.__closeButton),
                        _.bind(this.__closeButton, "click", function () {
                            i.closed = !i.closed;
                        });
                } else {
                    void 0 === e.closed && (e.closed = !0);
                    var s = document.createTextNode(e.name);
                    _.addClass(s, "controller-name");
                    var r = f(i, s),
                        l = function (e) {
                            return e.preventDefault(), (i.closed = !i.closed), !1;
                        };
                    _.addClass(this.__ul, B.CLASS_CLOSED), _.addClass(r, "title"), _.bind(r, "click", l), e.closed || (this.closed = !1);
                }
                e.autoPlace &&
                    (p.isUndefined(e.parent) &&
                        (P && ((L = document.createElement("div")), _.addClass(L, R), _.addClass(L, B.CLASS_AUTO_PLACE_CONTAINER), document.body.appendChild(L), (P = !1)),
                        L.appendChild(this.domElement),
                        _.addClass(this.domElement, B.CLASS_AUTO_PLACE)),
                    this.parent || v(i, e.width)),
                    _.bind(window, "resize", function () {
                        i.onResize();
                    }),
                    _.bind(this.__ul, "webkitTransitionEnd", function () {
                        i.onResize();
                    }),
                    _.bind(this.__ul, "transitionend", function () {
                        i.onResize();
                    }),
                    _.bind(this.__ul, "oTransitionEnd", function () {
                        i.onResize();
                    }),
                    this.onResize(),
                    e.resizable && S(this);
                i.getRoot();
                e.parent || n();
            };
        return (
            (B.toggleHide = function () {
                (G = !G),
                    p.each(D, function (e) {
                        (e.domElement.style.zIndex = G ? -999 : 999), (e.domElement.style.opacity = G ? 0 : 1);
                    });
            }),
            (B.CLASS_AUTO_PLACE = "a"),
            (B.CLASS_AUTO_PLACE_CONTAINER = "ac"),
            (B.CLASS_MAIN = "main"),
            (B.CLASS_CONTROLLER_ROW = "cr"),
            (B.CLASS_TOO_TALL = "taller-than-window"),
            (B.CLASS_CLOSED = "closed"),
            (B.CLASS_CLOSE_BUTTON = "close-button"),
            (B.CLASS_DRAG = "drag"),
            (B.DEFAULT_WIDTH = 245),
            (B.TEXT_CLOSED = "Close Controls"),
            (B.TEXT_OPEN = "Open Controls"),
            _.bind(
                window,
                "keydown",
                function (e) {
                    "text" === document.activeElement.type || (e.which !== N && e.keyCode != N) || B.toggleHide();
                },
                !1
            ),
            p.extend(B.prototype, {
                add: function (e, t) {
                    return E(this, e, t, { factoryArgs: Array.prototype.slice.call(arguments, 2) });
                },
                addColor: function (e, t) {
                    return E(this, e, t, { color: !0 });
                },
                remove: function (e) {
                    this.__ul.removeChild(e.__li), this.__controllers.slice(this.__controllers.indexOf(e), 1);
                    var t = this;
                    p.defer(function () {
                        t.onResize();
                    });
                },
                destroy: function () {
                    this.autoPlace && L.removeChild(this.domElement);
                },
                addFolder: function (e) {
                    if (void 0 !== this.__folders[e]) throw new Error('You already have a folder in this GUI by the name "' + e + '"');
                    var t = { name: e, parent: this };
                    (t.autoPlace = this.autoPlace), this.load && this.load.folders && this.load.folders[e] && ((t.closed = this.load.folders[e].closed), (t.load = this.load.folders[e]));
                    var n = new B(t);
                    this.__folders[e] = n;
                    var i = f(this, n.domElement);
                    return _.addClass(i, "folder"), n;
                },
                open: function () {
                    this.closed = !1;
                },
                close: function () {
                    this.closed = !0;
                },
                onResize: function () {
                    var e = this.getRoot();
                    if (e.scrollable) {
                        var t = _.getOffset(e.__ul).top,
                            n = 0;
                        p.each(e.__ul.childNodes, function (t) {
                            (e.autoPlace && t === e.__save_row) || (n += _.getHeight(t));
                        }),
                            window.innerHeight - t - M < n
                                ? (_.addClass(e.domElement, B.CLASS_TOO_TALL), (e.__ul.style.height = window.innerHeight - t - M + "px"))
                                : (_.removeClass(e.domElement, B.CLASS_TOO_TALL), (e.__ul.style.height = "auto"));
                    }
                    e.__resize_handle &&
                        p.defer(function () {
                            e.__resize_handle.style.height = e.__ul.offsetHeight + "px";
                        }),
                        e.__closeButton && (e.__closeButton.style.width = e.width + "px");
                },
                remember: function () {
                    if ((p.isUndefined(C) && ((C = new u()), (C.domElement.innerHTML = t)), this.parent)) throw new Error("You can only call remember on a top level GUI.");
                    var e = this;
                    p.each(Array.prototype.slice.call(arguments), function (t) {
                        0 == e.__rememberedObjects.length && A(e), -1 == e.__rememberedObjects.indexOf(t) && e.__rememberedObjects.push(t);
                    }),
                        this.autoPlace && v(this, this.width);
                },
                getRoot: function () {
                    for (var e = this; e.parent; ) e = e.parent;
                    return e;
                },
                getSaveObject: function () {
                    var e = this.load;
                    return (
                        (e.closed = this.closed),
                        this.__rememberedObjects.length > 0 && ((e.preset = this.preset), e.remembered || (e.remembered = {}), (e.remembered[this.preset] = b(this))),
                        (e.folders = {}),
                        p.each(this.__folders, function (t, n) {
                            e.folders[n] = t.getSaveObject();
                        }),
                        e
                    );
                },
                save: function () {
                    this.load.remembered || (this.load.remembered = {}), (this.load.remembered[this.preset] = b(this)), x(this, !1);
                },
                saveAs: function (e) {
                    this.load.remembered || ((this.load.remembered = {}), (this.load.remembered[I] = b(this, !0))), (this.load.remembered[e] = b(this)), (this.preset = e), y(this, e, !0);
                },
                revert: function (e) {
                    p.each(
                        this.__controllers,
                        function (t) {
                            this.getRoot().load.remembered ? g(e || this.getRoot(), t) : t.setValue(t.initialValue);
                        },
                        this
                    ),
                        p.each(this.__folders, function (e) {
                            e.revert(e);
                        }),
                        e || x(this.getRoot(), !1);
                },
                listen: function (e) {
                    var t = 0 == this.__listening.length;
                    this.__listening.push(e), t && O(this.__listening);
                },
            }),
            B
        );
    })(
        dat.utils.css,
        '<div id="dg-save" class="dg dialogue">\n\n  Here\'s the new load parameter for your <code>GUI</code>\'s constructor:\n\n  <textarea id="dg-new-constructor"></textarea>\n\n  <div id="dg-save-locally">\n\n    <input id="dg-local-storage" type="checkbox"/> Automatically save\n    values to <code>localStorage</code> on exit.\n\n    <div id="dg-local-explain">The values saved to <code>localStorage</code> will\n      override those passed to <code>dat.GUI</code>\'s constructor. This makes it\n      easier to work incrementally, but <code>localStorage</code> is fragile,\n      and your friends may not see the same values you do.\n      \n    </div>\n    \n  </div>\n\n</div>',
        ".dg ul{list-style:none;margin:0;padding:0;width:100%;clear:both}.dg.ac{position:fixed;top:0;left:0;right:0;height:0;z-index:0}.dg:not(.ac) .main{overflow:hidden}.dg.main{-webkit-transition:opacity 0.1s linear;-o-transition:opacity 0.1s linear;-moz-transition:opacity 0.1s linear;transition:opacity 0.1s linear}.dg.main.taller-than-window{overflow-y:auto}.dg.main.taller-than-window .close-button{opacity:1;margin-top:-1px;border-top:1px solid #2c2c2c}.dg.main ul.closed .close-button{opacity:1 !important}.dg.main:hover .close-button,.dg.main .close-button.drag{opacity:1}.dg.main .close-button{-webkit-transition:opacity 0.1s linear;-o-transition:opacity 0.1s linear;-moz-transition:opacity 0.1s linear;transition:opacity 0.1s linear;border:0;position:absolute;line-height:19px;height:20px;cursor:pointer;text-align:center;background-color:#000}.dg.main .close-button:hover{background-color:#111}.dg.a{float:right;margin-right:15px;overflow-x:hidden}.dg.a.has-save ul{margin-top:27px}.dg.a.has-save ul.closed{margin-top:0}.dg.a .save-row{position:fixed;top:0;z-index:1002}.dg li{-webkit-transition:height 0.1s ease-out;-o-transition:height 0.1s ease-out;-moz-transition:height 0.1s ease-out;transition:height 0.1s ease-out}.dg li:not(.folder){cursor:auto;height:27px;line-height:27px;overflow:hidden;padding:0 4px 0 5px}.dg li.folder{padding:0;border-left:4px solid rgba(0,0,0,0)}.dg li.title{cursor:pointer;margin-left:-4px}.dg .closed li:not(.title),.dg .closed ul li,.dg .closed ul li > *{height:0;overflow:hidden;border:0}.dg .cr{clear:both;padding-left:3px;height:27px}.dg .property-name{cursor:default;float:left;clear:left;width:40%;overflow:hidden;text-overflow:ellipsis}.dg .c{float:left;width:60%}.dg .c input[type=text]{border:0;margin-top:4px;padding:3px;width:100%;float:right}.dg .has-slider input[type=text]{width:30%;margin-left:0}.dg .slider{float:left;width:66%;margin-left:-5px;margin-right:0;height:19px;margin-top:4px}.dg .slider-fg{height:100%}.dg .c input[type=checkbox]{margin-top:9px}.dg .c select{margin-top:5px}.dg .cr.function,.dg .cr.function .property-name,.dg .cr.function *,.dg .cr.boolean,.dg .cr.boolean *{cursor:pointer}.dg .selector{display:none;position:absolute;margin-left:-9px;margin-top:23px;z-index:10}.dg .c:hover .selector,.dg .selector.drag{display:block}.dg li.save-row{padding:0}.dg li.save-row .button{display:inline-block;padding:0px 6px}.dg.dialogue{background-color:#222;width:460px;padding:15px;font-size:13px;line-height:15px}#dg-new-constructor{padding:10px;color:#222;font-family:Monaco, monospace;font-size:10px;border:0;resize:none;box-shadow:inset 1px 1px 1px #888;word-wrap:break-word;margin:12px 0;display:block;width:440px;overflow-y:scroll;height:100px;position:relative}#dg-local-explain{display:none;font-size:11px;line-height:17px;border-radius:3px;background-color:#333;padding:8px;margin-top:10px}#dg-local-explain code{font-size:10px}#dat-gui-save-locally{display:none}.dg{color:#eee;font:11px 'Lucida Grande', sans-serif;text-shadow:0 -1px 0 #111}.dg.main::-webkit-scrollbar{width:5px;background:#1a1a1a}.dg.main::-webkit-scrollbar-corner{height:0;display:none}.dg.main::-webkit-scrollbar-thumb{border-radius:5px;background:#676767}.dg li:not(.folder){background:#1a1a1a;border-bottom:1px solid #2c2c2c}.dg li.save-row{line-height:25px;background:#dad5cb;border:0}.dg li.save-row select{margin-left:5px;width:108px}.dg li.save-row .button{margin-left:5px;margin-top:1px;border-radius:2px;font-size:9px;line-height:7px;padding:4px 4px 5px 4px;background:#c5bdad;color:#fff;text-shadow:0 1px 0 #b0a58f;box-shadow:0 -1px 0 #b0a58f;cursor:pointer}.dg li.save-row .button.gears{background:#c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;height:7px;width:8px}.dg li.save-row .button:hover{background-color:#bab19e;box-shadow:0 -1px 0 #b0a58f}.dg li.folder{border-bottom:0}.dg li.title{padding-left:16px;background:#000 url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;cursor:pointer;border-bottom:1px solid rgba(255,255,255,0.2)}.dg .closed li.title{background-image:url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==)}.dg .cr.boolean{border-left:3px solid #806787}.dg .cr.function{border-left:3px solid #e61d5f}.dg .cr.number{border-left:3px solid #2fa1d6}.dg .cr.number input[type=text]{color:#2fa1d6}.dg .cr.string{border-left:3px solid #1ed36f}.dg .cr.string input[type=text]{color:#1ed36f}.dg .cr.function:hover,.dg .cr.boolean:hover{background:#111}.dg .c input[type=text]{background:#303030;outline:none}.dg .c input[type=text]:hover{background:#3c3c3c}.dg .c input[type=text]:focus{background:#494949;color:#fff}.dg .c .slider{background:#303030;cursor:ew-resize}.dg .c .slider-fg{background:#2fa1d6}.dg .c .slider:hover{background:#3c3c3c}.dg .c .slider:hover .slider-fg{background:#44abda}\n",
        (dat.controllers.factory = (function (e, t, n, i, o, a, s) {
            return function (r, l) {
                var c = r[l];
                return s.isArray(arguments[2]) || s.isObject(arguments[2])
                    ? new e(r, l, arguments[2])
                    : s.isNumber(c)
                    ? s.isNumber(arguments[2]) && s.isNumber(arguments[3])
                        ? new n(r, l, arguments[2], arguments[3])
                        : new t(r, l, { min: arguments[2], max: arguments[3] })
                    : s.isString(c)
                    ? new i(r, l)
                    : s.isFunction(c)
                    ? new o(r, l, "")
                    : s.isBoolean(c)
                    ? new a(r, l)
                    : void 0;
            };
        })(
            dat.controllers.OptionController,
            dat.controllers.NumberControllerBox,
            dat.controllers.NumberControllerSlider,
            (dat.controllers.StringController = (function (e, t, n) {
                var i = function (e, n) {
                    function o() {
                        s.setValue(s.__input.value);
                    }
                    function a() {
                        s.__onFinishChange && s.__onFinishChange.call(s, s.getValue());
                    }
                    i.superclass.call(this, e, n);
                    var s = this;
                    (this.__input = document.createElement("input")),
                        this.__input.setAttribute("type", "text"),
                        t.bind(this.__input, "keyup", o),
                        t.bind(this.__input, "change", o),
                        t.bind(this.__input, "blur", a),
                        t.bind(this.__input, "keydown", function (e) {
                            13 === e.keyCode && this.blur();
                        }),
                        this.updateDisplay(),
                        this.domElement.appendChild(this.__input);
                };
                return (
                    (i.superclass = e),
                    n.extend(i.prototype, e.prototype, {
                        updateDisplay: function () {
                            return t.isActive(this.__input) || (this.__input.value = this.getValue()), i.superclass.prototype.updateDisplay.call(this);
                        },
                    }),
                    i
                );
            })(dat.controllers.Controller, dat.dom.dom, dat.utils.common)),
            dat.controllers.FunctionController,
            dat.controllers.BooleanController,
            dat.utils.common
        )),
        dat.controllers.Controller,
        dat.controllers.BooleanController,
        dat.controllers.FunctionController,
        dat.controllers.NumberControllerBox,
        dat.controllers.NumberControllerSlider,
        dat.controllers.OptionController,
        (dat.controllers.ColorController = (function (e, t, n, i, o) {
            function a(e, t, n, i) {
                (e.style.background = ""),
                    o.each(l, function (o) {
                        e.style.cssText += "background: " + o + "linear-gradient(" + t + ", " + n + " 0%, " + i + " 100%); ";
                    });
            }
            function s(e) {
                (e.style.background = ""),
                    (e.style.cssText += "background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);"),
                    (e.style.cssText += "background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);"),
                    (e.style.cssText += "background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);"),
                    (e.style.cssText += "background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);"),
                    (e.style.cssText += "background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);");
            }
            var r = function (e, l) {
                function c(e) {
                    _(e), t.bind(window, "mousemove", _), t.bind(window, "mouseup", d);
                }
                function d() {
                    t.unbind(window, "mousemove", _), t.unbind(window, "mouseup", d);
                }
                function h() {
                    var e = i(this.value);
                    e !== !1 ? ((E.__color.__state = e), E.setValue(E.__color.toOriginal())) : (this.value = E.__color.toString());
                }
                function u() {
                    t.unbind(window, "mousemove", p), t.unbind(window, "mouseup", u);
                }
                function _(e) {
                    e.preventDefault();
                    var n = t.getWidth(E.__saturation_field),
                        i = t.getOffset(E.__saturation_field),
                        o = (e.clientX - i.left + document.body.scrollLeft) / n,
                        a = 1 - (e.clientY - i.top + document.body.scrollTop) / n;
                    return a > 1 ? (a = 1) : 0 > a && (a = 0), o > 1 ? (o = 1) : 0 > o && (o = 0), (E.__color.v = a), (E.__color.s = o), E.setValue(E.__color.toOriginal()), !1;
                }
                function p(e) {
                    e.preventDefault();
                    var n = t.getHeight(E.__hue_field),
                        i = t.getOffset(E.__hue_field),
                        o = 1 - (e.clientY - i.top + document.body.scrollTop) / n;
                    return o > 1 ? (o = 1) : 0 > o && (o = 0), (E.__color.h = 360 * o), E.setValue(E.__color.toOriginal()), !1;
                }
                r.superclass.call(this, e, l), (this.__color = new n(this.getValue())), (this.__temp = new n(0));
                var E = this;
                (this.domElement = document.createElement("div")),
                    t.makeSelectable(this.domElement, !1),
                    (this.__selector = document.createElement("div")),
                    (this.__selector.className = "selector"),
                    (this.__saturation_field = document.createElement("div")),
                    (this.__saturation_field.className = "saturation-field"),
                    (this.__field_knob = document.createElement("div")),
                    (this.__field_knob.className = "field-knob"),
                    (this.__field_knob_border = "2px solid "),
                    (this.__hue_knob = document.createElement("div")),
                    (this.__hue_knob.className = "hue-knob"),
                    (this.__hue_field = document.createElement("div")),
                    (this.__hue_field.className = "hue-field"),
                    (this.__input = document.createElement("input")),
                    (this.__input.type = "text"),
                    (this.__input_textShadow = "0 1px 1px "),
                    t.bind(this.__input, "keydown", function (e) {
                        13 === e.keyCode && h.call(this);
                    }),
                    t.bind(this.__input, "blur", h),
                    t.bind(this.__selector, "mousedown", function (e) {
                        t.addClass(this, "drag").bind(window, "mouseup", function (e) {
                            t.removeClass(E.__selector, "drag");
                        });
                    });
                var f = document.createElement("div");
                o.extend(this.__selector.style, { width: "122px", height: "102px", padding: "3px", backgroundColor: "#222", boxShadow: "0px 1px 3px rgba(0,0,0,0.3)" }),
                    o.extend(this.__field_knob.style, {
                        position: "absolute",
                        width: "12px",
                        height: "12px",
                        border: this.__field_knob_border + (this.__color.v < 0.5 ? "#fff" : "#000"),
                        boxShadow: "0px 1px 3px rgba(0,0,0,0.5)",
                        borderRadius: "12px",
                        zIndex: 1,
                    }),
                    o.extend(this.__hue_knob.style, { position: "absolute", width: "15px", height: "2px", borderRight: "4px solid #fff", zIndex: 1 }),
                    o.extend(this.__saturation_field.style, { width: "100px", height: "100px", border: "1px solid #555", marginRight: "3px", display: "inline-block", cursor: "pointer" }),
                    o.extend(f.style, { width: "100%", height: "100%", background: "none" }),
                    a(f, "top", "rgba(0,0,0,0)", "#000"),
                    o.extend(this.__hue_field.style, { width: "15px", height: "100px", display: "inline-block", border: "1px solid #555", cursor: "ns-resize" }),
                    s(this.__hue_field),
                    o.extend(this.__input.style, { outline: "none", textAlign: "center", color: "#fff", border: 0, fontWeight: "bold", textShadow: this.__input_textShadow + "rgba(0,0,0,0.7)" }),
                    t.bind(this.__saturation_field, "mousedown", c),
                    t.bind(this.__field_knob, "mousedown", c),
                    t.bind(this.__hue_field, "mousedown", function (e) {
                        p(e), t.bind(window, "mousemove", p), t.bind(window, "mouseup", u);
                    }),
                    this.__saturation_field.appendChild(f),
                    this.__selector.appendChild(this.__field_knob),
                    this.__selector.appendChild(this.__saturation_field),
                    this.__selector.appendChild(this.__hue_field),
                    this.__hue_field.appendChild(this.__hue_knob),
                    this.domElement.appendChild(this.__input),
                    this.domElement.appendChild(this.__selector),
                    this.updateDisplay();
            };
            (r.superclass = e),
                o.extend(r.prototype, e.prototype, {
                    updateDisplay: function () {
                        var e = i(this.getValue());
                        if (e !== !1) {
                            var t = !1;
                            o.each(
                                n.COMPONENTS,
                                function (n) {
                                    return o.isUndefined(e[n]) || o.isUndefined(this.__color.__state[n]) || e[n] === this.__color.__state[n] ? void 0 : ((t = !0), {});
                                },
                                this
                            ),
                                t && o.extend(this.__color.__state, e);
                        }
                        o.extend(this.__temp.__state, this.__color.__state), (this.__temp.a = 1);
                        var s = this.__color.v < 0.5 || this.__color.s > 0.5 ? 255 : 0,
                            r = 255 - s;
                        o.extend(this.__field_knob.style, {
                            marginLeft: 100 * this.__color.s - 7 + "px",
                            marginTop: 100 * (1 - this.__color.v) - 7 + "px",
                            backgroundColor: this.__temp.toString(),
                            border: this.__field_knob_border + "rgb(" + s + "," + s + "," + s + ")",
                        }),
                            (this.__hue_knob.style.marginTop = 100 * (1 - this.__color.h / 360) + "px"),
                            (this.__temp.s = 1),
                            (this.__temp.v = 1),
                            a(this.__saturation_field, "left", "#fff", this.__temp.toString()),
                            o.extend(this.__input.style, {
                                backgroundColor: (this.__input.value = this.__color.toString()),
                                color: "rgb(" + s + "," + s + "," + s + ")",
                                textShadow: this.__input_textShadow + "rgba(" + r + "," + r + "," + r + ",.7)",
                            });
                    },
                });
            var l = ["-moz-", "-o-", "-webkit-", "-ms-", ""];
            return r;
        })(
            dat.controllers.Controller,
            dat.dom.dom,
            (dat.color.Color = (function (e, t, n, i) {
                function o(e, t, n) {
                    Object.defineProperty(e, t, {
                        get: function () {
                            return "RGB" === this.__state.space ? this.__state[t] : (s(this, t, n), this.__state[t]);
                        },
                        set: function (e) {
                            "RGB" !== this.__state.space && (s(this, t, n), (this.__state.space = "RGB")), (this.__state[t] = e);
                        },
                    });
                }
                function a(e, t) {
                    Object.defineProperty(e, t, {
                        get: function () {
                            return "HSV" === this.__state.space ? this.__state[t] : (r(this), this.__state[t]);
                        },
                        set: function (e) {
                            "HSV" !== this.__state.space && (r(this), (this.__state.space = "HSV")), (this.__state[t] = e);
                        },
                    });
                }
                function s(e, n, o) {
                    if ("HEX" === e.__state.space) e.__state[n] = t.component_from_hex(e.__state.hex, o);
                    else {
                        if ("HSV" !== e.__state.space) throw "Corrupted color state";
                        i.extend(e.__state, t.hsv_to_rgb(e.__state.h, e.__state.s, e.__state.v));
                    }
                }
                function r(e) {
                    var n = t.rgb_to_hsv(e.r, e.g, e.b);
                    i.extend(e.__state, { s: n.s, v: n.v }), i.isNaN(n.h) ? i.isUndefined(e.__state.h) && (e.__state.h = 0) : (e.__state.h = n.h);
                }
                var l = function () {
                    if (((this.__state = e.apply(this, arguments)), this.__state === !1)) throw "Failed to interpret color arguments";
                    this.__state.a = this.__state.a || 1;
                };
                return (
                    (l.COMPONENTS = ["r", "g", "b", "h", "s", "v", "hex", "a"]),
                    i.extend(l.prototype, {
                        toString: function () {
                            return n(this);
                        },
                        toOriginal: function () {
                            return this.__state.conversion.write(this);
                        },
                    }),
                    o(l.prototype, "r", 2),
                    o(l.prototype, "g", 1),
                    o(l.prototype, "b", 0),
                    a(l.prototype, "h"),
                    a(l.prototype, "s"),
                    a(l.prototype, "v"),
                    Object.defineProperty(l.prototype, "a", {
                        get: function () {
                            return this.__state.a;
                        },
                        set: function (e) {
                            this.__state.a = e;
                        },
                    }),
                    Object.defineProperty(l.prototype, "hex", {
                        get: function () {
                            return "HEX" !== !this.__state.space && (this.__state.hex = t.rgb_to_hex(this.r, this.g, this.b)), this.__state.hex;
                        },
                        set: function (e) {
                            (this.__state.space = "HEX"), (this.__state.hex = e);
                        },
                    }),
                    l
                );
            })(
                dat.color.interpret,
                (dat.color.math = (function () {
                    var e;
                    return {
                        hsv_to_rgb: function (e, t, n) {
                            var i = Math.floor(e / 60) % 6,
                                o = e / 60 - Math.floor(e / 60),
                                a = n * (1 - t),
                                s = n * (1 - o * t),
                                r = n * (1 - (1 - o) * t),
                                l = [
                                    [n, r, a],
                                    [s, n, a],
                                    [a, n, r],
                                    [a, s, n],
                                    [r, a, n],
                                    [n, a, s],
                                ][i];
                            return { r: 255 * l[0], g: 255 * l[1], b: 255 * l[2] };
                        },
                        rgb_to_hsv: function (e, t, n) {
                            var i, o, a = Math.min(e, t, n),
                                s = Math.max(e, t, n),
                                r = s - a;
                            return 0 == s ? { h: NaN, s: 0, v: 0 } : ((o = r / s), (i = e == s ? (t - n) / r : t == s ? 2 + (n - e) / r : 4 + (e - t) / r), (i /= 6), 0 > i && (i += 1), { h: 360 * i, s: o, v: s / 255 });
                        },
                        rgb_to_hex: function (e, t, n) {
                            var i = this.hex_with_component(0, 2, e);
                            return (i = this.hex_with_component(i, 1, t)), (i = this.hex_with_component(i, 0, n));
                        },
                        component_from_hex: function (e, t) {
                            return (e >> (8 * t)) & 255;
                        },
                        hex_with_component: function (t, n, i) {
                            return (i << (e = 8 * n)) | (t & ~(255 << e));
                        },
                    };
                })()),
                dat.color.toString,
                dat.utils.common
            )),
            dat.color.interpret,
            dat.utils.common
        )),
        (dat.utils.requestAnimationFrame = (function () {
            return (
                window.webkitRequestAnimationFrame ||
                window.mozRequestAnimationFrame ||
                window.oRequestAnimationFrame ||
                window.msRequestAnimationFrame ||
                function (e, t) {
                    window.setTimeout(e, 1e3 / 60);
                }
            );
        })()),
        (dat.dom.CenteredDiv = (function (e, t) {
            var n = function () {
                (this.backgroundElement = document.createElement("div")),
                    t.extend(this.backgroundElement.style, { backgroundColor: "rgba(0,0,0,0.8)", top: 0, left: 0, display: "none", zIndex: "1000", opacity: 0, WebkitTransition: "opacity 0.2s linear" }),
                    e.makeFullscreen(this.backgroundElement),
                    (this.backgroundElement.style.position = "fixed"),
                    (this.domElement = document.createElement("div")),
                    t.extend(this.domElement.style, { position: "fixed", display: "none", zIndex: "1001", opacity: 0, WebkitTransition: "-webkit-transform 0.2s ease-out, opacity 0.2s linear" }),
                    document.body.appendChild(this.backgroundElement),
                    document.body.appendChild(this.domElement);
                var n = this;
                e.bind(this.backgroundElement, "click", function () {
                    n.hide();
                });
            };
            return (
                (n.prototype.show = function () {
                    var e = this;
                    (this.backgroundElement.style.display = "block"),
                        (this.domElement.style.display = "block"),
                        (this.domElement.style.opacity = 0),
                        (this.domElement.style.webkitTransform = "scale(1.1)"),
                        this.layout(),
                        t.defer(function () {
                            (e.backgroundElement.style.opacity = 1), (e.domElement.style.opacity = 1), (e.domElement.style.webkitTransform = "scale(1)");
                        });
                }),
                (n.prototype.hide = function () {
                    var t = this,
                        n = function () {
                            (t.domElement.style.display = "none"),
                                (t.backgroundElement.style.display = "none"),
                                e.unbind(t.domElement, "webkitTransitionEnd", n),
                                e.unbind(t.domElement, "transitionend", n),
                                e.unbind(t.domElement, "oTransitionEnd", n);
                        };
                    e.bind(this.domElement, "webkitTransitionEnd", n),
                        e.bind(this.domElement, "transitionend", n),
                        e.bind(this.domElement, "oTransitionEnd", n),
                        (this.backgroundElement.style.opacity = 0),
                        (this.domElement.style.opacity = 0),
                        (this.domElement.style.webkitTransform = "scale(1.1)");
                }),
                (n.prototype.layout = function () {
                    (this.domElement.style.left = window.innerWidth / 2 - e.getWidth(this.domElement) / 2 + "px"), (this.domElement.style.top = window.innerHeight / 2 - e.getHeight(this.domElement) / 2 + "px");
                }),
                n
            );
        })(dat.dom.dom, dat.utils.common)),
        dat.dom.dom,
        dat.utils.common
    ));
var _0x3619 = [
    "_init",
    "addChild",
    "msg_box",
    "getSprite",
    "drawRect",
    "#000",
    "beginFill",
    "graphics",
    "alpha",
    "click",
    "on",
    "cursor",
    "pointer",
    "x",
    "y",
    "regX",
    "width",
    "regY",
    "height",
    "#0f0f0f",
    "secret",
    "but_exit",
    "unload",
    "addEventListener",
    "DEVELOPED BY",
    " 50px ",
    "#ffffff",
    "textAlign",
    "center",
    "textBaseline",
    "middle",
    "logo_ctl",
    "WWW.GOOGLE.COM",
    "50px ",
    "DEVELOPER",
    "40px ",
    "alphabetic",
    "lineWidth",
    "outline",
    "getBounds",
    "removeChild",
    "call",
    "cubicOut",
    "Ease",
    "to",
    "wait",
    "bounceOut",
    "get",
    "Tween",
    "off",
    "removeAllEventListeners",
    "_onLogoButRelease",
    "http://www.google.com/",
    "_blank",
    "open",
];
!(function () {
    "use strict";
    var e = function (e) {
        THREE.MeshBasicMaterial.call(this),
            (this.depthTest = !1),
            (this.depthWrite = !1),
            (this.side = THREE.FrontSide),
            (this.transparent = !0),
            this.setValues(e),
            (this.oldColor = this.color.clone()),
            (this.oldOpacity = this.opacity),
            (this.highlight = function (e) {
                e ? (this.color.setRGB(1, 1, 0), (this.opacity = 1)) : (this.color.copy(this.oldColor), (this.opacity = this.oldOpacity));
            });
    };
    (e.prototype = Object.create(THREE.MeshBasicMaterial.prototype)), (e.prototype.constructor = e);
    var t = function (e) {
        THREE.LineBasicMaterial.call(this),
            (this.depthTest = !1),
            (this.depthWrite = !1),
            (this.transparent = !0),
            (this.linewidth = 1),
            this.setValues(e),
            (this.oldColor = this.color.clone()),
            (this.oldOpacity = this.opacity),
            (this.highlight = function (e) {
                e ? (this.color.setRGB(1, 1, 0), (this.opacity = 1)) : (this.color.copy(this.oldColor), (this.opacity = this.oldOpacity));
            });
    };
    (t.prototype = Object.create(THREE.LineBasicMaterial.prototype)), (t.prototype.constructor = t);
    var n = new e({ visible: !1, transparent: !1 });
    (THREE.TransformGizmo = function () {
        (this.init = function () {
            THREE.Object3D.call(this), (this.handles = new THREE.Object3D()), (this.pickers = new THREE.Object3D()), (this.planes = new THREE.Object3D()), this.add(this.handles), this.add(this.pickers), this.add(this.planes);
            var e = new THREE.PlaneBufferGeometry(50, 50, 2, 2),
                t = new THREE.MeshBasicMaterial({ visible: !1, side: THREE.DoubleSide }),
                n = { XY: new THREE.Mesh(e, t), YZ: new THREE.Mesh(e, t), XZ: new THREE.Mesh(e, t), XYZE: new THREE.Mesh(e, t) };
            (this.activePlane = n.XYZE), n.YZ.rotation.set(0, Math.PI / 2, 0), n.XZ.rotation.set(-Math.PI / 2, 0, 0);
            for (var i in n) (n[i].name = i), this.planes.add(n[i]), (this.planes[i] = n[i]);
            var o = function (e, t) {
                for (var n in e)
                    for (i = e[n].length; i--; ) {
                        var o = e[n][i][0],
                            a = e[n][i][1],
                            s = e[n][i][2];
                        (o.name = n), a && o.position.set(a[0], a[1], a[2]), s && o.rotation.set(s[0], s[1], s[2]), t.add(o);
                    }
            };
            o(this.handleGizmos, this.handles),
                o(this.pickerGizmos, this.pickers),
                this.traverse(function (e) {
                    if (e instanceof THREE.Mesh) {
                        e.updateMatrix();
                        var t = e.geometry.clone();
                        t.applyMatrix(e.matrix), (e.geometry = t), e.position.set(0, 0, 0), e.rotation.set(0, 0, 0), e.scale.set(1, 1, 1);
                    }
                });
        }),
            (this.highlight = function (e) {
                this.traverse(function (t) {
                    t.material && t.material.highlight && (t.name === e ? t.material.highlight(!0) : t.material.highlight(!1));
                });
            });
    }),
        (THREE.TransformGizmo.prototype = Object.create(THREE.Object3D.prototype)),
        (THREE.TransformGizmo.prototype.constructor = THREE.TransformGizmo),
        (THREE.TransformGizmo.prototype.update = function (e, t) {
            var n = new THREE.Vector3(0, 0, 0),
                i = new THREE.Vector3(0, 1, 0),
                o = new THREE.Matrix4();
            this.traverse(function (a) {
                -1 !== a.name.search("E") ? a.quaternion.setFromRotationMatrix(o.lookAt(t, n, i)) : (-1 === a.name.search("X") && -1 === a.name.search("Y") && -1 === a.name.search("Z")) || a.quaternion.setFromEuler(e);
            });
        }),
        (THREE.TransformGizmoTranslate = function () {
            THREE.TransformGizmo.call(this);
            var i = new THREE.Geometry(),
                o = new THREE.Mesh(new THREE.CylinderGeometry(0, 0.05, 0.2, 12, 1, !1));
            (o.position.y = 0.5), o.updateMatrix(), i.merge(o.geometry, o.matrix);
            var a = new THREE.BufferGeometry();
            a.addAttribute("position", new THREE.Float32Attribute([0, 0, 0, 1, 0, 0], 3));
            var s = new THREE.BufferGeometry();
            s.addAttribute("position", new THREE.Float32Attribute([0, 0, 0, 0, 1, 0], 3));
            var r = new THREE.BufferGeometry();
            r.addAttribute("position", new THREE.Float32Attribute([0, 0, 0, 0, 0, 1], 3)),
                (this.handleGizmos = {
                    X: [[new THREE.Mesh(i, new e({ color: 16711680 })), [0.5, 0, 0], [0, 0, -Math.PI / 2]], [new THREE.Line(a, new t({ color: 16711680 }))]],
                    Y: [[new THREE.Mesh(i, new e({ color: 65280 })), [0, 0.5, 0]], [new THREE.Line(s, new t({ color: 65280 }))]],
                    Z: [[new THREE.Mesh(i, new e({ color: 255 })), [0, 0, 0.5], [Math.PI / 2, 0, 0]], [new THREE.Line(r, new t({ color: 255 }))]],
                    XYZ: [[new THREE.Mesh(new THREE.OctahedronGeometry(0.1, 0), new e({ color: 16777215, opacity: 0.25 })), [0, 0, 0], [0, 0, 0]]],
                    XY: [[new THREE.Mesh(new THREE.PlaneBufferGeometry(0.29, 0.29), new e({ color: 16776960, opacity: 0.25 })), [0.15, 0.15, 0]]],
                    YZ: [[new THREE.Mesh(new THREE.PlaneBufferGeometry(0.29, 0.29), new e({ color: 65535, opacity: 0.25 })), [0, 0.15, 0.15], [0, Math.PI / 2, 0]]],
                    XZ: [[new THREE.Mesh(new THREE.PlaneBufferGeometry(0.29, 0.29), new e({ color: 16711935, opacity: 0.25 })), [0.15, 0, 0.15], [-Math.PI / 2, 0, 0]]],
                }),
                (this.pickerGizmos = {
                    X: [[new THREE.Mesh(new THREE.CylinderBufferGeometry(0.2, 0, 1, 4, 1, !1), n), [0.6, 0, 0], [0, 0, -Math.PI / 2]]],
                    Y: [[new THREE.Mesh(new THREE.CylinderBufferGeometry(0.2, 0, 1, 4, 1, !1), n), [0, 0.6, 0]]],
                    Z: [[new THREE.Mesh(new THREE.CylinderBufferGeometry(0.2, 0, 1, 4, 1, !1), n), [0, 0, 0.6], [Math.PI / 2, 0, 0]]],
                    XYZ: [[new THREE.Mesh(new THREE.OctahedronGeometry(0.2, 0), n)]],
                    XY: [[new THREE.Mesh(new THREE.PlaneBufferGeometry(0.4, 0.4), n), [0.2, 0.2, 0]]],
                    YZ: [[new THREE.Mesh(new THREE.PlaneBufferGeometry(0.4, 0.4), n), [0, 0.2, 0.2], [0, Math.PI / 2, 0]]],
                    XZ: [[new THREE.Mesh(new THREE.PlaneBufferGeometry(0.4, 0.4), n), [0.2, 0, 0.2], [-Math.PI / 2, 0, 0]]],
                }),
                (this.setActivePlane = function (e, t) {
                    var n = new THREE.Matrix4();
                    t.applyMatrix4(n.getInverse(n.extractRotation(this.planes.XY.matrixWorld))),
                        "X" === e && ((this.activePlane = this.planes.XY), Math.abs(t.y) > Math.abs(t.z) && (this.activePlane = this.planes.XZ)),
                        "Y" === e && ((this.activePlane = this.planes.XY), Math.abs(t.x) > Math.abs(t.z) && (this.activePlane = this.planes.YZ)),
                        "Z" === e && ((this.activePlane = this.planes.XZ), Math.abs(t.x) > Math.abs(t.y) && (this.activePlane = this.planes.YZ)),
                        "XYZ" === e && (this.activePlane = this.planes.XYZE),
                        "XY" === e && (this.activePlane = this.planes.XY),
                        "YZ" === e && (this.activePlane = this.planes.YZ),
                        "XZ" === e && (this.activePlane = this.planes.XZ);
                }),
                this.init();
        }),
        (THREE.TransformGizmoTranslate.prototype = Object.create(THREE.TransformGizmo.prototype)),
        (THREE.TransformGizmoTranslate.prototype.constructor = THREE.TransformGizmoTranslate),
        (THREE.TransformGizmoRotate = function () {
            THREE.TransformGizmo.call(this);
            var e = function (e, t, n) {
                var i = new THREE.BufferGeometry(),
                    o = [];
                n = n ? n : 1;
                for (var a = 0; 64 * n >= a; ++a)
                    "x" === t && o.push(0, Math.cos((a / 32) * Math.PI) * e, Math.sin((a / 32) * Math.PI) * e),
                        "y" === t && o.push(Math.cos((a / 32) * Math.PI) * e, 0, Math.sin((a / 32) * Math.PI) * e),
                        "z" === t && o.push(Math.sin((a / 32) * Math.PI) * e, Math.cos((a / 32) * Math.PI) * e, 0);
                return i.addAttribute("position", new THREE.Float32Attribute(o, 3)), i;
            };
            (this.handleGizmos = {
                X: [[new THREE.Line(new e(1, "x", 0.5), new t({ color: 16711680 }))]],
                Y: [[new THREE.Line(new e(1, "y", 0.5), new t({ color: 65280 }))]],
                Z: [[new THREE.Line(new e(1, "z", 0.5), new t({ color: 255 }))]],
                E: [[new THREE.Line(new e(1.25, "z", 1), new t({ color: 13421568 }))]],
                XYZE: [[new THREE.Line(new e(1, "z", 1), new t({ color: 7895160 }))]],
            }),
                (this.pickerGizmos = {
                    X: [[new THREE.Mesh(new THREE.TorusBufferGeometry(1, 0.12, 4, 12, Math.PI), n), [0, 0, 0], [0, -Math.PI / 2, -Math.PI / 2]]],
                    Y: [[new THREE.Mesh(new THREE.TorusBufferGeometry(1, 0.12, 4, 12, Math.PI), n), [0, 0, 0], [Math.PI / 2, 0, 0]]],
                    Z: [[new THREE.Mesh(new THREE.TorusBufferGeometry(1, 0.12, 4, 12, Math.PI), n), [0, 0, 0], [0, 0, -Math.PI / 2]]],
                    E: [[new THREE.Mesh(new THREE.TorusBufferGeometry(1.25, 0.12, 2, 24), n)]],
                    XYZE: [[new THREE.Mesh(new THREE.Geometry())]],
                }),
                (this.setActivePlane = function (e) {
                    "E" === e && (this.activePlane = this.planes.XYZE), "X" === e && (this.activePlane = this.planes.YZ), "Y" === e && (this.activePlane = this.planes.XZ), "Z" === e && (this.activePlane = this.planes.XY);
                }),
                (this.update = function (e, t) {
                    THREE.TransformGizmo.prototype.update.apply(this, arguments);
                    var n = ({ handles: this.handles, pickers: this.pickers }, new THREE.Matrix4()),
                        i = new THREE.Euler(0, 0, 1),
                        o = new THREE.Quaternion(),
                        a = new THREE.Vector3(1, 0, 0),
                        s = new THREE.Vector3(0, 1, 0),
                        r = new THREE.Vector3(0, 0, 1),
                        l = new THREE.Quaternion(),
                        c = new THREE.Quaternion(),
                        d = new THREE.Quaternion(),
                        h = t.clone();
                    i.copy(this.planes.XY.rotation),
                        o.setFromEuler(i),
                        n.makeRotationFromQuaternion(o).getInverse(n),
                        h.applyMatrix4(n),
                        this.traverse(function (e) {
                            o.setFromEuler(i),
                                "X" === e.name && (l.setFromAxisAngle(a, Math.atan2(-h.y, h.z)), o.multiplyQuaternions(o, l), e.quaternion.copy(o)),
                                "Y" === e.name && (c.setFromAxisAngle(s, Math.atan2(h.x, h.z)), o.multiplyQuaternions(o, c), e.quaternion.copy(o)),
                                "Z" === e.name && (d.setFromAxisAngle(r, Math.atan2(h.y, h.x)), o.multiplyQuaternions(o, d), e.quaternion.copy(o));
                        });
                }),
                this.init();
        }),
        (THREE.TransformGizmoRotate.prototype = Object.create(THREE.TransformGizmo.prototype)),
        (THREE.TransformGizmoRotate.prototype.constructor = THREE.TransformGizmoRotate),
        (THREE.TransformGizmoScale = function () {
            THREE.TransformGizmo.call(this);
            var i = new THREE.Geometry(),
                o = new THREE.Mesh(new THREE.BoxGeometry(0.125, 0.125, 0.125));
            (o.position.y = 0.5), o.updateMatrix(), i.merge(o.geometry, o.matrix);
            var a = new THREE.BufferGeometry();
            a.addAttribute("position", new THREE.Float32Attribute([0, 0, 0, 1, 0, 0], 3));
            var s = new THREE.BufferGeometry();
            s.addAttribute("position", new THREE.Float32Attribute([0, 0, 0, 0, 1, 0], 3));
            var r = new THREE.BufferGeometry();
            r.addAttribute("position", new THREE.Float32Attribute([0, 0, 0, 0, 0, 1], 3)),
                (this.handleGizmos = {
                    X: [[new THREE.Mesh(i, new e({ color: 16711680 })), [0.5, 0, 0], [0, 0, -Math.PI / 2]], [new THREE.Line(a, new t({ color: 16711680 }))]],
                    Y: [[new THREE.Mesh(i, new e({ color: 65280 })), [0, 0.5, 0]], [new THREE.Line(s, new t({ color: 65280 }))]],
                    Z: [[new THREE.Mesh(i, new e({ color: 255 })), [0, 0, 0.5], [Math.PI / 2, 0, 0]], [new THREE.Line(r, new t({ color: 255 }))]],
                    XYZ: [[new THREE.Mesh(new THREE.BoxBufferGeometry(0.125, 0.125, 0.125), new e({ color: 16777215, opacity: 0.25 }))]],
                }),
                (this.pickerGizmos = {
                    X: [[new THREE.Mesh(new THREE.CylinderBufferGeometry(0.2, 0, 1, 4, 1, !1), n), [0.6, 0, 0], [0, 0, -Math.PI / 2]]],
                    Y: [[new THREE.Mesh(new THREE.CylinderBufferGeometry(0.2, 0, 1, 4, 1, !1), n), [0, 0.6, 0]]],
                    Z: [[new THREE.Mesh(new THREE.CylinderBufferGeometry(0.2, 0, 1, 4, 1, !1), n), [0, 0, 0.6], [Math.PI / 2, 0, 0]]],
                    XYZ: [[new THREE.Mesh(new THREE.BoxBufferGeometry(0.4, 0.4, 0.4), n)]],
                }),
                (this.setActivePlane = function (e, t) {
                    var n = new THREE.Matrix4();
                    t.applyMatrix4(n.getInverse(n.extractRotation(this.planes.XY.matrixWorld))),
                        "X" === e && ((this.activePlane = this.planes.XY), Math.abs(t.y) > Math.abs(t.z) && (this.activePlane = this.planes.XZ)),
                        "Y" === e && ((this.activePlane = this.planes.XY), Math.abs(t.x) > Math.abs(t.z) && (this.activePlane = this.planes.YZ)),
                        "Z" === e && ((this.activePlane = this.planes.XZ), Math.abs(t.x) > Math.abs(t.y) && (this.activePlane = this.planes.YZ)),
                        "XYZ" === e && (this.activePlane = this.planes.XYZE);
                }),
                this.init();
        }),
        (THREE.TransformGizmoScale.prototype = Object.create(THREE.TransformGizmo.prototype)),
        (THREE.TransformGizmoScale.prototype.constructor = THREE.TransformGizmoScale),
        (THREE.TransformControls = function (e, t) {
            function n(e) {
                if (void 0 !== r.object && c !== !0 && (void 0 === e.button || 0 === e.button)) {
                    var t = e.changedTouches ? e.changedTouches[0] : e,
                        n = s(t, d[l].pickers.children),
                        i = null;
                    n && ((i = n.object.name), e.preventDefault()), r.axis !== i && ((r.axis = i), r.update(), r.dispatchEvent(_));
                }
            }
            function i(e) {
                if (void 0 !== r.object && c !== !0 && (void 0 === e.button || 0 === e.button)) {
                    var t = e.changedTouches ? e.changedTouches[0] : e;
                    if (0 === t.button || void 0 === t.button) {
                        var n = s(t, d[l].pickers.children);
                        if (n) {
                            e.preventDefault(), e.stopPropagation(), r.dispatchEvent(p), (r.axis = n.object.name), r.update(), w.copy(X).sub(j).normalize(), d[l].setActivePlane(r.axis, w);
                            var i = s(t, [d[l].activePlane]);
                            i &&
                                (D.copy(r.object.position),
                                B.copy(r.object.scale),
                                F.extractRotation(r.object.matrix),
                                W.extractRotation(r.object.matrixWorld),
                                V.extractRotation(r.object.parent.matrixWorld),
                                k.setFromMatrixScale(x.getInverse(r.object.parent.matrixWorld)),
                                A.copy(i.point));
                        }
                    }
                    c = !0;
                }
            }
            function o(e) {
                if (void 0 !== r.object && null !== r.axis && c !== !1 && (void 0 === e.button || 0 === e.button)) {
                    var t = e.changedTouches ? e.changedTouches[0] : e,
                        n = s(t, [d[l].activePlane]);
                    n !== !1 &&
                        (e.preventDefault(),
                        e.stopPropagation(),
                        T.copy(n.point),
                        "translate" === l
                            ? (T.sub(A),
                              T.multiply(k),
                              "local" === r.space &&
                                  (T.applyMatrix4(x.getInverse(W)),
                                  -1 === r.axis.search("X") && (T.x = 0),
                                  -1 === r.axis.search("Y") && (T.y = 0),
                                  -1 === r.axis.search("Z") && (T.z = 0),
                                  T.applyMatrix4(F),
                                  r.object.position.copy(D),
                                  r.object.position.add(T),
                                  r.body.position.copy(r.object.position)),
                              ("world" !== r.space && -1 === r.axis.search("XYZ")) ||
                                  (-1 === r.axis.search("X") && (T.x = 0),
                                  -1 === r.axis.search("Y") && (T.y = 0),
                                  -1 === r.axis.search("Z") && (T.z = 0),
                                  T.applyMatrix4(x.getInverse(V)),
                                  r.object.position.copy(D),
                                  r.object.position.add(T),
                                  r.body.position.copy(r.object.position)),
                              null !== r.translationSnap &&
                                  ("local" === r.space && r.object.position.applyMatrix4(x.getInverse(W)),
                                  -1 !== r.axis.search("X") && (r.object.position.x = Math.round(r.object.position.x / r.translationSnap) * r.translationSnap),
                                  -1 !== r.axis.search("Y") && (r.object.position.y = Math.round(r.object.position.y / r.translationSnap) * r.translationSnap),
                                  -1 !== r.axis.search("Z") && (r.object.position.z = Math.round(r.object.position.z / r.translationSnap) * r.translationSnap),
                                  "local" === r.space && r.object.position.applyMatrix4(W)))
                            : "scale" === l
                            ? (T.sub(A),
                              T.multiply(k),
                              "local" === r.space &&
                                  ("XYZ" === r.axis
                                      ? ((b = 1 + T.y / Math.max(B.x, B.y, B.z)), (r.object.scale.x = B.x * b), (r.object.scale.y = B.y * b), (r.object.scale.z = B.z * b))
                                      : (T.applyMatrix4(x.getInverse(W)),
                                        "X" === r.axis && (r.object.scale.x = B.x * (1 + T.x / B.x)),
                                        "Y" === r.axis && (r.object.scale.y = B.y * (1 + T.y / B.y)),
                                        "Z" === r.axis && (r.object.scale.z = B.z * (1 + T.z / B.z)))))
                            : "rotate" === l &&
                              (T.sub(j),
                              T.multiply(k),
                              O.copy(A).sub(j),
                              O.multiply(k),
                              "E" === r.axis
                                  ? (T.applyMatrix4(x.getInverse(y)),
                                    O.applyMatrix4(x.getInverse(y)),
                                    S.set(Math.atan2(T.z, T.y), Math.atan2(T.x, T.z), Math.atan2(T.y, T.x)),
                                    v.set(Math.atan2(O.z, O.y), Math.atan2(O.x, O.z), Math.atan2(O.y, O.x)),
                                    C.setFromRotationMatrix(x.getInverse(V)),
                                    G.setFromAxisAngle(w, S.z - v.z),
                                    M.setFromRotationMatrix(W),
                                    C.multiplyQuaternions(C, G),
                                    C.multiplyQuaternions(C, M),
                                    r.object.quaternion.copy(C),
                                    r.body.quaternion.copy(C))
                                  : "XYZE" === r.axis
                                  ? (G.setFromEuler(T.clone().cross(O).normalize()),
                                    C.setFromRotationMatrix(x.getInverse(V)),
                                    I.setFromAxisAngle(G, -T.clone().angleTo(O)),
                                    M.setFromRotationMatrix(W),
                                    C.multiplyQuaternions(C, I),
                                    C.multiplyQuaternions(C, M),
                                    r.object.quaternion.copy(C),
                                    r.body.quaternion.copy(C))
                                  : "local" === r.space
                                  ? (T.applyMatrix4(x.getInverse(W)),
                                    O.applyMatrix4(x.getInverse(W)),
                                    S.set(Math.atan2(T.z, T.y), Math.atan2(T.x, T.z), Math.atan2(T.y, T.x)),
                                    v.set(Math.atan2(O.z, O.y), Math.atan2(O.x, O.z), Math.atan2(O.y, O.x)),
                                    M.setFromRotationMatrix(F),
                                    null !== r.rotationSnap
                                        ? (I.setFromAxisAngle(L, Math.round((S.x - v.x) / r.rotationSnap) * r.rotationSnap),
                                          H.setFromAxisAngle(R, Math.round((S.y - v.y) / r.rotationSnap) * r.rotationSnap),
                                          P.setFromAxisAngle(N, Math.round((S.z - v.z) / r.rotationSnap) * r.rotationSnap))
                                        : (I.setFromAxisAngle(L, S.x - v.x), H.setFromAxisAngle(R, S.y - v.y), P.setFromAxisAngle(N, S.z - v.z)),
                                    "X" === r.axis && M.multiplyQuaternions(M, I),
                                    "Y" === r.axis && M.multiplyQuaternions(M, H),
                                    "Z" === r.axis && M.multiplyQuaternions(M, P),
                                    r.object.quaternion.copy(M),
                                    r.body.quaternion.copy(M))
                                  : "world" === r.space &&
                                    (S.set(Math.atan2(T.z, T.y), Math.atan2(T.x, T.z), Math.atan2(T.y, T.x)),
                                    v.set(Math.atan2(O.z, O.y), Math.atan2(O.x, O.z), Math.atan2(O.y, O.x)),
                                    C.setFromRotationMatrix(x.getInverse(V)),
                                    null !== r.rotationSnap
                                        ? (I.setFromAxisAngle(L, Math.round((S.x - v.x) / r.rotationSnap) * r.rotationSnap),
                                          H.setFromAxisAngle(R, Math.round((S.y - v.y) / r.rotationSnap) * r.rotationSnap),
                                          P.setFromAxisAngle(N, Math.round((S.z - v.z) / r.rotationSnap) * r.rotationSnap))
                                        : (I.setFromAxisAngle(L, S.x - v.x), H.setFromAxisAngle(R, S.y - v.y), P.setFromAxisAngle(N, S.z - v.z)),
                                    M.setFromRotationMatrix(W),
                                    "X" === r.axis && C.multiplyQuaternions(C, I),
                                    "Y" === r.axis && C.multiplyQuaternions(C, H),
                                    "Z" === r.axis && C.multiplyQuaternions(C, P),
                                    C.multiplyQuaternions(C, M),
                                    r.object.quaternion.copy(C),
                                    r.body.quaternion.copy(C))),
                        r.update(),
                        r.dispatchEvent(_),
                        r.dispatchEvent(f));
                }
            }
            function a(e) {
                e.preventDefault(), (void 0 !== e.button && 0 !== e.button) || (c && null !== r.axis && ((E.mode = l), r.dispatchEvent(E)), (c = !1), e instanceof TouchEvent ? ((r.axis = null), r.update(), r.dispatchEvent(_)) : n(e));
            }
            function s(n, i) {
                var o = t.getBoundingClientRect(),
                    a = (n.clientX - o.left) / o.width,
                    s = (n.clientY - o.top) / o.height;
                g.set(2 * a - 1, -(2 * s) + 1), m.setFromCamera(g, e);
                var r = m.intersectObjects(i, !0);
                return r[0] ? r[0] : !1;
            }
            THREE.Object3D.call(this),
                (t = void 0 !== t ? t : document),
                (this.body = void 0),
                (this.object = void 0),
                (this.visible = !1),
                (this.translationSnap = null),
                (this.rotationSnap = null),
                (this.space = "world"),
                (this.size = 1),
                (this.axis = null);
            var r = this,
                l = "translate",
                c = !1,
                d = { translate: new THREE.TransformGizmoTranslate(), rotate: new THREE.TransformGizmoRotate(), scale: new THREE.TransformGizmoScale() };
            for (var h in d) {
                var u = d[h];
                (u.visible = h === l), this.add(u);
            }
            var _ = { type: "change" },
                p = { type: "mouseDown" },
                E = { type: "mouseUp", mode: l },
                f = { type: "objectChange" },
                m = new THREE.Raycaster(),
                g = new THREE.Vector2(),
                T = new THREE.Vector3(),
                A = new THREE.Vector3(),
                S = new THREE.Vector3(),
                v = new THREE.Vector3(),
                b = 1,
                y = new THREE.Matrix4(),
                w = new THREE.Vector3(),
                x = new THREE.Matrix4(),
                O = new THREE.Vector3(),
                C = new THREE.Quaternion(),
                L = new THREE.Vector3(1, 0, 0),
                R = new THREE.Vector3(0, 1, 0),
                N = new THREE.Vector3(0, 0, 1),
                M = new THREE.Quaternion(),
                I = new THREE.Quaternion(),
                H = new THREE.Quaternion(),
                P = new THREE.Quaternion(),
                G = new THREE.Quaternion(),
                D = new THREE.Vector3(),
                B = new THREE.Vector3(),
                F = new THREE.Matrix4(),
                V = new THREE.Matrix4(),
                k = new THREE.Vector3(),
                j = new THREE.Vector3(),
                z = new THREE.Euler(),
                W = new THREE.Matrix4(),
                X = new THREE.Vector3(),
                Y = new THREE.Euler();
            t.addEventListener("mousedown", i, !1),
                t.addEventListener("touchstart", i, !1),
                t.addEventListener("mousemove", n, !1),
                t.addEventListener("touchmove", n, !1),
                t.addEventListener("mousemove", o, !1),
                t.addEventListener("touchmove", o, !1),
                t.addEventListener("mouseup", a, !1),
                t.addEventListener("mouseout", a, !1),
                t.addEventListener("touchend", a, !1),
                t.addEventListener("touchcancel", a, !1),
                t.addEventListener("touchleave", a, !1),
                (this.dispose = function () {
                    t.removeEventListener("mousedown", i),
                        t.removeEventListener("touchstart", i),
                        t.removeEventListener("mousemove", n),
                        t.removeEventListener("touchmove", n),
                        t.removeEventListener("mousemove", o),
                        t.removeEventListener("touchmove", o),
                        t.removeEventListener("mouseup", a),
                        t.removeEventListener("mouseout", a),
                        t.removeEventListener("touchend", a),
                        t.removeEventListener("touchcancel", a),
                        t.removeEventListener("touchleave", a);
                }),
                (this.attach = function (e, t) {
                    (this.body = t), (this.object = e), (this.visible = !0), this.update();
                }),
                (this.detach = function () {
                    (this.body = void 0), (this.object = void 0), (this.visible = !1), (this.axis = null);
                }),
                (this.getMode = function () {
                    return l;
                }),
                (this.setMode = function (e) {
                    (l = e ? e : l), "scale" === l && (r.space = "local");
                    for (var t in d) d[t].visible = t === l;
                    this.update(), r.dispatchEvent(_);
                }),
                (this.setTranslationSnap = function (e) {
                    r.translationSnap = e;
                }),
                (this.setRotationSnap = function (e) {
                    r.rotationSnap = e;
                }),
                (this.setSize = function (e) {
                    (r.size = e), this.update(), r.dispatchEvent(_);
                }),
                (this.setSpace = function (e) {
                    (r.space = e), this.update(), r.dispatchEvent(_);
                }),
                (this.update = function () {
                    void 0 !== r.object &&
                        (r.object.updateMatrixWorld(),
                        j.setFromMatrixPosition(r.object.matrixWorld),
                        z.setFromRotationMatrix(x.extractRotation(r.object.matrixWorld)),
                        e.updateMatrixWorld(),
                        X.setFromMatrixPosition(e.matrixWorld),
                        Y.setFromRotationMatrix(x.extractRotation(e.matrixWorld)),
                        (b = (j.distanceTo(X) / 6) * r.size),
                        this.position.copy(j),
                        this.scale.set(b, b, b),
                        w.copy(X).sub(j).normalize(),
                        "local" === r.space ? d[l].update(z, w) : "world" === r.space && d[l].update(new THREE.Euler(), w),
                        d[l].highlight(r.axis));
                });
        }),
        (THREE.TransformControls.prototype = Object.create(THREE.Object3D.prototype)),
        (THREE.TransformControls.prototype.constructor = THREE.TransformControls);
})();
var s_oMenu = null;
(TEXT_GAMEOVER = "GAME OVER"),
    (TEXT_OF = "/"),
    (TEXT_SCORE = "SCORE"),
    (TEXT_BEST_SCORE = "BEST SCORE"),
    (TEXT_MULTIPLIER = "x"),
    (TEXT_BALLS = "BALLS"),
    (TEXT_LAUNCH = "KICK"),
    (TEXT_GOAL = "GOAL!"),
    (TEXT_ARE_SURE = "ARE YOU SURE?"),
    (TEXT_BALL_OUT = "OUT"),
    (TEXT_PAUSE = "PAUSE"),
    (TEXT_HOW_TO_PLAY = "HOW TO PLAY"),
    (TEXT_CONGRATULATION = ["AVERAGE!", "GOOD!", "PERFECT!!!"]),
    (TEXT_SAVED = "SAVED"),
    (TEXT_HELP = "SWIPE TO KICK THE BALL"),
    (TEXT_SHARE_IMAGE = "200x200.jpg"),
    (TEXT_SHARE_TITLE = "Congratulations!"),
    (TEXT_SHARE_MSG1 = "You collected <strong>"),
    (TEXT_SHARE_MSG2 = " points</strong>!<br><br>Share your score with your friends!"),
    (TEXT_SHARE_SHARE1 = "My score is "),
    (TEXT_SHARE_SHARE2 = " points! Can you do better?");

