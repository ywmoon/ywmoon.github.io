---
id: 2026-08-28-infra-glossary
title: "[인프라 용어사전] RoCE (RDMA over Converged Ethernet) - 대규모 AI GPU 클러스터의 초저지연 백본 네트워크"
date: 2026-08-28
time: "06:03"
category: Terminology
status: published
summary: "📌 1. 30초 핵심 요약 & 개념 정의 RoCE(RDMA over Converged Ethernet, 로키)는 표준 이더넷(Ethernet) 네트워크 환경에서 운영체제(OS) 커널을 거치지 않고 서버 간 메모리를 직접 읽고 쓸 수 있게 해주는 초저지연·고대역폭 전송 기술입니다. 전통적인 TCP/IP 통신에서는 데이터 송수신 시 CPU가 인터럽트를 처리하고"
labels:
  - 인프라용어사전
  - IT백과사전
  - RoCE
  - RDMA
  - AWS
  - 데이터센터
  - AI네트워킹
---

<div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; line-height: 1.8; color: #1E293B;">

  <!-- 1. 30초 핵심 요약 & 개념 정의 -->
  <h2 style="border-left: 5px solid #2563EB; padding-left: 12px; margin: 28px 0 16px 0; color: #0F172A; font-size: 20px;">📌 1. 30초 핵심 요약 & 개념 정의</h2>
  <p><strong>RoCE(RDMA over Converged Ethernet, 로키)</strong>는 표준 이더넷(Ethernet) 네트워크 환경에서 운영체제(OS) 커널을 거치지 않고 서버 간 메모리를 직접 읽고 쓸 수 있게 해주는 초저지연·고대역폭 전송 기술입니다.</p>
  <p>전통적인 TCP/IP 통신에서는 데이터 송수신 시 CPU가 인터럽트를 처리하고 메모리 복사(Copy) 과정을 반복하면서 심각한 연산 오버헤드와 지연 시간(Latency)이 발생합니다. 반면 RoCE는 <strong>커널 바이패스(Kernel Bypass)</strong>와 <strong>제로 카피(Zero-Copy)</strong> 메커니즘을 통해 GPU나 호스트 메모리 간 데이터를 하드웨어(NIC) 레벨에서 직접 전송합니다. 이를 통해 수천~수십만 개의 GPU가 단일 컴퓨터처럼 거대한 AI 모델을 분산 학습할 때 발생하는 통신 병목을 최소화합니다.</p>

  <!-- 2. 작동 원리 & 메커니즘 -->
  <h2 style="border-left: 5px solid #2563EB; padding-left: 12px; margin: 28px 0 16px 0; color: #0F172A; font-size: 20px;">⚙️ 2. 작동 원리 & 메커니즘</h2>
  <p>RoCE는 InfiniBand 전용 장비 없이도 기존 표준 데이터센터 이더넷 스위칭 인프라 위에서 RDMA(Remote Direct Memory Access) 기능을 구현합니다. 현재 주류로 사용되는 <strong>RoCEv2</strong> 규격은 UDP/IP 캡슐화를 지원하여 레이어 3(L3) 라우팅이 가능한 엔터프라이즈 멀티 랙 환경을 완벽하게 지원합니다.</p>

  <div style="background:#F8FAFC; border-left:4px solid #2563EB; padding:14px 18px; border-radius:6px; margin:16px 0;">
    <strong>📐 [핵심 공식 한눈에 보기]</strong><br>
    <strong>전체 통신 지연(T_total)</strong> = <strong>네트워크 전송 시간(T_prop)</strong> + <strong>패킷 직렬화 시간(T_ser)</strong> + <span style="text-decoration: line-through; color: #94A3B8;">OS 커널 및 CPU 복사 지연(T_kernel)</span><br>
    <span style="font-size:13px; color:#64748B;">👉 <strong>핵심 의미</strong>: RoCE는 하드웨어 DMA를 통해 OS 커널 스택(T_kernel)을 완전히 우회(0으로 수렴)시켜 엔드투엔드 지연 시간을 마이크로초(μs) 단위로 단축합니다.</span>
  </div>

  <p>RoCE의 핵심 작동 메커니즘은 다음 세 가지 요소로 구성됩니다:</p>
  <ul style="padding-left: 20px; margin: 12px 0;">
    <li><strong>커널 바이패스 (Kernel Bypass):</strong> 사용자 공간(User Space) 애플리케이션이 OS 개입 없이 RNIC(RoCE 지원 네트워크 인터페이스 카드)의 하드웨어 큐(Queue Pair)에 직접 접근합니다.</li>
    <li><strong>무손실 이더넷 제어 (PFC & ECN):</strong> 패킷 유실을 방지하기 위해 802.1Qbb 우선순위 기반 흐름 제어(Priority Flow Control, PFC)와 혼잡 통보(Explicit Congestion Notification, ECN) 기술을 결합하여 버퍼 오버플로우를 제어합니다.</li>
    <li><strong>GPUDirect RDMA 연계:</strong> 시스템 호스트 메모리를 거치지 않고 PCIe 버스 또는 NVLink 스위치를 통해 노드 간 GPU HBM 메모리끼리 직접 통신합니다.</li>
  </ul>

  <h3 style="color: #1E293B; font-size: 16px; margin: 20px 0 10px 0;">📊 AI 클러스터 인터커넥트 기술 비교</h3>
  <div style="overflow-x: auto;">
    <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 14px; margin: 12px 0;">
      <thead>
        <tr style="background-color: #F1F5F9; border-bottom: 2px solid #CBD5E1;">
          <th style="padding: 10px 12px; font-weight: 600;">구분 항목</th>
          <th style="padding: 10px 12px; font-weight: 600;">전통적 TCP/IP (Ethernet)</th>
          <th style="padding: 10px 12px; font-weight: 600;">RoCEv2 (Ethernet RDMA)</th>
          <th style="padding: 10px 12px; font-weight: 600;">인피니밴드 (InfiniBand)</th>
        </tr>
      </thead>
      <tbody>
        <tr style="border-bottom: 1px solid #E2E8F0;">
          <td style="padding: 10px 12px; font-weight: 600;">지연 시간 (Latency)</td>
          <td style="padding: 10px 12px;">10 ~ 50 μs (높음)</td>
          <td style="padding: 10px 12px; color: #2563EB; font-weight: 600;">1 ~ 3 μs (초저지연)</td>
          <td style="padding: 10px 12px;">0.5 ~ 1.5 μs (극초저지연)</td>
        </tr>
        <tr style="border-bottom: 1px solid #E2E8F0;">
          <td style="padding: 10px 12px; font-weight: 600;">CPU 점유율 (Host Load)</td>
          <td style="padding: 10px 12px;">높음 (소프트웨어 인터럽트)</td>
          <td style="padding: 10px 12px;">매우 낮음 (하드웨어 오프로드)</td>
          <td style="padding: 10px 12px;">매우 낮음 (하드웨어 오프로드)</td>
        </tr>
        <tr style="border-bottom: 1px solid #E2E8F0;">
          <td style="padding: 10px 12px; font-weight: 600;">네트워크 호환성</td>
          <td style="padding: 10px 12px;">모든 표준 L2/L3 장비</td>
          <td style="padding: 10px 12px; color: #2563EB; font-weight: 600;">표준 이더넷 인프라 재활용 가능</td>
          <td style="padding: 10px 12px;">전용 스위치 및 케이블 필수 (독점)</td>
        </tr>
        <tr>
          <td style="padding: 10px 12px; font-weight: 600;">구축 및 유지 비용 (TCO)</td>
          <td style="padding: 10px 12px;">가장 낮음</td>
          <td style="padding: 10px 12px; color: #2563EB; font-weight: 600;">중간 (우수한 가성비 및 확장성)</td>
          <td style="padding: 10px 12px;">매우 높음 (단일 벤더 종속)</td>
        </tr>
      </tbody>
    </table>
  </div>

  <!-- 3. 오늘자 실제 적용 사례 -->
  <h2 style="border-left: 5px solid #2563EB; padding-left: 12px; margin: 28px 0 16px 0; color: #0F172A; font-size: 20px;">🏢 3. 오늘자 실제 적용 사례 (오늘 뉴스 연계)</h2>
  <p>오늘 아마존(AWS)이 엔비디아의 차세대 GPU 200만 개를 추가 도입하여 에이전틱 AI 및 피지컬 AI 전용 초대형 데이터센터 인프라를 확장한다는 소식이 발표되었습니다. 이처럼 200만 개에 달하는 GPU를 물리적으로 연결할 때 가장 결정적인 기술적 병목은 <strong>클러스터 인터커넥트(Scale-Out Networking)</strong>입니다.</p>
  <p>AWS는 자사의 맞춤형 가속 패브릭인 <strong>EFA(Elastic Fabric Adapter)</strong>와 차세대 네트워킹 스택에 RoCEv2 기반의 커널 우회 기술을 전면 적용하고 있습니다. 독점 규격인 인피니밴드에 전적으로 의존할 경우 수백만 개 규모의 랙 간 확장에서 비용과 공급망 종속 문제가 심각해집니다. 반면 RoCE 아키텍처를 도입하면 기존 클라우드 하이퍼스케일러의 이더넷 데이터센터 생태계를 그대로 활용하면서도, 분산 텐서 병렬화(Tensor Parallelism) 연산 시 노드 간 올리듀스(All-Reduce) 통신 지연을 극단적으로 낮출 수 있습니다.</p>

  <!-- 4. 기술적 장단점 및 도입 시 고려사항 -->
  <h2 style="border-left: 5px solid #2563EB; padding-left: 12px; margin: 28px 0 16px 0; color: #0F172A; font-size: 20px;">⚖️ 4. 기술적 장단점 및 도입 시 고려사항</h2>
  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin: 16px 0;">
    <div style="background: #F0FDF4; border: 1px solid #BBF7D0; padding: 14px; border-radius: 6px;">
      <strong style="color: #166534;">✅ 기술적 강점</strong>
      <ul style="padding-left: 18px; margin: 8px 0; font-size: 13px; color: #14532D;">
        <li>표준 이더넷 인프라를 활용하여 인피니밴드 대비 TCO 절감</li>
        <li>대규모 L3 라우팅을 지원하여 수만 대 이상 노드로의 선형적 확장 용이</li>
        <li>CPU 점유율을 90% 이상 절감하여 순수 애플리케이션 연산 자원 확보</li>
      </ul>
    </div>
    <div style="background: #FEF2F2; border: 1px solid #FECACA; padding: 14px; border-radius: 6px;">
      <strong style="color: #991B1B;">⚠️ 도입 시 주의점 (엔지니어링 제약)</strong>
      <ul style="padding-left: 18px; margin: 8px 0; font-size: 13px; color: #7F1D1D;">
        <li>PFC 설정 미흡 시 데드락(Deadlock) 및 일시정지 프레임 폭풍(PFC Storm) 위험</li>
        <li>정교한 ECN 임계값 튜닝 및 패킷 로드밸런싱 알고리즘 필수</li>
        <li>Ultra Ethernet Consortium(UEC) 등 개방형 표준 진화 추이 모니터링 필요</li>
      </ul>
    </div>
  </div>

  <!-- 5. 엔지니어/실무자를 위한 1줄 인사이트 -->
  <h2 style="border-left: 5px solid #2563EB; padding-left: 12px; margin: 28px 0 16px 0; color: #0F172A; font-size: 20px;">💡 5. 엔지니어/실무자를 위한 1줄 인사이트</h2>
  <blockquote style="background: #EFF6FF; border-left: 4px solid #3B82F6; margin: 16px 0; padding: 12px 16px; border-radius: 4px; color: #1E40AF; font-weight: 500;">
    "초거대 AI 클러스터의 성능은 개별 GPU의 연산력보다 노드 간 데이터를 막힘없이 실어나르는 백본 네트워크에 의해 결정되며, RoCE는 표준 이더넷의 경제성과 고성능 인터커넥트를 잇는 가장 강력한 표준 솔루션입니다."
  </blockquote>

</div>