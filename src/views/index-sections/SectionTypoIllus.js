import React from "react";
import barOption from "../echarts-sections/barOption";

// reactstrap components
import { Container, Row, Col } from "reactstrap";
import EChartsReact from "echarts-for-react";
import RegisterPage from "../examples/RegisterPage";

// core components
function SectionTypography() {
    return (
        <>
            <Container className="tim-container">
                <div className="title">
                    <h1><b>一、“银发族”的数字现状</b></h1><br/><br/>
                    <img alt="..."
                         className="img-rounded img-responsive"
                         src={require("assets/img/silverDilemma/老年人使用手机.jpg").default}
                    />
                </div>
                <div id="typography">
                    <Row>
                        <h3>
                            按照1956年联合国《人口老龄化及其社会经济后果》确定的划分标准，当一个国家或地区65岁及以上老年人口数量占总人口比例超过7%时，则意味着这个国家或地区进入老龄化。<br/><br/>
                            1982年维也纳老龄问题世界大会，确定60岁及以上老年人口占总人口比例超过10%，意味着这个国家或地区进入老龄化。 据国家统计局2021年5月11日最新发布的第七次全国人口普查结果显示，全国人口共14.1178亿。从年龄结构来看，60岁及以上人口为2.6402亿，占18.70%，其中，65岁及以上人口为1.9064亿，占13.50%。<br/><br/>
                            自2000年迈入老龄化社会之后，我国人口老龄化的程度持续加深。由中国发展基金会发布的《中国发展报告2020：中国人口老龄化的发展趋势和政策》预测，到2022年左右，中国65岁以上人口将占到总人口的14%，实现向老龄社会的转变。按照目前的增长速度来看，这项预测或将实现。<br/><br/>

                            根据第48届《中国互联网络发展统计报告》，目前，我国网民数量已达10.11亿，互联网普及率也在逐年递增。互联网快速发展带给我们机遇的同时，也带来太多挑战。<br/><br/>
                        </h3>
                        <br/>
                        <br/>
                        <Row>
                            <Col>
                                <a href="examples/landing.html" target="_blank">
                                    <img
                                        alt="..."
                                        className="img-rounded img-responsive"
                                        src={require("assets/img/silverDilemma/statistics/2016年至2021年互联网网民数量及普及率.gif").default}
                                    />
                                </a>
                                <div className="img-details">
                                    <p>Sonia Green</p>
                                </div>
                            </Col>
                            <Col className="ml-auto">
                                <a href="examples/landing.html" target="_blank">
                                    <img
                                        alt="..."
                                        className="img-rounded img-responsive"
                                        src={require("assets/img/silverDilemma/statistics/2010至2020我国老年人口数及占总人口比例的变化.gif").default}
                                    />
                                </a>
                                <div className="img-details">
                                    <p>Sonia Green</p>
                                </div>
                            </Col>
                        </Row>
                        <br/>
                        <h2 className="text-info"><b>“触网”考验</b></h2>
                        <h3>
                            年轻一代作为互联网的原住民，熟练地享受着互联网带来的生活方方面面的便捷，如网上点餐、预约挂号，甚至因疫情足不出户也能工作学习......而那些从未接触过互联网或难以学习新技术的老年人，却身陷“数字鸿沟”的困境。<br/><br/>
                            <img alt="..."
                                 className="img-rounded img-responsive"
                                 align="center"
                                 src={require("assets/img/silverDilemma/statistics/2016年至2021年网民年龄结构变化.gif").default}
                            /><br/><br/>
                            他们，有的永远生活在自己的“孤岛”，有的想要逃离“孤岛”，却力不从心，有的成功逃离了这座“孤岛”。根据第48届《中国互联网络发展统计报告》，截至2021年6月，我国互联网普及率高达71.6%，而60岁以上的老年人的网络使用占比仅有12.2%，这也就意味着每4个老年人中，有3个未接触过互联网。即使那些接触过网络的老年人，他们其中很大一部分不熟练地使用着手机功能，只会打电话等简单操作。<br/><br/>
                        </h3>
                    </Row>
                </div>
                <div>
                    <h1><b>二、“银发族”的数字故事</b></h1><br/><br/>
                    <img alt="..."
                         className="img-rounded img-responsive"
                         src={require("assets/img/silverDilemma/老年人使用手机1.jpg").default}
                    />
                </div>

                <div id="typography">
                    <Row>
                        <h3>
                            年轻一代作为互联网的原住民，熟练地享受着互联网带来的生活方方面面的便捷，如网上点餐、预约挂号，甚至因疫情足不出户也能工作学习......而那些从未接触过互联网或难以学习新技术的老年人，却身陷“数字鸿沟”的困境。<br/><br/>
                            他们，有的永远生活在自己的“孤岛”，有的想要逃离“孤岛”，却力不从心，有的成功逃离了这座“孤岛”。根据第48届《中国互联网络发展统计报告》，截至2021年6月，我国互联网普及率高达71.6%，而60岁以上的老年人的网络使用占比仅有12.2%，这也就意味着每4个老年人中，有3个未接触过互联网。即使那些接触过网络的老年人，他们其中很大一部分不熟练地使用着手机功能，只会打电话等简单操作。<br/><br/>
                        </h3>
                        <br/>

                        <Container>
                            <div className="title">
                                <h3>点击查看老人故事</h3>
                            </div>
                            <Row>
                                <Col md="3" sm="6">
                                    <a href="examples/landing.html" target="_blank">
                                        <img
                                            alt="..."
                                            className="img-rounded img-responsive"
                                            src={require("assets/img/silverDilemma/故事1.jpg").default}
                                        />
                                    </a>
                                    <div className="img-details">
                                        <p>Sonia Green</p>
                                    </div>
                                </Col>
                                <Col className="ml-auto" md="3" sm="6">
                                    <a href="examples/landing.html" target="_blank">
                                        <img
                                            alt="..."
                                            className="img-rounded img-responsive"
                                            src={require("assets/img/silverDilemma/故事2.jpg").default}
                                        />
                                    </a>
                                    <div className="img-details">
                                        <p>Sonia Green</p>
                                    </div>
                                </Col>

                                <Col className="ml-auto" md="3" sm="6">
                                    <a href="examples/landing.html" target="_blank">
                                        <img
                                            alt="..."
                                            className="img-rounded img-responsive"
                                            src={require("assets/img/silverDilemma/故事3.jpg").default}
                                        />
                                    </a>
                                    <div className="img-details">
                                        <p>Sonia Green</p>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                        <h3>

                        </h3>
                        <h3 className="oldFirst">
                            01 被数字“困”在了家中<br/><br/>
                            刘忠，江苏无锡人，今年72岁。<br/><br/>
                            刘忠站在这个他进出了40多年的菜市场门口，踌躇了。<br/><br/>
                            像他这样，被数字化设备拦住传统生活模式的银发老人并非少数。“感觉生活的规律都被打破了。以前是一钱逼死英雄汉，现在一个什么码就能让你足不出户。”<br/><br/>
                            当抗击疫情成为常态化，周边大大小小的公共场所都设置了二维码的准入需求。没有苏康码、行程码，任何人都没有办法“过关”。刘忠只能放弃那条熟悉的买菜路，在街边的小商铺里随便买些吃的对付每天的生活。<br/><br/>
                            据观察统计，今年南京疫情暴发初期，平均每3位老人中就有1位在菜场门口被拦下，没有健康码的他们只能打道回府或另选他路，而结合菜场高峰期的客流量计算，相当于每1.2秒就有一位老年人被健康码截留。<br/><br/>
                            谈起被二维码拦下的真正原因，刘忠坦白还是因为没有智能手机。从前与好友们沟通都是翻看那本褪色了的电话簿，刘忠拨通家里的固定电话，那熟悉的声音便会从耳旁响起。<br/><br/>
                            离开了家，离开了固定电话，刘忠仿佛进入了一种与“远方”隔绝的状态。几年前，小辈们考虑到刘忠出门在外联系的需要，给他购置了一部老人机。即使是和小灵通只有字号上区别的老人机，刘忠花了足足一个月才逐渐学会使用。<br/><br/>
                            从那以后，这部手机坏了修，修了坏，伴随刘忠走过了5年。子女们想着给刘忠换一部逐渐时兴的智能手机，但刘忠看着那眼花缭乱的屏幕，拒绝了。<br/><br/>
                            2020年，疫情来了。随疫情而来的，还有苏康码、行程码。刘忠第一次听到这些，是在村里的大喇叭。“以前从来没听说过这些东西，现在有的地方让没有手机的老年人打印出来，挂脖子上。”面对这样的抉择，刘忠选择放弃了与老友们每月一次的聚会，也放弃了户外的大部分日常生活，成为“银发困境”中的一员。<br/><br/>
                            为了让老人不至于在家里闷出病来，子女们为老人打印了一张苏康码，让老人随身带着。但即使这样，刘忠出门的次数也屈指可数。<br/><br/>
                            2021年，南京疫情暴发。原本就严格的疫情管控愈发苛刻，由于打印存在冒充情形，刘忠所在的城市一律要求手机当面出示二维码。现在，刘忠又一次被困住了。<br/><br/>
                            “村里的路都被封死了，原来走10分钟就能到的地方，要走1个多小时。到了之后发现还需要出示苏康码，我本来腿脚就不便，这么一折腾，哪里还愿意出门啊！”刘忠看着眼前的电视机，长吁短叹。<br/><br/>
                            疫情暴发后，刘忠最后一次出门是去药店。原本熟悉的道路经过迂回百转，刘忠走了将近一上午：“太不便了！我这次一次买了三年的药，足够吃了。不知道往后疫情会发展成什么样，不过我估计这路是越来越难走了，门也越来越难进了，所以干脆一次性买齐吧。”<br/><br/>
                            刘忠看着眼前的电视机，用那部老人机拨通了老友的电话：“哎，你那边能出去吗？”“咱没有智能机啊，查不了苏康码，只能在家呆着......”<br/><br/>
                            在65岁以上的老年人群体中，有85%的老年人会和朋友有固定的线下聚会，其规模在4-15人不等。在新冠疫情防控常态下，线下聚会因为防疫要求和健康码的缺失或硬性或软性地被取消。在一个城市500人规模的小区中，每天有近38人因没有健康码被迫“离群索居”，被困在家中。而这些正是“疫情和数字化”给老年人群体带来更深重的影响。<br/><br/>
                        </h3>
                        <h3 className="oldSecond">
                            02点击查看老人的故事：“尴尬”的扫码困境<br/><br/>
                            卢红霞，江苏南京人，今年68岁<br/><br/>

                            南京单日新增确诊清零满14天后，卢红霞回忆起七月底那段突然“兵荒马乱”起来的日子，依然觉得有点不真实。<br/><br/>

                            “我要去买菜，那个菜门口突然就有人要我给他看健康码了，我又没带手机。”交涉无果后，卢红霞只好原路返回。“去年的时候是要看的，但已经过去蛮久了。我就是不太喜欢用微信（付钱），不习惯那个东西，没有买东西的感觉。”<br/><br/>

                            那是2021年7月21日的早晨，年近七旬的卢红霞看来，是一个没什么不同的日子。城市街道依然熙来攘往，空气中也察觉不到紧张的味道。她有自己的手机，但并不习惯于从中获取资讯。对卢红霞来说，哪怕所谓的“老人机”调大了字体，要去辨识和阅读文字也是一件困难的事情。<br/><br/>

                            她的生活很简单，几乎被家庭生活填满，消遣乐趣仅限于散步和收听戏曲广播。某种程度上，卢红霞生活在一种“信息真空”中。<br/><br/>

                            当日晚些时候，她才从女儿口中得知南京出现了疫情，并且需要去社区进行第一轮核酸检测。<br/><br/>

                            “我当时啊，还没反应过来，觉得很快就没事了。”在家人的陪伴下，卢红霞完成了社区一检。睡前，她把手机放进随身携带的小包里，防止第二天出门时忘记携带。<br/><br/>

                            “后来搞的时候，他们要弄一个码，但是我那个手机弄不出来啊，急死人了。”卢红霞所说的“码”，指的是在第二轮核酸检测中使用的采样码。在进行监测前，居民需要扫描社区提供的二维码，在江苏省新冠肺炎核酸检测信息系统注册，预约获取采样码，并凭码检测。<br/><br/>

                            7月25日，马群街道飘洒着小雨，卢红霞早早来到社区监测点排队等候。在现场的长队边，有不少穿红马甲的志愿者在协助注册采样码。她刚开始并没有反应过来，直到有志愿者走过来询问有没有注册。卢红霞感到有些慌乱，因为这和第一轮监测的情况“不一样”了。她拿出手机扫描，却怎么也显示不出注册页面。刚开始志愿者以为信号不好，自己开了一个热点给卢红霞，但依然没有解决问题。<br/><br/>

                            “他说应该是手机型号太老，让我跟家里人一起来。”别无他法，卢红霞只好无功而返。等女儿下班后，她再次来到监测点。通过在女儿的系统账号上添加家庭成员获取了自己的采样码，一波三折地完成了检测。<br/><br/>

                            在核检筛查过程中，与卢红霞相似的例子并不罕见。大量老年人群体与互联网相连甚少或从未触网，一些在年轻人看来稀松平常的操作对于他们来说却显得相当困难。有的老人缺乏可以上网的移动通信设备，有的老人记不住自己的电话号码，有的老人无法理解“字母＋数字”的密码设置要求……<br/><br/>

                            志愿者小金表示，实在没有办法的，他们可以人工登记身份证信息，但不少老人也没有随身携带证件。<br/><br/>
                        </h3>
                        <h3 className="oldSecond">
                            03点击查看老人的故事：艰难的“数字”学习<br/><br/>

                            夏山，江苏南京人，今天67岁。<br/><br/>

                            夏山的第一部智能手机，是2018年独生女儿出嫁时买给他的。<br/><br/>

                            “我平时的爱好可多了，下棋、泥塑、听戏......哪有空玩手机。”一直以来夏山只有按键的老年机，在他看来打电话、发短信能满足所有需求，智能手机反而让人沉浸在虚拟的世界丧失了生活和人与人正常情感交流。<br/><br/>

                            直到三年前，女儿出嫁搬到建邺区的新家，忙于工作的年轻人整月不回来一次。老伴儿用智能手机能看到女儿新发的动态，外孙儿学校活动、小两口出去旅游、厨艺进步做了一道好菜......“别人都有，就我没有。”夏山和女儿抱怨，女儿给他买了当年的国产新品。跟女儿一家的联系又回来了。<br/><br/>

                            新手机到货，夏山慢慢接受智能手机，学怎么加好友、发消息、刷朋友圈。但对于新网络技术总还有些“消化不良”。<br/><br/>

                            老伴儿把操作步骤记在本子上，夏山对照步骤一遍遍尝试。找不到女儿的微信号、进入聊天界面找不到语音键、错点一旁的“拍摄”键退不回来......“几乎把能出现的问题的每一步都试错了，”夏山有些哭笑不得。几次尝试，夏山终于拨通了打给女儿的视频电话，不放心还自己又从头操作了一遍巩固记忆。<br/><br/>

                            看病从医院出来，夏山站在医院门口，拎一兜子医生开好的药招呼打车，又站了半小时。“明明没人乘坐，出租车为什么不愿意停下来？”早晨去超市买菜忘了带钱，夏山慌忙从等待结账的队伍里“逃”出来，换智能手机的第三年，他还是不会也不敢用手机扫码支付；每月固定时间去银行营业厅取养老金，能办理业务的窗口越开越少，队伍越排越长。

                            去年疫情暴发后，夏山到哪里都要出示苏康码。一次，去医院拿药，在门口站了不下十分钟，苏康码还是没找到。医院门口一个年轻人告诉夏山，“在支付宝界面，点健康码，然后再点立即查看，填写信息就可以了。”一会儿点这里，一会儿点那里，听着很简单，对夏山而言，比他想象得还复杂。

                            最后，夏山把手机交给医院的工作人员代为操作。“我点来点去还是没找到苏康码在哪里，还老是点出其他东西退不出来。”夏山不好意思地笑笑。

                            夏山与智能社会的隔阂是老年人群体面临的普遍问题。同时，与年轻一代相比，老年人对于网络世界往往心存恐惧，导致其进入新媒体空间存在一定的困难。

                            好在使用智能手机是一个熟能生巧的过程，夏山现在出行已经不再有压力，能在公共场合顺利打开苏康码；也会和女儿外孙定期打视频电话。“怪不得年轻人每天都在用手机，其实还挺方便的。”数字化只会越来越普及，夏山庆幸自己学会了使用智能手机。现在，他还会教小区里的其他老年人怎么用。

                            这些“银发族”的出现存在多方面的原因：有的老人从来没接触过电子产品，对他们而言，手机和互联网并不会导致什么障碍；有的老人有丰富的老年生活，手机的出现对他们来说反而是一种破坏；有的老人因生活所需不得不学会使用手机但又很难熟练学会......
                        </h3>
                    </Row>
                </div>
                <br />

                <div className="title">
                    <h1><b>三、“银发族”的数字困境</b></h1><br/><br/>
                    <img alt="..."
                         className="img-rounded img-responsive"
                         src={require("assets/img/silverDilemma/老年人使用手机2.jpg").default}
                    />
                </div>
                <div id="typography">
                    <Row>
                        <h3>
                            同时，也有许多富于“探险精神”的爷爷奶奶们试探着向互联网领域迈出第一步，朝这个陌生的“新世界”投去好奇的打量目光。<br/><br/>
                            据国家统计局数据统计，银发一族（50岁以上人群）是中国互联网最大的新增群体，近年来几乎保持两位数增长，在全体网民中占比增速达到近30%。在退休后把握着时间自由的老年人群体逐渐尝试在网络生活中排解空巢境遇的孤独，寻求沟通途径和归属感。<br/><br/>
                        </h3>
                        <br/>
                        <h3>
                            年轻一代作为互联网的原住民，熟练地享受着互联网带来的生活方方面面的便捷，如网上点餐、预约挂号，甚至因疫情足不出户也能工作学习......而那些从未接触过互联网或难以学习新技术的老年人，却身陷“数字鸿沟”的困境。<br/><br/>
                            他们，有的永远生活在自己的“孤岛”，有的想要逃离“孤岛”，却力不从心，有的成功逃离了这座“孤岛”。根据第48届《中国互联网络发展统计报告》，截至2021年6月，我国互联网普及率高达71.6%，而60岁以上的老年人的网络使用占比仅有12.2%，这也就意味着每4个老年人中，有3个未接触过互联网。即使那些接触过网络的老年人，他们其中很大一部分不熟练地使用着手机功能，只会打电话等简单操作。<br/><br/>
                        </h3>
                    </Row>
                </div>

                <div className="title">
                    <h1><b>四、“银发族”的数字转机</b></h1><br/><br/>
                    <img alt="..."
                         className="img-rounded img-responsive"
                         src={require("assets/img/silverDilemma/老年人使用手机3.jpg").default}
                    />
                </div>
                <div id="typography">
                    <Row>
                        <h3>
                            同时，也有许多富于“探险精神”的爷爷奶奶们试探着向互联网领域迈出第一步，朝这个陌生的“新世界”投去好奇的打量目光。<br/><br/>
                            据国家统计局数据统计，银发一族（50岁以上人群）是中国互联网最大的新增群体，近年来几乎保持两位数增长，在全体网民中占比增速达到近30%。在退休后把握着时间自由的老年人群体逐渐尝试在网络生活中排解空巢境遇的孤独，寻求沟通途径和归属感。<br/><br/>
                        </h3>
                        <br/>
                        <h3>
                            国家：永远最坚实的依靠<br/><br/>
                            2020年11月24日，国务院办公厅印发《关于切实解决老年人运用智能技术困难实施方案》（以下简称《方案》），聚焦老年人日常生活涉及的出行、就医、消费、文娱、办事等7类高频事项和服务场景，提出坚持传统服务方式与智能化服务创新并行，推动解决老年人在运用智能技术方面遇到的困难，收获无数“点赞”。<br/><br/>
                            《方案》提出，2020年底前集中力量推动各项传统服务兜底保障到位，2021年底前推动老年人享受智能化服务更加普遍，传统服务方式更加完善。<br/><br/>
                            当然，指望通过一纸文件就把老年人遭遇的智能技术问题全部解决，是不切实际的。数字技术还在不断迭代升级，未来数字化应用还会更多更细化，要想真正消除“数字鸿沟”，需要在全社会共同努力下，用更多的人文关怀推动形成从政府部门到企业、从社会到家庭的共同参与。<br/><br/>

                            文旅部办公厅、国家文物局办公室发布通知指出，文化场馆和旅游景区不得因老年人没有智能手机无法调取“健康码”等原因，拒绝老年人进入；在做好疫情防控的前提下，可安排老年人凭身份证、老年证等有效证件登记进入，并采取有效措施加强个人信息保护。<br/><br/>

                            交通运输部等部门发布通知，要求在新冠肺炎疫情低风险地区，除汽车客运站、客运码头、民用运输机场和出入境口岸等特殊场所外，一般不用查验“健康码”。需查验“健康码”的情形，不得将“健康码”作为人员通行的唯一凭证。<br/><br/>

                            今年1月起，工信部将在全国范围内开展为期一年的“互联网应用适老化及无障碍改造专项行动”，首批将完成115个公共服务类网站和43个手机App的适老化及无障碍改造。<br/><br/>
                            “当前老年友好社会建设应着适老设备等重硬件建设，社会和民生建设方面，建立公共政策更加体现年龄包容，体现尊老爱老孝老。”北京大学社会学教授陆杰华认为，中国作为发展中国家和老年人口最多的国家，2022年老年人增长速度将会更快，公共政策也应从温度到制度，实现更长远的制度安排。<br/><br/>

                            社会：人与人彼此互助的桥<br/><br/>

                            “一张图、两个标点、三个字。”这说的是一名ID为“青溪木昀”的网友发布一条关于无锡为老人开放“无健康码”通道的微博，正是这样一条简短的微博，收到了二十一万点赞，37000多条转发和6000多条评论。<br/><br/>

                            不止如此，长沙丰泉古井社区组织年轻党员成立了“红色代办队”，专门为没有智能手机、或者不会使用智能手机的老年人提供“网购”“网约车”“网上挂号”等暖心服务；在贵州，针对老年人等无智能手机的人员，由住所地审核并加盖公章出具健康通行证明；上海曹杨影城对无法扫码留痕的人群，采用专门的登记本进行纸质留痕......这些微小但贴心的举措，为没有赶上“数字化技术列车”的人群留出口子，更凸显出精细化社会治理的温度。<br/><br/>

                            陆杰华提出，“数字化时代的老年友好不是看对城市区域、高端收入人群，更重要的是如何兼顾农村地区、低收入群体，公共政策能否公平相待，实现代际和谐、推进社会公平。”陆杰华认为，老年友好城市的建立目标是，消除老年人参与家庭、社区、社会生活的种种障碍，给老年人提供安全便捷规避风险的社会环境。<br/><br/>

                            家庭：最温暖的避风港<br/><br/>

                            除了国家和社会给予老年群体的关怀，家庭作为老年人的首属群体，自然而然地成为了老年人接触数字化媒介的“港湾”。<br/><br/>

                            从前，家人们最近的距离是在饭桌上。现在，家人们最远的距离同样也在饭桌上。一部部智能手机早已将儿女们的思索带向了屏幕之内的世界，老人们因为没有或不会使用智能手机而显得格格不入。<br/><br/>

                            “简易模式”是现在的智能手机普遍拥有的适老化改造措施，老人们往往只需要通过轻点放大的图标就能够完成一系列复杂的操作，而这也使得儿女的在“数字课程”上的教学成本大大降低，老人也更愿意学，更容易学。<br/><br/>

                            因此，社交平台上不断涌现出新的老年用户与博主。常刷抖音的人对北海爷爷和末那大叔的父子档组合应该不会陌生。北海爷爷健身、敷面膜、时刻穿着一丝不苟的西装，一直以精致形象示人。他既是儿子“末那大叔”生活里经常互动的老父亲，也是热衷于分享穿搭心得和生活点滴的老绅士。<br/><br/>

                            现在，父子抖音账号粉丝合计超过千万，在一些报道中，二人被称作“抖音宇宙网红父子档”。<br/><br/>

                            “只穿高跟鞋的汪奶奶”是抖音平台上最头部且商业化最成功的老年博主之一，目前有粉丝1582万。她凭借老年化演绎年轻人间流行的妆容、滤镜和说话方式走红，并得到了不少商业客户的青睐。<br/><br/>

                            根据腾讯深网的报道，“只穿高跟鞋的汪奶奶”的单条视频内容合作报价达到35万元，而在2020年7月汪奶奶参与联合主持的一场直播里，网友下单额度则超过600万。<br/><br/>
                        </h3>
                    </Row>
                </div>

                <div className="title">
                    <h1><b>结语</b></h1><br/><br/>
                    <img alt="..."
                         className="img-rounded img-responsive"
                         src={require("assets/img/silverDilemma/封面图2.jpg").default}
                    />
                </div>
                <div id="typography">
                    <Row>
                        <h3>
                            同时，也有许多富于“探险精神”的爷爷奶奶们试探着向互联网领域迈出第一步，朝这个陌生的“新世界”投去好奇的打量目光。<br/><br/>
                            据国家统计局数据统计，银发一族（50岁以上人群）是中国互联网最大的新增群体，近年来几乎保持两位数增长，在全体网民中占比增速达到近30%。在退休后把握着时间自由的老年人群体逐渐尝试在网络生活中排解空巢境遇的孤独，寻求沟通途径和归属感。<br/><br/>
                        </h3>
                        <br/>
                        <h3>
                            老年化遇上数字化，这并非是一场不可调和的矛盾。当我们在数字化的进程中享受着极度的狂欢时，不妨驻足回望，带一带步履蹒跚的中年人，搀一搀奋力前行的老年人。让那双小时候搀扶你行走的大手在数字时代也能有温暖的触摸，未来很远，我们很近。<br/><br/>
                        </h3>
                    </Row>
                </div>

            </Container>
        </>
    );
}

export default SectionTypography;
