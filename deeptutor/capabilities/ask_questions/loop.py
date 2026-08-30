"""Chat-loop hooks for the Ask Questions capability."""

from __future__ import annotations

from importlib import resources
from typing import Any

from deeptutor.capabilities.protocol import PromptBlock
from deeptutor.core.context import UnifiedContext


class AskQuestionsLoopCapability:
    """Contribute an adaptive questioning policy to the normal chat loop."""

    name = "ask_questions"
    owned_tools: tuple[str, ...] = ()

    def is_active(self, context: UnifiedContext) -> bool:
        return bool(context.metadata.get("ask_questions_mode"))

    def system_block(
        self,
        context: UnifiedContext,
        *,
        language: str,
        prompts: dict[str, Any],
    ) -> PromptBlock | None:
        _ = prompts
        if not self.is_active(context):
            return None
        return PromptBlock("ask_questions", _load_system_prompt(language))

    def augment_kwargs(
        self,
        tool_name: str,
        kwargs: dict[str, Any],
        context: UnifiedContext,
    ) -> dict[str, Any]:
        _ = tool_name, context
        return kwargs

    def pre_loop_seed(self, context: UnifiedContext) -> str:
        _ = context
        return ""


def _load_system_prompt(language: str) -> str:
    lang = "zh" if language.lower().startswith("zh") else "ko" if language.lower().startswith("ko") else "en"
    prompt_root = resources.files(__package__ or "deeptutor.capabilities.ask_questions").joinpath("prompts")
    prompt = prompt_root.joinpath(lang, "system.md")
    if not prompt.is_file():
        prompt = prompt_root.joinpath("en", "system.md")
    return prompt.read_text(encoding="utf-8").strip()


__all__ = ["AskQuestionsLoopCapability"]
